import {
  Badge,
  Button,
  Center,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
} from '@mantine/core'
import {
  IconCurrencyDollar,
  IconKey,
  IconLock,
  IconNorthStar,
} from '@tabler/icons-react'
import {useLiveQuery} from 'dexie-react-hooks'
import {Logo} from '../components/Logo'
import {SettingsModal} from '../components/SettingsModal'
import {db} from '../db'

export function IndexRoute() {
  const settings = useLiveQuery(() => db.settings.get('general'))
  const {openAiApiKey} = settings ?? {}

  return (
    <>
      <Center py="xl" sx={{height: '100%'}}>
        <Container size="sm">
          <Badge mb="lg">GPT-4 Ready</Badge>
          <Text>
            <Logo style={{maxWidth: 240}} />
          </Text>
          <Text mt={4} size="xl">
            Not just another ChatGPT user-interface!
          </Text>
          <SimpleGrid
            mt={50}
            cols={3}
            spacing={30}
            breakpoints={[{maxWidth: 'md', cols: 1}]}
          >
            {features.map((feature) => (
              <div key={feature.title}>
                <ThemeIcon variant="outline" size={50} radius={50}>
                  <feature.icon size={26} stroke={1.5} />
                </ThemeIcon>
                <Text mt="sm" mb={7}>
                  {feature.title}
                </Text>
                <Text size="sm" color="dimmed" sx={{lineHeight: 1.6}}>
                  {feature.description}
                </Text>
              </div>
            ))}
          </SimpleGrid>
          <Group mt={50}>
            <SettingsModal>
              <Button
                size="md"
                variant={openAiApiKey ? 'light' : 'filled'}
                leftIcon={<IconKey size={20} />}
              >
                {openAiApiKey ? 'Change OpenAI Key' : 'Enter OpenAI Key'}
              </Button>
            </SettingsModal>
          </Group>
        </Container>
      </Center>
    </>
  )
}

const features = [
  {
    icon: IconCurrencyDollar,
    title: 'Free and open source',
    description:
      'This app is provided for free and the source code is available on GitHub.',
  },
  {
    icon: IconLock,
    title: 'Privacy focused',
    description:
      'No tracking, no cookies, no bullshit. All your data is stored locally.',
  },
  {
    icon: IconNorthStar,
    title: 'Best experience',
    description:
      'Crafted with love and care to provide the best experience possible.',
  },
]
