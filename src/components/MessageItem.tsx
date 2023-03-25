import {useMemo} from 'react'
import {Box, Card, Flex, Table, Text, ThemeIcon} from '@mantine/core'
import {IconUser} from '@tabler/icons-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Message} from '../db'
import {CreatePromptModal} from './CreatePromptModal'
import {LogoIcon} from './Logo'
import {MessageItemCode} from './MessageItemCode'
import {ScrollIntoView} from './ScrollIntoView'

import '../styles/markdown.scss'

export function MessageItem({message}: {message: Message}) {
  const wordCount = useMemo(() => {
    var matches = message.content.match(/[\w\d\’\'-\(\)]+/gi)
    return matches ? matches.length : 0
  }, [message.content])

  return (
    <ScrollIntoView>
      <Card withBorder>
        <Flex gap="sm">
          {message.role === 'user' && (
            <ThemeIcon style={{width: 32}} color="gray" size="md">
              <IconUser size={18} />
            </ThemeIcon>
          )}
          {message.role === 'assistant' && <LogoIcon style={{height: 32}} />}

          <Box sx={{flex: 1, width: 0}} className="markdown">
            <Flex gap="sm">
              <Box sx={{flex: 1, width: 0, alignSelf: 'center'}}>
                <ReactMarkdown
                  children={message.content}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({node, ...props}) => (
                      <Table
                        striped
                        withBorder
                        highlightOnHover
                        fontSize="xs"
                        verticalSpacing="xs"
                        horizontalSpacing="xs"
                        {...props}
                      />
                    ),
                    code: ({node, ...props}) => <MessageItemCode {...props} />,
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
              {/* <CopyButton value={message.content}>
                {({copied, copy}) => (
                  <Tooltip label={copied ? 'Copied' : 'Copy'} position="left">
                    <ActionIcon onClick={copy}>
                      <IconCopy opacity={0.5} size={20} />
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton> */}
              <CreatePromptModal content={message.content} />
            </Flex>
          </Box>
        </Flex>
      </Card>
    </ScrollIntoView>
  )
}
