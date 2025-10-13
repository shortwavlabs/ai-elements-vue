<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  Reasoning,
  ReasoningTrigger,
  ReasoningContent,
} from '@repo/elements/reasoning'

const reasoningSteps = [
  'Let me think about this problem step by step.',
  '\n\nFirst, I need to understand what the user is asking for.',
  '\n\nThey want a reasoning component that opens automatically when streaming begins and closes when streaming finishes. The component should be composable and follow existing patterns in the codebase.',
  '\n\nThis seems like a collapsible component with state management would be the right approach.',
].join('')

const content = ref('')
const isStreaming = ref(false)
const currentTokenIndex = ref(0)
const tokens = ref<string[]>([])

const chunkIntoTokens = (text: string) => {
  const chunks: string[] = []
  let i = 0

  while (i < text.length) {
    const chunkSize = Math.floor(Math.random() * 2) + 3
    chunks.push(text.slice(i, i + chunkSize))
    i += chunkSize
  }

  return chunks
}

let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  tokens.value = chunkIntoTokens(reasoningSteps)
  content.value = ''
  currentTokenIndex.value = 0
  isStreaming.value = true
})

watch(
  [isStreaming, currentTokenIndex],
  ([streaming, index], _prev, onCleanup) => {
    if (!streaming || index >= tokens.value.length) {
      if (streaming && index >= tokens.value.length) {
        isStreaming.value = false
      }
      return
    }

    timer = setTimeout(() => {
      content.value = `${content.value}${tokens.value[index] ?? ''}`
      currentTokenIndex.value = index + 1
    }, 25)

    onCleanup(() => {
      if (timer) {
        clearTimeout(timer)
        timer = undefined
      }
    })
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer)
    timer = undefined
  }
})
</script>

<template>
  <div class="w-[600px] p-4 h-[300px]">
    <Reasoning class="w-full" :is-streaming="isStreaming">
      <ReasoningTrigger />
      <ReasoningContent>
        {{ content }}
      </ReasoningContent>
    </Reasoning>
  </div>
</template>
