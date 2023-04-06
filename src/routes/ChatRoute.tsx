import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Textarea,
} from '@mantine/core'
import {notifications} from '@mantine/notifications'
import {useLiveQuery} from 'dexie-react-hooks'
import {findLast} from 'lodash'
import {useState} from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import {MessageItem} from '../components/MessageItem'
import {db, ChatRole, MessageEntity} from '../db'
import {useChatGPT} from '../hooks/useChatGPT'
import {useChatId} from '../hooks/useChatId'
import {useSharedThinking} from '../hooks/useSharedThinking'
import {
  writingCharacters,
  writingFormats,
  writingStyles,
  writingTones,
} from '../utils/constants'
import {ChatMessage, useChatCompletion} from '../hooks/useChatCompletion'

export function ChatRoute() {
  const chatId = useChatId()
  // const chatGPT = useChatGPT()
  const chatCompletion = useChatCompletion()
  const messages = useLiveQuery(() => {
    if (!chatId) return []
    return db.messages.where('chatId').equals(chatId).sortBy('createdAt')
  }, [chatId])
  const [content, setContent] = useState('')
  const {
    opened: submitting,
    setOpenThinking,
    setCloseThinking,
  } = useSharedThinking()

  const chat = useLiveQuery(async () => {
    if (!chatId) return null
    return db.chats.get(chatId)
  }, [chatId])

  const [writingCharacter, setWritingCharacter] = useState<string | null>(null)
  const [writingTone, setWritingTone] = useState<string | null>(null)
  const [writingStyle, setWritingStyle] = useState<string | null>(null)
  const [writingFormat, setWritingFormat] = useState<string | null>(null)

  const getSystemMessage = () => {
    const message: string[] = []
    if (writingCharacter) message.push(`You are ${writingCharacter}.`)
    if (writingTone) message.push(`Respond in ${writingTone} tone.`)
    if (writingStyle) message.push(`Respond in ${writingStyle} style.`)
    if (writingFormat) message.push(writingFormat)
    if (message.length === 0)
      message.push('You are ChatGPT, a large language model trained by OpenAI.')
    return message.join(' ')
  }

  const submit = async () => {
    if (submitting) return
    if (!chatId) {
      notifications.show({
        title: 'Error',
        color: 'red',
        message: 'chatId is not defined. Please create a chat to get started.',
      })
      return
    }

    try {
      setOpenThinking()

      const userMessageId = await MessageEntity._()
        .setChatId(chatId)
        .setRole(ChatRole.USER)
        .setContent(content)
        .add()
      setContent('')

      const messagesSending = await chatCompletion.makeMessagesSendingRequest({
        chatId,
        systemContent: getSystemMessage(),
      })

      const assistantMessageReceivedId = await MessageEntity._()
        .setChatId(chatId)
        .setRole(ChatRole.ASSISTANT)
        .setContent('')
        .setRepliedId(userMessageId)
        .add()

      chatCompletion.send(messagesSending, async (chatMessage: ChatMessage) => {
        await db.messages
          .where({id: assistantMessageReceivedId})
          .modify((message) => {
            message.content = chatMessage.content
          })
      })

      setCloseThinking()

      // Upgrade title of the chat
      if (chat?.description === 'New Chat') {
        const createChatDescription = await chatCompletion.sendMessage({
          systemContent: getSystemMessage(),
          chatId,
          content:
            'What would be a short and relevant title for this chat? You must strictly answer with only the title, no other text is allowed.',
        })
        const chatDescription =
          createChatDescription.data.choices[0].message?.content

        if (createChatDescription.data.usage) {
          await db.chats.where({id: chatId}).modify((chat) => {
            const totalTokens = createChatDescription.data.usage!.total_tokens

            chat.description = chatDescription ?? 'New Chat'
            chat.totalTokens = (chat.totalTokens || 0) + totalTokens
          })
        }
      }
    } catch (error: any) {
      if (error.toJSON().message === 'Network Error') {
        notifications.show({
          title: 'Error',
          color: 'red',
          message: 'No internet connection.',
        })
      }
      const message = error.response?.data?.error?.message
      if (message) {
        notifications.show({title: 'Error', color: 'red', message})
      }
    } finally {
      setCloseThinking()
    }
  }

  // const submit = async () => {
  //   if (submitting) return

  //   if (!chatId) {
  //     notifications.show({
  //       title: 'Error',
  //       color: 'red',
  //       message: 'chatId is not defined. Please create a chat to get started.',
  //     })
  //     return
  //   }

  //   try {
  //     setOpenThinking()

  //     const messageId = await MessageEntity._()
  //       .setChatId(chatId)
  //       .setRole(ChatRole.USER)
  //       .setContent(content)
  //       .add()
  //     setContent('')

  //     const result = await chatGPT.sendMessage({
  //       chatId,
  //       systemContent: getSystemMessage(),
  //     })

  //     // * Update total token usage
  //     if (result.data.usage) {
  //       await db.chats.where({id: chatId}).modify((chat) => {
  //         const totalTokens = result.data.usage!.total_tokens
  //         chat.totalTokens = (chat.totalTokens || 0) + totalTokens
  //       })
  //     }

  //     const assistantMessage = result.data.choices[0].message?.content
  //     await MessageEntity._()
  //       .setChatId(chatId)
  //       .setRole(ChatRole.ASSISTANT)
  //       .setContent(assistantMessage)
  //       .setRepliedId(messageId)
  //       .add()

  //     setCloseThinking()

  //     // Upgrade title of the chat
  //     if (chat?.description === 'New Chat') {
  //       const createChatDescription = await chatGPT.sendMessage({
  //         systemContent: getSystemMessage(),
  //         chatId,
  //         content:
  //           'What would be a short and relevant title for this chat? You must strictly answer with only the title, no other text is allowed.',
  //       })
  //       const chatDescription =
  //         createChatDescription.data.choices[0].message?.content

  //       if (createChatDescription.data.usage) {
  //         await db.chats.where({id: chatId}).modify((chat) => {
  //           const totalTokens = createChatDescription.data.usage!.total_tokens

  //           chat.description = chatDescription ?? 'New Chat'
  //           chat.totalTokens = (chat.totalTokens || 0) + totalTokens
  //         })
  //       }
  //     }
  //   } catch (error: any) {
  //     if (error.toJSON().message === 'Network Error') {
  //       notifications.show({
  //         title: 'Error',
  //         color: 'red',
  //         message: 'No internet connection.',
  //       })
  //     }
  //     const message = error.response?.data?.error?.message
  //     if (message) {
  //       notifications.show({title: 'Error', color: 'red', message})
  //     }
  //   } finally {
  //     setCloseThinking()
  //   }
  // }

  if (!chatId) return null

  return (
    <>
      <Container id="scroll-view" pt="xl" pb={100}>
        <Stack spacing="xs">
          {messages?.map((message, i) => (
            <MessageItem key={message.id.toString()} message={message} />
          ))}
        </Stack>
        {submitting && (
          <Card withBorder mt="xs">
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </Card>
        )}
      </Container>
      <Box
        py="lg"
        sx={(theme) => ({
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          [`@media (min-width: ${theme.breakpoints.md})`]: {
            left: 300,
          },
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[0],
        })}
      >
        <Container>
          {messages?.length === 0 && (
            <SimpleGrid
              mb="sm"
              spacing="xs"
              breakpoints={[
                {minWidth: 'sm', cols: 4},
                {maxWidth: 'sm', cols: 2},
              ]}
            >
              <Select
                value={writingCharacter}
                onChange={setWritingCharacter}
                data={writingCharacters}
                placeholder="Character"
                variant="filled"
                searchable
                clearable
                sx={{flex: 1}}
              />
              <Select
                value={writingTone}
                onChange={setWritingTone}
                data={writingTones}
                placeholder="Tone"
                variant="filled"
                searchable
                clearable
                sx={{flex: 1}}
              />
              <Select
                value={writingStyle}
                onChange={setWritingStyle}
                data={writingStyles}
                placeholder="Style"
                variant="filled"
                searchable
                clearable
                sx={{flex: 1}}
              />
              <Select
                value={writingFormat}
                onChange={setWritingFormat}
                data={writingFormats}
                placeholder="Format"
                variant="filled"
                searchable
                clearable
                sx={{flex: 1}}
              />
            </SimpleGrid>
          )}
          <Flex gap="sm">
            <Textarea
              key={chatId}
              sx={{flex: 1}}
              placeholder="Your message here..."
              autosize
              autoFocus
              disabled={submitting}
              minRows={1}
              maxRows={5}
              value={content}
              onChange={(event) => setContent(event.currentTarget.value)}
              onKeyDown={async (event) => {
                if (event.code === 'Enter' && !event.shiftKey) {
                  event.preventDefault()
                  submit()
                }
                if (event.code === 'ArrowUp') {
                  event.preventDefault()
                  const nextUserMessage = findLast(
                    messages,
                    (message) => message.role === 'user'
                  )
                  setContent(nextUserMessage?.content ?? '')
                }
                if (event.code === 'ArrowDown') {
                  event.preventDefault()
                  const lastUserMessage = findLast(
                    messages,
                    (message) => message.role === 'user'
                  )
                  if (lastUserMessage?.content === content) {
                    setContent('')
                  }
                }
              }}
            />
            <Button h="auto" onClick={submit}>
              <AiOutlineSend />
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
