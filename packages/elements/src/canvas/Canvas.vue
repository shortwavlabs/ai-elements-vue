<script setup lang="ts">
import { VueFlow, type Edge, type Node } from '@vue-flow/core'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

defineProps<{
  edges: Edge[]
  nodes: Node[]
}>()
</script>
<template>
  <VueFlow class="h-full w-full" :edges="edges" :nodes="nodes" />
</template>
