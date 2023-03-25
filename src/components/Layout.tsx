import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  MediaQuery,
  Navbar,
  rem,
  ScrollArea,
  SegmentedControl,
  TextInput,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {
  IconBrandGithub,
  IconDatabase,
  IconMoonStars,
  IconPlus,
  IconSearch,
  IconSettings,
  IconSunHigh,
  IconX,
} from '@tabler/icons-react'
import {Outlet, useNavigate, useRouter} from '@tanstack/react-location'
import {useLiveQuery} from 'dexie-react-hooks'
import {nanoid} from 'nanoid'
import {useEffect, useState} from 'react'
import {db} from '../db'
import {useChatId} from '../hooks/useChatId'
import {Chats} from './Chats'
import {CreatePromptModal} from './CreatePromptModal'
import {DatabaseModal} from './DatabaseModal'
import {Prompts} from './Prompts'
import {SettingsModal} from './SettingsModal'

declare global {
  interface Window {
    todesktop?: any
  }
}

export function Layout() {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const [tab, setTab] = useState<'Chats' | 'Prompts'>('Chats')
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  const navigate = useNavigate()
  const router = useRouter()
  const [promptOpened, {open: openPrompt, close: closePrompt}] =
    useDisclosure(false)

  const [search, setSearch] = useState('')
  const chatId = useChatId()
  const chat = useLiveQuery(async () => {
    if (!chatId) return null
    return db.chats.get(chatId)
  }, [chatId])

  const border = `${rem(1)} solid ${
    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
  }`

  useEffect(() => {
    setOpened(false)
  }, [router.state.location])

  return (
    <AppShell
      className={`${colorScheme}-theme`}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar width={{md: 300}} hiddenBreakpoint="md" hidden={!opened}>
          <Navbar.Section
            sx={(theme) => ({
              padding: rem(4),
              background:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[1],
              borderBottom: border,
            })}
          >
            <SegmentedControl
              fullWidth
              value={tab}
              onChange={(value) => setTab(value as typeof tab)}
              data={['Chats', 'Prompts']}
            />
            <Box sx={{padding: 4}}>
              {tab === 'Chats' && (
                <Button
                  fullWidth
                  leftIcon={<IconPlus size={20} />}
                  onClick={() => {
                    const id = nanoid()
                    db.chats.add({
                      id,
                      description: 'New Chat',
                      totalTokens: 0,
                      createdAt: new Date(),
                    })
                    navigate({to: `/chats/${id}`})
                  }}
                >
                  New Chat
                </Button>
              )}
              {tab === 'Prompts' && (
                <>
                  <Button
                    fullWidth
                    onClick={openPrompt}
                    leftIcon={<IconPlus size={20} />}
                  >
                    New Prompt
                  </Button>
                  <CreatePromptModal
                    isOpen={promptOpened}
                    close={closePrompt}
                  />
                </>
              )}
            </Box>
          </Navbar.Section>
          <Navbar.Section
            sx={(theme) => ({
              padding: rem(4),
              background:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[7]
                  : theme.white,
              borderBottom: border,
            })}
          >
            <TextInput
              variant="unstyled"
              radius={0}
              placeholder="Search"
              value={search}
              onChange={(event) =>
                setSearch(event.currentTarget.value.toLowerCase())
              }
              sx={{paddingInline: 4}}
              icon={<IconSearch opacity={0.8} size={20} />}
              rightSection={
                !!search && (
                  <ActionIcon onClick={() => setSearch('')}>
                    <IconX opacity={0.5} size={20} />{' '}
                  </ActionIcon>
                )
              }
            />
          </Navbar.Section>
          <Navbar.Section grow component={ScrollArea}>
            {tab === 'Chats' && <Chats search={search} />}
            {tab === 'Prompts' && (
              <Prompts search={search} onPlay={() => setTab('Chats')} />
            )}
          </Navbar.Section>
          <Navbar.Section sx={{borderTop: border}} p="xs">
            <Center>
              <Tooltip
                label={colorScheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              >
                <ActionIcon
                  sx={{flex: 1}}
                  size="xl"
                  onClick={() => toggleColorScheme()}
                >
                  {colorScheme === 'dark' ? (
                    <IconSunHigh size={20} />
                  ) : (
                    <IconMoonStars size={20} />
                  )}
                </ActionIcon>
              </Tooltip>
              <SettingsModal>
                <Tooltip label="Settings">
                  <ActionIcon sx={{flex: 1}} size="xl">
                    <IconSettings size={20} />
                  </ActionIcon>
                </Tooltip>
              </SettingsModal>
              <DatabaseModal>
                <Tooltip label="Database">
                  <ActionIcon sx={{flex: 1}} size="xl">
                    <IconDatabase size={20} />
                  </ActionIcon>
                </Tooltip>
              </DatabaseModal>
              <Tooltip label="Source Code">
                <ActionIcon
                  component="a"
                  href="https://github.com/tannguyen208/chatgpt"
                  target="_blank"
                  sx={{flex: 1}}
                  size="xl"
                >
                  <IconBrandGithub size={20} />
                </ActionIcon>
              </Tooltip>
            </Center>
          </Navbar.Section>
        </Navbar>
      }
      layout="alt"
      padding={0}
    >
      <MediaQuery largerThan="md" styles={{display: 'none'}}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          className="app-region-no-drag"
          sx={{position: 'fixed', top: 16, right: 16, zIndex: 100}}
        />
      </MediaQuery>
      <Outlet />
    </AppShell>
  )
}
