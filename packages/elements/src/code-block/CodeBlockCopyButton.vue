<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon, CopyIcon } from 'lucide-vue-next'
import { Button } from '@repo/shadcn-ui/components/ui/button'
import { useCodeBlock } from './code-block-context'

const isCopied = ref(false)

const setIsCopied = (value: boolean) => {
  isCopied.value = value
}

const { code } = useCodeBlock()

const props = defineProps<{
  onCopy?: () => void
  onError?: (error: Error) => void
  timeout?: number
}>()

const copyToClipboard = async (e: Event) => {
  e.stopPropagation()
  e.preventDefault()

  if (typeof window === 'undefined' || !navigator.clipboard.writeText) {
    props.onError?.(new Error('Clipboard API not available'))
    return
  }

  try {
    await navigator.clipboard.writeText(code.value)
    setIsCopied(true)
    props.onCopy?.()
    setTimeout(() => setIsCopied(false), props.timeout || 1000)
  } catch (error) {
    props.onError?.(error as Error)
  }
}
</script>
<template>
  <div class="absolute top-2 right-2">
    <Button
      size="icon"
      variant="ghost"
      @click="copyToClipboard"
      :aria-label="isCopied ? 'Copied' : 'Copy to clipboard'"
      :title="isCopied ? 'Copied' : 'Copy to clipboard'"
    >
      <component :is="isCopied ? CheckIcon : CopyIcon" :size="14" />
    </Button>
  </div>
</template>
