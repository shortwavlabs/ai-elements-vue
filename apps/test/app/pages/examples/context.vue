<script setup lang="ts">
import {
  Context,
  ContextCacheUsage,
  ContextContent,
  ContextContentBody,
  ContextContentFooter,
  ContextContentHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger,
} from '@repo/elements/context'

const usage = ref({
  inputTokens: 32_000,
  outputTokens: 8000,
  totalTokens: 40_000,
  cachedInputTokens: 0,
  reasoningTokens: 0,
})
</script>
<template>
  <div className="flex items-center justify-center p-8">
    <Context
      :maxTokens="128_000"
      modelId="openai:gpt-5"
      :usage="usage"
      :usedTokens="40_000"
    >
      <ContextTrigger />
      <ContextContent>
        <ContextContentHeader />
        <ContextContentBody>
          <ContextInputUsage />
          <ContextOutputUsage />
          <ContextReasoningUsage />
          <ContextCacheUsage />
        </ContextContentBody>
        <ContextContentFooter />
      </ContextContent>
    </Context>
  </div>
</template>
