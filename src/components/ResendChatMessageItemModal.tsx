import {Button, Modal, Stack, Textarea} from '@mantine/core'
import {memo, useState} from 'react'
import {ERole, MessageEntity} from '../db'
import {useChatGPT} from '../hooks/useChatGPT'
import {useSharedThinking} from '../hooks/useSharedThinking'

export const ResendMessageEntityItemModal = memo(
  function ResendMessageEntityItemModal({
    message,
    isOpen,
    close,
  }: {
    message: MessageEntity
    isOpen?: boolean
    close?: () => void
  }) {
    const chatGPT = useChatGPT()
    const [value, setValue] = useState(message.content)
    const {setOpenThinking, setCloseThinking} = useSharedThinking()

    return (
      <Modal
        opened={Boolean(isOpen)}
        onClose={close || (() => {})}
        title="Resend Message"
      >
        <form
          onSubmit={async (event) => {
            try {
              // Prevent default event behavior
              event.preventDefault()

              // Add message to the database
              const messageId = await MessageEntity._()
                .setChatId(message.chatId)
                .setRole(ERole.USER)
                .setContent(value)
                .add()

              // Set the state to open thinking
              setOpenThinking()
              // Close if the 'close' object exists
              close && close()

              // Request OpenAI chat response
              const result = await chatGPT.sendMessage({chatId: message.chatId})
              // Get the reply from OpenAI
              const assistantMessage = result.data.choices[0].message?.content
              // Add OpenAI's message to the database
              await MessageEntity._()
                .setChatId(message.chatId)
                .setRole(ERole.ASSISTANT)
                .setContent(assistantMessage)
                .setRepliedId(messageId)
                .add()

              // Reset the state to close thinking
              setCloseThinking()
            } catch (error) {
              // Catch any error that occurs
            }
          }}
        >
          <Stack>
            <Textarea
              placeholder="Content"
              autosize
              minRows={5}
              maxRows={10}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <Button type="submit">Resend</Button>
          </Stack>
        </form>
      </Modal>
    )
  }
)
