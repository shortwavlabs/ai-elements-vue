<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Button } from '@repo/shadcn-ui/components/ui/button'
import { HoverCardTrigger } from '@repo/shadcn-ui/components/ui/hover-card'
import ContextIcon from './ContextIcon.vue'
import { useContext } from './context-context'

const { usedTokens, maxTokens } = useContext()

const usedPercent = computed(() => usedTokens.value / maxTokens.value)
const renderedPercent = computed(() =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 1,
  }).format(usedPercent.value),
)

const attrs = useAttrs()
</script>
<template>
  <HoverCardTrigger asChild>
    <slot>
      <Button type="button" variant="ghost" v-bind="attrs">
        <span className="font-medium text-muted-foreground">
          {{ renderedPercent }}
        </span>
        <ContextIcon />
      </Button>
    </slot>
  </HoverCardTrigger>
</template>
