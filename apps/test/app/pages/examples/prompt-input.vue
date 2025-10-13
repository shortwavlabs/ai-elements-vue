<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { Globe } from 'lucide-vue-next'

import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  type PromptInputStatus,
} from '@repo/elements/prompt-input'

const models = [
  { id: 'gpt-4', name: 'GPT-4' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
  { id: 'claude-2', name: 'Claude 2' },
  { id: 'claude-instant', name: 'Claude Instant' },
  { id: 'palm-2', name: 'PaLM 2' },
  { id: 'llama-2-70b', name: 'Llama 2 70B' },
  { id: 'llama-2-13b', name: 'Llama 2 13B' },
  { id: 'cohere-command', name: 'Command' },
  { id: 'mistral-7b', name: 'Mistral 7B' },
]

const SUBMITTING_TIMEOUT = 200
const STREAMING_TIMEOUT = 2000

type ExampleStatus = 'submitted' | 'streaming' | 'ready' | 'error'

const text = ref('')
const defaultModelId = models[0]?.id ?? ''
const model = ref(defaultModelId)
const status = ref<ExampleStatus>('ready')
const timeoutRef = ref<number | null>(null)

const submitStatus = computed<PromptInputStatus | undefined>(() => {
  if (status.value === 'ready') {
    return undefined
  }
  return status.value as PromptInputStatus
})

function clearStreamingTimeout() {
  if (timeoutRef.value) {
    window.clearTimeout(timeoutRef.value)
    timeoutRef.value = null
  }
}

function stop() {
  console.log('Stopping request...')
  clearStreamingTimeout()
  status.value = 'ready'
}

function handleTranscriptionChange(value: string) {
  text.value = value
}

function updateModel(value: string) {
  model.value = value
}

function handleSubmit(message: PromptInputMessage) {
  if (status.value === 'streaming' || status.value === 'submitted') {
    stop()
    return
  }

  const hasText = Boolean(message.text?.trim())
  const hasAttachments = Boolean(message.files?.length)

  if (!hasText && !hasAttachments) {
    return
  }

  status.value = 'submitted'
  console.log('Submitting message:', message)

  window.setTimeout(() => {
    if (status.value === 'submitted') {
      status.value = 'streaming'
    }
  }, SUBMITTING_TIMEOUT)

  clearStreamingTimeout()
  timeoutRef.value = window.setTimeout(() => {
    status.value = 'ready'
    timeoutRef.value = null
  }, STREAMING_TIMEOUT)
}

onBeforeUnmount(() => {
  clearStreamingTimeout()
})
</script>

<template>
  <div class="h-[230px] w-[500px]">
    <PromptInput global-drop multiple :on-submit="handleSubmit">
      <PromptInputBody>
        <PromptInputAttachments>
          <template #default="{ attachment }">
            <PromptInputAttachment :data="attachment" />
          </template>
        </PromptInputAttachments>
        <PromptInputTextarea
          v-model="text"
          placeholder="Message the assistant…"
        />
      </PromptInputBody>
      <PromptInputToolbar>
        <PromptInputTools>
          <PromptInputActionMenu>
            <PromptInputActionMenuTrigger />
            <PromptInputActionMenuContent>
              <PromptInputActionAddAttachments />
            </PromptInputActionMenuContent>
          </PromptInputActionMenu>
          <PromptInputSpeechButton
            :on-transcription-change="handleTranscriptionChange"
          />
          <PromptInputButton>
            <Globe class="size-4" />
            <span>Search</span>
          </PromptInputButton>
          <PromptInputModelSelect
            :model-value="model"
            @update:modelValue="updateModel"
          >
            <PromptInputModelSelectTrigger>
              <PromptInputModelSelectValue placeholder="Select a model" />
            </PromptInputModelSelectTrigger>
            <PromptInputModelSelectContent>
              <PromptInputModelSelectItem
                v-for="modelOption in models"
                :key="modelOption.id"
                :value="modelOption.id"
              >
                {{ modelOption.name }}
              </PromptInputModelSelectItem>
            </PromptInputModelSelectContent>
          </PromptInputModelSelect>
        </PromptInputTools>
        <PromptInputSubmit :status="submitStatus" />
      </PromptInputToolbar>
    </PromptInput>
  </div>
</template>
