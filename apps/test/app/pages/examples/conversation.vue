<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { MessageSquareIcon } from 'lucide-vue-next'
import { nanoid } from 'nanoid'

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@repo/elements/conversation'
import { Message, MessageAvatar, MessageContent } from '@repo/elements/message'

type ExampleMessage = {
  key: string
  value: string
  name: string
  avatar: string
}

const messages: ExampleMessage[] = [
  {
    key: nanoid(),
    value: 'Hello, how are you?',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: "I'm good, thank you! How can I assist you today?",
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: "I'm looking for information about your services.",
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value:
      'Sure! We offer a variety of AI solutions. What are you interested in?',
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: "I'm interested in natural language processing tools.",
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: 'Great choice! We have several NLP APIs. Would you like a demo?',
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: 'Yes, a demo would be helpful.',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: 'Alright, I can show you a sentiment analysis example. Ready?',
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: 'Yes, please proceed.',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: "Here is a sample: 'I love this product!' → Positive sentiment.",
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: 'Impressive! Can it handle multiple languages?',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: 'Absolutely, our models support over 20 languages.',
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: 'How do I get started with the API?',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: 'You can sign up on our website and get an API key instantly.',
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: 'Is there a free trial available?',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: 'Yes, we offer a 14-day free trial with full access.',
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: 'What kind of support do you provide?',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: 'We provide 24/7 chat and email support for all users.',
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
  {
    key: nanoid(),
    value: 'Thank you for the information!',
    name: 'Alex Johnson',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    key: nanoid(),
    value: "You're welcome! Let me know if you have any more questions.",
    name: 'AI Assistant',
    avatar: 'https://github.com/openai.png',
  },
]

const visibleMessages = ref<ExampleMessage[]>([])
const intervalRef = ref<number | null>(null)

function clearIntervalTimer() {
  if (intervalRef.value !== null) {
    window.clearInterval(intervalRef.value)
    intervalRef.value = null
  }
}
onMounted(() => {
  visibleMessages.value = []
  let currentIndex = 0

  intervalRef.value = window.setInterval(() => {
    const message = messages[currentIndex]
    if (!message) {
      clearIntervalTimer()
      return
    }

    visibleMessages.value = [...visibleMessages.value, message]
    currentIndex += 1
  }, 500)
})

onBeforeUnmount(() => {
  clearIntervalTimer()
})
</script>

<template>
  <div class="w-full max-w-[640px]">
    <Conversation class="relative size-full" :style="{ height: '498px' }">
      <ConversationContent>
        <ConversationEmptyState
          v-if="visibleMessages.length === 0"
          :icon="MessageSquareIcon"
          icon-class="size-6"
          title="Start a conversation"
          description="Messages will appear here as the conversation progresses."
        />
        <template v-else>
          <Message
            v-for="(message, index) in visibleMessages"
            :key="message.key"
            :from="index % 2 === 0 ? 'user' : 'assistant'"
          >
            <MessageContent>{{ message.value }}</MessageContent>
            <MessageAvatar :name="message.name" :src="message.avatar" />
          </Message>
        </template>
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  </div>
</template>
