<script setup lang="ts">
import { ref } from 'vue'
import { Suggestion, Suggestions } from '@repo/elements/suggestion'

const suggestions = [
  'Schedule a demo with the sales team',
  'Summarize the latest release notes',
  'Draft an email to stakeholders',
  'Generate onboarding checklist',
] as const

const selectedSuggestion = ref<string | null>(null)

const handleSelect = (value: string) => {
  selectedSuggestion.value = value
}
</script>

<template>
  <div class="flex w-[600px] flex-col items-center gap-4 p-6">
    <Suggestions>
      <Suggestion
        v-for="suggestion in suggestions"
        :key="suggestion"
        :suggestion="suggestion"
        @select="handleSelect"
      />
    </Suggestions>
    <p v-if="selectedSuggestion" class="text-sm text-muted-foreground">
      Selected:
      <span class="font-medium text-foreground">{{ selectedSuggestion }}</span>
    </p>
  </div>
</template>
