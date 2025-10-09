<script setup lang="ts">
import { CodeBlock } from '@repo/elements/code-block'
const code = `function add(a, b) {
  return a + b;
}`
</script>
<template>
  <div class="w-[600px]">
    <CodeBlock :code="code" language="js" />
  </div>
</template>
