import {nanoid} from 'nanoid'
import {useLiveQuery} from 'dexie-react-hooks'
import {ChatCompletionRequestMessage} from 'openai'
import {notifications} from '@mantine/notifications'
import {db} from '../db'
import {createChatCompletion} from '../utils/openai'
import {IndexableType} from 'dexie'

export function useChatGPT() {
  const apiKey = useLiveQuery(async () => {
    return (await db.settings.where({id: 'general'}).first())?.openAiApiKey
  }) as string

  const checkAPIKey = () => {
    if (!Boolean(apiKey)) {
      return notifications.show({
        title: 'Error',
        color: 'red',
        message: 'OpenAI API Key is not defined. Please set your API Key',
      })
    }

    return true
  }

  const sendMessage = async ({
    chatId,
    content,
    systemContent,
  }: {
    chatId?: string | IndexableType
    content?: string
    systemContent?: string
  } = {}) => {
    // Declare two empty arrays to store chat messages
    let messagesCached: ChatCompletionRequestMessage[] = []
    let messagesSending: ChatCompletionRequestMessage[] = []

    // If chatId is not undefined, pull old messages from database where chatId matches and sort them by createdAt
    if (chatId) {
      messagesCached = await db.messages.where({chatId}).sortBy('createdAt')
    }

    // If systemContent exists, push it to messagesSending array with role as 'system'
    if (systemContent && typeof systemContent === 'string') {
      messagesSending.push({role: 'system', content: systemContent.trim()})
    }

    // Using spread operator combine the messages from messagesCached array (old messages from database) into messagesSending
    messagesSending.push(
      ...messagesCached.map((message) => ({
        role: message.role,
        content: message.content.trim(),
      }))
    )

    // If content exists, add it to messagesCached array as a new user message with role as 'user'
    if (content && typeof content === 'string') {
      messagesCached.push({role: 'user', content: content.trim()})
    }

    return createChatCompletion(apiKey, messagesSending)
  }

  return {apiKey, checkAPIKey, sendMessage}
}

