<script setup lang="ts">
import { h, computed, VNode } from 'vue'
import { refractor } from 'refractor'
import 'prism-themes/themes/prism-vsc-dark-plus.css'

const props = defineProps<{
  code: string
  language: string
  showLineNumbers?: boolean
}>()

// Parse code to AST when code/language change
const tree = computed(() => {
  try {
    return refractor.highlight(props.code.trim(), props.language)
  } catch {
    return refractor.highlight(props.code.trim(), 'text')
  }
})
// Recursive renderer
function renderNodes(nodes: any[]): VNode[] {
  return nodes.map((node, index) => {
    if (node.type === 'text') {
      return node.value
    }

    if (node.type === 'element') {
      const className = (node.properties.className || []).join(' ')
      return h('span', { class: className }, renderNodes(node.children || []))
    }

    return null
  })
}
</script>

<template>
  <pre class="rounded-lg bg-muted p-4">
<code :class="`language-${language}`"><component :is="{ render: () => renderNodes(tree.children) }" /></code>
</pre>
</template>
