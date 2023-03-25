import {Button, Modal, Stack, Textarea, TextInput} from '@mantine/core'
import {notifications} from '@mantine/notifications'
import {IconPlus} from '@tabler/icons-react'
import {nanoid} from 'nanoid'
import {useEffect, useState} from 'react'
import {db} from '../db'

export function CreatePromptModal({
  content,
  isOpen,
  close,
  open,
}: {
  content?: string
  isOpen?: boolean
  close?: () => void
  open?: () => void
}) {
  const [submitting, setSubmitting] = useState(false)
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    setValue(content ?? '')
  }, [content])

  return (
    <Modal
      opened={Boolean(isOpen)}
      onClose={close || (() => {})}
      title="Create Prompt"
      size="lg"
    >
      <form
        onSubmit={async (event) => {
          try {
            setSubmitting(true)
            event.preventDefault()
            const id = nanoid()
            db.prompts.add({
              id,
              title,
              content: value,
              createdAt: new Date(),
            })
            notifications.show({
              title: 'Saved',
              message: 'Prompt created',
            })
            close && close()
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
        <Stack>
          <TextInput
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
            formNoValidate
            data-autofocus
          />
          <Textarea
            placeholder="Content"
            autosize
            minRows={5}
            maxRows={10}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <Button type="submit" loading={submitting}>
            Save
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}
