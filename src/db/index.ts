import Dexie, {IndexableType, Table} from 'dexie'
import 'dexie-export-import'
import {nanoid} from 'nanoid'

export interface Prompt {
  id: string
  title: string
  content: string
  createdAt: Date
}

export interface Settings {
  id: 'general'
  openAiApiKey?: string
  openAiModel?: string
}

export enum ERole {
  SYSTEM = 'system',
  USER = 'user',
  ASSISTANT = 'assistant',
}

export class ChatEntity {
  id!: string
  description!: string
  totalTokens!: number
  createdAt!: Date

  static _() {
    const record = new ChatEntity()
    record.id = nanoid()
    record.description = 'New Chat'
    record.totalTokens = 0
    record.createdAt = new Date()

    return record
  }

  setId(id: string) {
    this.id = id
    return this
  }

  setDescription(description: string) {
    this.description = (description || 'New Chat').trim()
    return this
  }

  setTotalTokens(totalTokens: number) {
    this.totalTokens = totalTokens
    return this
  }

  add() {
    return db.chats.add(this)
  }
}

export class MessageEntity {
  id!: IndexableType
  chatId!: IndexableType
  content!: string
  role!: ERole
  createdAt!: Date
  repliedId!: IndexableType

  static _() {
    const record = new MessageEntity()
    record.id = nanoid()
    record.createdAt = new Date()
    return record
  }

  setId(id: IndexableType) {
    this.id = id
    return this
  }

  setChatId(id: IndexableType) {
    this.chatId = id
    return this
  }

  setContent(content?: string) {
    this.content = (content ?? 'unknown response').trim()
    return this
  }

  setRole(role: ERole) {
    this.role = role
    return this
  }

  setRepliedId(repliedId: IndexableType) {
    this.repliedId = repliedId
    return this
  }

  add() {
    return db.messages.add(this)
  }
}

export class Database extends Dexie {
  chats!: Table<ChatEntity>
  messages!: Table<MessageEntity>
  prompts!: Table<Prompt>
  settings!: Table<Settings>

  constructor() {
    super('chatgpt')
    this.version(2).stores({
      chats: 'id, createdAt',
      messages: 'id, chatId, createdAt',
      prompts: 'id, createdAt',
      settings: 'id',
    })

    this.on('populate', async () => {
      db.settings.add({
        id: 'general',
      })
    })
  }
}

export const db = new Database()
