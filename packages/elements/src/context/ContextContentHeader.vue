<script setup lang="ts">
import { computed } from 'vue'
import { PERCENT_MAX } from './defaults'
import { useContext } from './context-context'
import { Progress } from '@repo/shadcn-ui/components/ui/progress'

const { usedTokens, maxTokens } = useContext()

const usedPercent = computed(() => usedTokens.value / maxTokens.value)
const displayPct = computed(() =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 1,
  }).format(usedPercent.value),
)
const used = computed(() =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
  }).format(usedTokens.value),
)
const total = computed(() =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
  }).format(maxTokens.value),
)
</script>
<template>
  <div class="w-full space-y-2 p-3">
    <slot>
      <div className="flex items-center justify-between gap-3 text-xs">
        <p>{{ displayPct }}</p>
        <p className="font-mono text-muted-foreground">
          {{ used }} / {{ total }}
        </p>
      </div>
      <div className="space-y-2">
        <Progress className="bg-muted" :value="usedPercent * PERCENT_MAX" />
      </div>
    </slot>
  </div>
</template>
