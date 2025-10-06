<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@repo/shadcn-ui/components/ui/tooltip/index'
import Action from './Action.vue'

defineProps<{
  label: string
  tooltip: string
}>()
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Action :label="label">
          <slot />
        </Action>
      </TooltipTrigger>
      <TooltipContent class="text-sm">{{ tooltip }}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
