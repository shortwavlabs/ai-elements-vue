<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  Reasoning,
  ReasoningTrigger,
  ReasoningContent,
} from '@repo/elements/reasoning'

const isStreaming = ref(true)
const open = ref(true)
const duration = ref(0)
const reasoningContent = ref('')

const thoughtChunks = [
  'The user asked for a concise summary of the latest release notes.',
  'Collected the highlights from the changelog and product announcements.',
  'Drafted a response focusing on the most impactful updates.',
]

let streamTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  let index = 0
  streamTimer = setInterval(() => {
    reasoningContent.value = `${reasoningContent.value}${
      reasoningContent.value ? '\n' : ''
    }- ${thoughtChunks[index]}`

    index += 1

    if (index >= thoughtChunks.length && streamTimer) {
      clearInterval(streamTimer)
      streamTimer = undefined
      isStreaming.value = false
    }
  }, 900)
})

onBeforeUnmount(() => {
  if (streamTimer) {
    clearInterval(streamTimer)
    streamTimer = undefined
  }
})

const onOpenChange = (next: boolean) => {
  console.log('Reasoning open state:', next)
}

watch(duration, (value) => {
  if (value > 0) {
    console.log('Reasoning duration (s):', value)
  }
})
</script>

<template>
  <div class="space-y-4 w-[420px]">
    <Reasoning
      v-model:open="open"
      v-model:duration="duration"
      :is-streaming="isStreaming"
      :default-open="true"
      @update:open="onOpenChange"
    >
      <ReasoningTrigger />
      <ReasoningContent>
        {{ reasoningContent || 'Preparing initial thoughts...' }}
      </ReasoningContent>
    </Reasoning>
  </div>
</template>
