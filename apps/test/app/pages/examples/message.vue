<script setup lang="ts">
import { computed } from 'vue'
import { Message, MessageAvatar, MessageContent } from '@repo/elements/message'
import { nanoid } from 'nanoid'

type ExampleMessage = {
  key: string
  from: 'user' | 'assistant'
  content: string
  avatar: string
  name: string
}

const initialMessages: ExampleMessage[] = [
  {
    key: nanoid(),
    from: 'user',
    content: 'Hello, how are you?',
    avatar: 'https://github.com/haydenbleasel.png',
    name: 'Hayden Bleasel',
  },
]

const messages = computed(() => initialMessages)
</script>

<template>
  <div class="flex flex-col w-[600px]">
    <Message
      v-for="message in messages"
      :key="message.key"
      :from="message.from"
    >
      <MessageContent>
        {{ message.content }}
      </MessageContent>
      <MessageAvatar :name="message.name" :src="message.avatar" />
    </Message>
  </div>
</template>
