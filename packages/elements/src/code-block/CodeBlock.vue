<script setup lang="ts">
import SyntaxHighlighter from './SyntaxHighlighter.vue'

defineProps<{
  code: string
  language: string
  showLineNumbers?: boolean
}>()
</script>
<template>
  <div
    class="relative w-full overflow-hidden rounded-md border border-foreground/20 shadow-lg"
  >
    <div class="relative">
      <SyntaxHighlighter
        :code="code"
        :language="language"
        :showLineNumbers="showLineNumbers"
      />
    </div>
  </div>
</template>
