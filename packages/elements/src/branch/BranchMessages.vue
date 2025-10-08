<script setup lang="ts">
import { computed, watch } from 'vue'
import { useBranch } from './branch-context'
import { cn } from '@repo/shadcn-ui/lib/utils'

const props = defineProps<{
  branches: Array<any>
}>()

const { currentBranch, branches, setBranches } = useBranch()

const normalizedBranches = computed(() =>
  Array.isArray(props.branches) ? props.branches : [props.branches],
)

watch(
  () => normalizedBranches.value,
  (val) => {
    if (branches.length !== val.length) {
      setBranches(val)
    }
  },
  { immediate: true },
)
</script>

<template>
  <div v-for="(branch, index) in normalizedBranches" :key="index">
    <div
      :class="
        cn(
          'grid gap-2 overflow-hidden [&>div]:pb-0',
          index === currentBranch ? 'block' : 'hidden',
        )
      "
    >
      <component :is="branch" />
    </div>
  </div>
</template>
