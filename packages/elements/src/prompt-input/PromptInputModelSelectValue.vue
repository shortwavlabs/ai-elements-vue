<script setup lang="ts">
import { SelectValue } from '@repo/shadcn-ui/components/ui/select'
import type { HTMLAttributes } from 'vue'
import { cn } from '@repo/shadcn-ui/lib/utils'
import { computed, useAttrs } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const attrs = useAttrs()
const valueClass = computed(() => cn(props.class))
</script>

<template>
  <SelectValue v-bind="attrs" :class="valueClass">
    <slot />
  </SelectValue>
</template>
