import {Group, Text, ThemeIcon, UnstyledButton} from '@mantine/core'
import {useLiveQuery} from 'dexie-react-hooks'
import {ChatEntity, db} from '../db'

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
  chat: ChatEntity
}

export function MainLink({icon, color, label, chat}: MainLinkProps) {
  const firstMessage = useLiveQuery(async () => {
    return (await db.messages.orderBy('createdAt').toArray()).filter(
      (m) => m.chatId === chat.id
    )[0]
  }, [chat])

  return (
    <UnstyledButton
      sx={(theme) => ({
        // display: "block",
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text
          size="sm"
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            flex: 1,
            width: 0,
          }}
        >
          {label}
          <Text size="xs" color="gray">
            {firstMessage?.content}
          </Text>
        </Text>
      </Group>
    </UnstyledButton>
  )
}
