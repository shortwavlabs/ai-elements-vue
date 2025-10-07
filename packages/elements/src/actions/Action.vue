<script setup lang="ts">
import { Button } from '@repo/shadcn-ui/components/ui/button'

defineProps<{
  label: string
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg' | null
}>()
</script>

<template>
  <Button
    class="relative size-9 p-1.5 text-muted-foreground hover:text-foreground"
    :size="size"
  >
    <slot />
    <span class="sr-only">{{ label }}</span>
  </Button>
</template>
