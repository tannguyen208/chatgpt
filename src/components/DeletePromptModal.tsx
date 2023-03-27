import {ActionIcon, Button, Modal, Stack, Text, Tooltip} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {notifications} from '@mantine/notifications'
import {IconTrash} from '@tabler/icons-react'
import {memo, useState} from 'react'
import {db, Prompt} from '../db'

export const DeletePromptModal = memo(function DeletePromptModal({
  prompt,
}: {
  prompt: Prompt
}) {
  const [opened, {open, close}] = useDisclosure(false)
  const [submitting, setSubmitting] = useState(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Delete Prompt" size="md">
        <form
          onSubmit={async (event) => {
            try {
              setSubmitting(true)
              event.preventDefault()
              await db.prompts.where({id: prompt.id}).delete()
              close()

              notifications.show({title: 'Deleted', message: 'Chat deleted.'})
            } catch (error: any) {
              if (error.toJSON().message === 'Network Error') {
                notifications.show({
                  title: 'Error',
                  color: 'red',
                  message: 'No internet connection.',
                })
              } else {
                notifications.show({
                  title: 'Error',
                  color: 'red',
                  message:
                    "Can't remove chat. Please refresh the page and try again.",
                })
              }
            } finally {
              setSubmitting(false)
            }
          }}
        >
          <Stack>
            <Text size="sm">Are you sure you want to delete this prompt?</Text>
            <Button type="submit" color="red" loading={submitting}>
              Delete
            </Button>
          </Stack>
        </form>
      </Modal>
      <Tooltip label="Delete Prompt">
        <ActionIcon color="red" size="lg" onClick={open}>
          <IconTrash size={20} />
        </ActionIcon>
      </Tooltip>
    </>
  )
})
