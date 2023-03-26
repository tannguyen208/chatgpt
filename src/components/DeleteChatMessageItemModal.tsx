import {Button, Modal, Stack, Text} from '@mantine/core'
import {db, MessageEntity} from '../db'

export function DeleteMessageEntityItemModal({
  message,
  isOpen,
  close,
}: {
  message: MessageEntity
  isOpen?: boolean
  close?: () => void
}) {
  return (
    <Modal
      opened={Boolean(isOpen)}
      onClose={close || (() => {})}
      title="Delete Message"
    >
      <form
        onSubmit={(event) => {
          try {
            event.preventDefault()
            let ids = [message.id]
            if (message.repliedId) ids.push(message.repliedId)
            ids.forEach(async (id) => {
              await db.messages.where({id}).delete()
            })
          } catch (error) {}
        }}
      >
        <Stack>
          <Text size="sm">Are you sure you want to delete this chat?</Text>
          <Button type="submit" color="red">
            Delete
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}
