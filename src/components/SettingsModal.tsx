import {
  Alert,
  Anchor,
  Button,
  Flex,
  List,
  Modal,
  PasswordInput,
  Select,
  Stack,
  Text,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {notifications} from '@mantine/notifications'
import {useLiveQuery} from 'dexie-react-hooks'
import {cloneElement, memo, ReactElement, useEffect, useState} from 'react'
import {db} from '../db'
import {availableModels, defaultModel} from '../utils/constants'
import {checkOpenAIKey} from '../utils/openai'

export const SettingsModal = memo(function SettingsModal({
  children,
}: {
  children: ReactElement
}) {
  const [opened, {open, close}] = useDisclosure(false)
  const [submitting, setSubmitting] = useState(false)

  const [value, setValue] = useState('')
  const [model, setModel] = useState(defaultModel)

  const settings = useLiveQuery(async () => {
    return db.settings.where({id: 'general'}).first()
  })

  useEffect(() => {
    if (settings?.openAiApiKey) {
      setValue(settings.openAiApiKey)
    }
    if (settings?.openAiModel) {
      setModel(settings.openAiModel)
    }
  }, [settings])

  return (
    <>
      {cloneElement(children, {onClick: open})}
      <Modal opened={opened} onClose={close} title="Settings" size="lg">
        <Stack>
          <form
            onSubmit={async (event) => {
              try {
                setSubmitting(true)
                event.preventDefault()
                await checkOpenAIKey(value)
                await db.settings.where({id: 'general'}).modify((apiKey) => {
                  apiKey.openAiApiKey = value
                })
                notifications.show({
                  title: 'Saved',
                  message: 'Your OpenAI Key has been saved.',
                })
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
                  notifications.show({
                    title: 'Error',
                    color: 'red',
                    message,
                  })
                }
              } finally {
                setSubmitting(false)
              }
            }}
          >
            <Flex gap="xs" align="end">
              <PasswordInput
                label="OpenAI API Key"
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                sx={{flex: 1}}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                formNoValidate
              />
              <Button type="submit" loading={submitting}>
                Save
              </Button>
            </Flex>
          </form>
          <List withPadding>
            <List.Item>
              <Text size="sm">
                <Anchor
                  href="https://platform.openai.com/account/api-keys"
                  target="_blank"
                >
                  Get your OpenAI API key
                </Anchor>
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm" color="dimmed">
                The API Key is stored locally on your browser and never sent
                anywhere else.
              </Text>
            </List.Item>
          </List>
          <Select
            label="OpenAI Model"
            value={model}
            onChange={(value) => {
              db.settings.update('general', {
                openAiModel: value ?? undefined,
              })
            }}
            withinPortal
            data={availableModels}
          />
          <Alert color="orange" title="Warning">
            The displayed cost was not updated yet to reflect the costs for each
            model. Right now it will always show the cost for GPT-3.5.
          </Alert>
        </Stack>
      </Modal>
    </>
  )
})
