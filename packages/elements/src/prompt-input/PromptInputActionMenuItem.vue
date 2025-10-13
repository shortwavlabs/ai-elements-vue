<script setup lang="ts">
import { DropdownMenuItem } from '@repo/shadcn-ui/components/ui/dropdown-menu'
import type { HTMLAttributes } from 'vue'
import { cn } from '@repo/shadcn-ui/lib/utils'
import { useAttrs } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const attrs = useAttrs()
</script>

<template>
  <DropdownMenuItem v-bind="attrs" :class="cn(props.class)">
    <slot />
  </DropdownMenuItem>
</template>
