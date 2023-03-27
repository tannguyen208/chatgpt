import {
  ActionIcon,
  Box,
  Flex,
  Menu,
  Table,
  Text,
  ThemeIcon,
} from '@mantine/core'
import {
  IconDotsVertical,
  IconEdit,
  IconPlaylistAdd,
  IconSend,
  IconTrash,
  IconUser,
} from '@tabler/icons-react'
import {useMemo} from 'react'
import {useDisclosure} from '@mantine/hooks'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {CreatePromptModal} from './CreatePromptModal'
import {LogoIcon} from './Logo'
import {MessageItemCode} from './MessageItemCode'
import {ScrollIntoView} from './ScrollIntoView'
import {ResendMessageEntityItemModal} from './ResendChatMessageItemModal'
import {DeleteMessageEntityItemModal} from './DeleteChatMessageItemModal'
import {MessageEntity} from '../db'
import '../styles/markdown.scss'

export function MessageItem({message}: {message: MessageEntity}) {
  const [promptOpened, {open: openPrompt, close: closePrompt}] =
    useDisclosure(false)
  const [resendOpened, {open: openResend, close: closeResend}] =
    useDisclosure(false)
  const [deleteOpened, {open: openDelete, close: closeDelete}] =
    useDisclosure(false)

  const wordCount = useMemo(() => {
    const matches = message.content.match(/[\w\d\’\'-\(\)]+/gi)
    return matches ? matches.length : 0
  }, [message.content])

  return (
    <ScrollIntoView>
      <Flex
        className="message-item"
        gap="sm"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#fff',
        })}
      >
        {message.role === 'user' && (
          <ThemeIcon style={{width: 32}} color="gray" size="md">
            <IconUser size={18} />
          </ThemeIcon>
        )}
        {message.role === 'assistant' && <LogoIcon style={{height: 32}} />}

        <Box sx={{flex: 1, width: 0, alignSelf: 'center'}} className="markdown">
          <ReactMarkdown
            children={message.content}
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({node, ...props}) => (
                <Table
                  striped
                  highlightOnHover
                  fontSize="xs"
                  verticalSpacing="xs"
                  horizontalSpacing="xs"
                  {...props}
                />
              ),
              code: ({node, ...props}) => {
                console.log(props)
                return <MessageItemCode {...props} />
              },
            }}
          />
          {message.role === 'assistant' && (
            <Box>
              <Text size="sm" color="dimmed">
                {wordCount} words
              </Text>
            </Box>
          )}
        </Box>

        <Menu position="left" shadow="md" width={200}>
          <Menu.Target>
            <ActionIcon>
              <IconDotsVertical size={18} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={openResend} icon={<IconSend size={14} />}>
              Resend
            </Menu.Item>
            <Menu.Item
              onClick={openPrompt}
              icon={<IconPlaylistAdd size={14} />}
            >
              Save Prompt
            </Menu.Item>
            <Menu.Item
              onClick={openDelete}
              color="red"
              icon={<IconTrash size={14} />}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <ResendMessageEntityItemModal
          message={message}
          isOpen={resendOpened}
          close={closeResend}
        />
        <CreatePromptModal
          isOpen={promptOpened}
          close={closePrompt}
          content={message.content}
        />
        <DeleteMessageEntityItemModal
          message={message}
          isOpen={deleteOpened}
          close={closeDelete}
        />
      </Flex>
    </ScrollIntoView>
  )
}
