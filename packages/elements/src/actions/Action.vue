<script setup lang="ts">
import { Button } from '@repo/shadcn-ui/components/ui/button'

defineProps<{
  label: string
}>()
</script>

<template>
  <Button
    class="relative size-9 p-1.5 text-muted-foreground hover:text-foreground"
  >
    <slot />
    <span class="sr-only">{{ label }}</span>
  </Button>
</template>
