<script setup lang="ts">
import { DropdownMenuContent } from '@repo/shadcn-ui/components/ui/dropdown-menu'
import type { HTMLAttributes } from 'vue'
import { cn } from '@repo/shadcn-ui/lib/utils'
import { useAttrs } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const attrs = useAttrs()
</script>

<template>
  <DropdownMenuContent align="start" v-bind="attrs" :class="cn(props.class)">
    <slot />
  </DropdownMenuContent>
</template>
