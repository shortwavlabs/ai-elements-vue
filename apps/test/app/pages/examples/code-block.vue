<script setup lang="ts">
import { CodeBlock, CodeBlockCopyButton } from '@repo/elements/code-block'
const code = `function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}`
</script>
<template>
  <div class="w-[600px]">
    <CodeBlock :code="code" language="js" show-line-numbers>
      <CodeBlockCopyButton />
    </CodeBlock>
  </div>
</template>
