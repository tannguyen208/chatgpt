import {Code} from '@mantine/core'
import {Prism} from '@mantine/prism'
import {Language} from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import vsLight from 'prism-react-renderer/themes/vsLight'
import '../styles/markdown.scss'

export function MessageItemCode(props: any) {
  const lang = props.className?.replace('language-', '')
  const strings = props.children.join(' ')

  if (Boolean(props.inline)) {
    return <Code {...props} inline="true" />
  }

  return (
    <Prism
      trim
      radius="xs"
      language={(lang as Language) || 'tsx'}
      getPrismTheme={({colorScheme}) => {
        return colorScheme === 'dark' ? vsDark : vsLight
      }}
      {...props}
      inline="false"
    >
      {strings}
    </Prism>
  )
}
