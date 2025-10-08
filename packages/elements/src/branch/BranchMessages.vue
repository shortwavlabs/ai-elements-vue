<script setup lang="ts">
import {
  Comment,
  Fragment,
  Text,
  computed,
  useSlots,
  watchEffect,
  type VNode,
} from 'vue'
import { useBranch } from './branch-context'
import { cn } from '@repo/shadcn-ui/lib/utils'

const slots = useSlots()

const { currentBranch, branches, setBranches } = useBranch()

const flattenBranches = (nodes: VNode[] = []): VNode[] => {
  const flattened: VNode[] = []

  nodes.forEach((node) => {
    if (node.type === Comment) {
      return
    }

    if (node.type === Fragment && Array.isArray(node.children)) {
      flattened.push(...flattenBranches(node.children as VNode[]))
      return
    }

    if (node.type === Text) {
      const content = typeof node.children === 'string' ? node.children : ''
      if (content.trim().length === 0) {
        return
      }
    }

    flattened.push(node)
  })

  return flattened
}

const normalizedBranches = computed(() =>
  flattenBranches(slots.default?.() ?? []),
)

watchEffect(() => {
  const newBranches = normalizedBranches.value
  const current = branches.value

  const hasDifference =
    current.length !== newBranches.length ||
    newBranches.some((node, index) => node !== current[index])

  if (hasDifference) {
    setBranches(newBranches)
  }
})
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
