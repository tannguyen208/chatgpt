import {ActionIcon, Box, Flex, Group, Text, Tooltip} from '@mantine/core'
import {IconPlayerPlay} from '@tabler/icons-react'
import {useNavigate} from '@tanstack/react-location'
import {useLiveQuery} from 'dexie-react-hooks'
import {useMemo} from 'react'
import {ChatEntity, db, ChatRole, MessageEntity} from '../db'
import {useChatGPT} from '../hooks/useChatGPT'
import {useSharedThinking} from '../hooks/useSharedThinking'
import {DeletePromptModal} from './DeletePromptModal'
import {EditPromptModal} from './EditPromptModal'

export function Prompts({
  onPlay,
  search,
}: {
  onPlay: () => void
  search: string
}) {
  const chatGPT = useChatGPT()
  const navigate = useNavigate()
  const prompts = useLiveQuery(() =>
    db.prompts.orderBy('createdAt').reverse().toArray()
  )
  const filteredPrompts = useMemo(
    () =>
      (prompts ?? []).filter((prompt) => {
        if (!search) return true
        return (
          prompt.title.toLowerCase().includes(search) ||
          prompt.content.toLowerCase().includes(search)
        )
      }),
    [prompts, search]
  )
  const apiKey = useLiveQuery(async () => {
    return (await db.settings.where({id: 'general'}).first())?.openAiApiKey
  })
  const {setOpenThinking, setCloseThinking} = useSharedThinking()

  return (
    <>
      {filteredPrompts.map((prompt) => (
        <Flex
          key={prompt.id}
          sx={(theme) => ({
            marginTop: 1,
            padding: theme.spacing.xs,
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Box
            sx={(theme) => ({
              flexGrow: 1,
              width: 0,
              fontSize: theme.fontSizes.sm,
            })}
          >
            <Text
              weight={500}
              sx={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              {prompt.title}
            </Text>
            <Text
              color="dimmed"
              sx={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              {prompt.content}
            </Text>
          </Box>
          <Group spacing="none">
            <Tooltip label="New Chat From Prompt">
              <ActionIcon
                size="lg"
                onClick={async () => {
                  if (!apiKey) return

                  const chatId = await ChatEntity._().add()
                  const messageId = await MessageEntity._()
                    .setChatId(chatId)
                    .setRole(ChatRole.USER)
                    .setContent(prompt.content)
                    .add()

                  navigate({to: `/chats/${chatId}`})
                  onPlay()

                  setOpenThinking()
                  const result = await chatGPT.sendMessage({
                    chatId,
                    systemContent:
                      'You are ChatGPT, a large language model trained by OpenAI.',
                  })

                  const resultDescription =
                    result.data.choices[0].message?.content

                  await MessageEntity._()
                    .setChatId(chatId)
                    .setRole(ChatRole.ASSISTANT)
                    .setContent(resultDescription)
                    .setRepliedId(messageId)
                    .add()

                  if (result.data.usage) {
                    await db.chats.where({id: chatId}).modify((chat) => {
                      const totalTokens = result.data.usage!.total_tokens
                      chat.totalTokens = (chat.totalTokens || 0) + totalTokens
                    })
                  }

                  setCloseThinking()
                }}
              >
                <IconPlayerPlay size={20} />
              </ActionIcon>
            </Tooltip>
            <EditPromptModal prompt={prompt} />
            <DeletePromptModal prompt={prompt} />
          </Group>
        </Flex>
      ))}
    </>
  )
}
