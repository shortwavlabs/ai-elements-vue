<script setup lang="ts">
import { ChevronLeftIcon } from 'lucide-vue-next'
import { useBranch } from './branch-context'

const { goToPrevious, totalBranches } = useBranch()
</script>

<template>
  <button
    aria-label="Previous branch"
    class="size-7 shrink-0 rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
    :disabled="totalBranches <= 1"
    @click="goToPrevious"
    type="button"
  >
    <slot>
      <ChevronLeftIcon :size="14" />
    </slot>
  </button>
</template>
