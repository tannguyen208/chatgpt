import {
  ActionIcon,
  Box,
  Code,
  CopyButton,
  Flex,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import {IconCopy, IconSettings} from '@tabler/icons-react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import codeLight from 'prism-react-renderer/themes/github'
import codeDark from 'prism-react-renderer/themes/vsDark'
import {memo} from 'react'
import styled from 'styled-components'
import '../styles/markdown.scss'

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`

export const Pre = styled.pre`
  text-align: left;
  padding: 0 10px 10px;
  overflow: scroll;
  border-radius: 0 0 6px 6px;

  & .token-line {
    font-size: 14px;
    line-height: 20px;
    font-family: monospace;
  }
`

export const Line = styled.div`
  display: table-row;
`

export const LineContent = styled.span`
  display: table-cell;
`

export const MessageItemCode = memo(function MessageItemCode(props: any) {
  const theme = useMantineTheme()
  const lang = props.className?.replace('language-', '')
  const strings = props.children.join(' ').trim()

  if (Boolean(props.inline)) {
    return <Code {...props} inline="true" />
  }

  return (
    <Box>
      <Flex
        justify="flex-start"
        align="center"
        direction="row"
        style={{
          height: 36,
          paddingRight: 4,
          borderRadius: '6px 6px 0 0',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? 'rgb(30, 30, 30)'
              : 'rgb(246, 248, 250)',
        }}
      >
        <IconSettings opacity={0.5} size={20} width={38} />
        <Text style={{flex: 1}} fw={700}>
          {lang?.toUpperCase() || 'BASE'}
        </Text>
        <CopyButton value={String(strings)}>
          {({copied, copy}) => (
            <Tooltip
              label={
                copied ? 'Code copied to clipboard' : 'Copy code to clipboard'
              }
              position="left"
            >
              <ActionIcon onClick={copy}>
                <IconCopy opacity={0.4} size={20} />
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Flex>
      <Highlight
        {...defaultProps}
        theme={theme.colorScheme === 'dark' ? codeDark : codeLight}
        code={strings}
        language={lang || 'tsx'}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({line, key: i})}>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </Box>
  )
})
