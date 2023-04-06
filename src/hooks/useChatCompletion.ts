import {useLiveQuery} from 'dexie-react-hooks'
import {useCallback, useState} from 'react'
import {SSE} from 'sse'
import {db} from '../db'
import {useChatGPT} from './useChatGPT'

export enum GPT35 {
  TURBO = 'gpt-3.5-turbo',
  TURBO_0301 = 'gpt-3.5-turbo-0301',
}

export enum GPT4 {
  BASE = 'gpt-4',
  BASE_0314 = 'gpt-4-0314',
  BASE_32K = 'gpt-4-32k',
  BASE_32K_0314 = 'gpt-4-32k-0314',
}

interface ChatMessageIncomingChunk {
  content?: string
  role?: string
}

export interface OpenAIChatMessage {
  content: string
  role: string
}

export interface ChatMessageToken extends OpenAIChatMessage {
  timestamp: number
}

export interface ChatMessageParams extends OpenAIChatMessage {
  timestamp?: number
  meta?: {
    loading?: boolean
    responseTime?: string
    chunks?: ChatMessageToken[]
  }
}

export interface ChatMessage extends ChatMessageParams {
  timestamp: number
  meta: {
    loading: boolean
    responseTime: string
    chunks: ChatMessageToken[]
  }
}

export interface OpenAIStreamingProps {
  apiKey?: string
  model?: GPT35 | GPT4
}

const CHAT_COMPLETIONS_URL = 'https://api.openai.com/v1/chat/completions'

// Utility method for transforming a chat message decorated with metadata to a more limited shape
// that the OpenAI API expects.
const officialOpenAIParams = ({
  content,
  role,
}: ChatMessage): OpenAIChatMessage => ({content, role})

// Utility method for transforming a chat message that may or may not be decorated with metadata
// to a fully-fledged chat message with metadata.
const createChatMessage = ({
  content,
  role,
  ...restOfParams
}: ChatMessageParams): ChatMessage => ({
  content,
  role,
  timestamp: restOfParams.timestamp || Date.now(),
  meta: {
    loading: false,
    responseTime: '',
    chunks: [],
    ...restOfParams.meta,
  },
})

export const useChatCompletion = (
  {model}: OpenAIStreamingProps = {model: GPT35.TURBO}
) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const chatGPT = useChatGPT()

  const send = useCallback(
    (newMessages?: ChatMessageParams[], callback?: any) => {
      // If the array is empty or there are no new messages submitted, that is a special request to
      // clear the `messages` queue and prepare to start over, do not make a request.
      if (!newMessages || newMessages.length < 1) {
        setMessages([])
        return
      }

      // Don't let two streaming calls occur at the same time. If the last message in the list has
      // a `loading` state set to true, we know there is a request in progress.
      if (messages[messages.length - 1]?.meta?.loading) return

      // Record the timestamp before the request starts.
      const beforeTimestamp = Date.now()

      // Update the messages list with the new message as well as a placeholder for the next message
      // that will be returned from the API.
      const updatedMessages: ChatMessage[] = [
        ...messages,
        ...newMessages.map(createChatMessage),
        createChatMessage({content: '', role: '', meta: {loading: true}}),
      ]

      // Set the updated message list.
      setMessages(updatedMessages)

      // The payload of the SSE request itself.
      const payload = JSON.stringify({
        model,
        // Filter out the last message, since technically that is the message that the server will
        // return from this request, we're just storing a placeholder for it ahead of time to signal
        // to the UI something is happening.
        // Map the updated message structure to only what the OpenAI API expects.
        messages: updatedMessages
          .filter((_, i) => updatedMessages.length - 1 !== i)
          .map(officialOpenAIParams),
        stream: true,
      })

      // Define the headers for the request.
      const CHAT_HEADERS = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${chatGPT.apiKey}`,
      }

      // Create the SSE request to the OpenAI chat completion API endpoint
      const source = new SSE(CHAT_COMPLETIONS_URL, {
        headers: CHAT_HEADERS,
        method: 'POST',
        payload,
      })

      // For each chunk received, process it and store it in the latest message.
      source.addEventListener('message', (e: any) => {
        // If a DONE token is found, the stream has been terminated.
        if (e?.data !== '[DONE]') {
          // Parse the data from the update.
          const payload = JSON.parse(e?.data || '{}')
          const chunk: ChatMessageIncomingChunk = payload?.choices?.[0]?.delta

          // Update the messages list, specifically update the last message entry with the most
          // recently received chunk.
          setMessages((msgs) =>
            msgs.map((message, i) => {
              if (updatedMessages.length - 1 === i) {
                const returnValue = {
                  content: message.content + (chunk?.content || ''),
                  role: message.role + (chunk?.role || ''),
                  timestamp: 0,
                  meta: {
                    ...message.meta,
                    chunks: [
                      ...message.meta.chunks,
                      {
                        content: chunk?.content || '',
                        role: chunk?.role || '',
                        timestamp: Date.now(),
                      },
                    ],
                  },
                }

                callback && callback(returnValue, false)
                return returnValue
              }

              return message
            })
          )
        } else {
          source.close()
        }
      })

      // Add an event listener for when the connection closes.
      source.addEventListener('readystatechange', (e: any) => {
        // readyState: 0 - connecting, 1 - open, 2 - closed
        if (e.readyState && e.readyState > 1) {
          // Determine the final timestamp, and calculate the number of seconds the full request took.
          const afterTimestamp = Date.now()
          const diffInSeconds = (afterTimestamp - beforeTimestamp) / 1000
          const formattedDiff = diffInSeconds.toFixed(2) + ' sec.'

          // Update the messages list, specifically update the last message entry with the final
          // details of the full request/response.
          setMessages((msgs) =>
            msgs.map((message, i) => {
              if (updatedMessages.length - 1 === i) {
                const returnValue = {
                  ...message,
                  timestamp: afterTimestamp,
                  meta: {
                    ...message.meta,
                    loading: false,
                    responseTime: formattedDiff,
                  },
                }

                callback && callback(returnValue, true)
                return returnValue
              }
              return message
            })
          )
        }
      })

      source.stream()
    },
    [chatGPT.apiKey]
  )

  return {send, ...chatGPT}
}

