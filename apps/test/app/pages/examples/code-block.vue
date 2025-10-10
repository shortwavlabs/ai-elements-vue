<script setup lang="ts">
import { CodeBlock, CodeBlockCopyButton } from 'ai-elements-vue/code-block'

const code = `function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}`

const onCopy = () => {
  alert('Code copied!')
}

const onError = (error: Error) => {
  alert('Error copying code: ' + error.message)
}
</script>
<template>
  <div class="w-[600px]">
    <CodeBlock :code="code" language="js" show-line-numbers>
      <CodeBlockCopyButton @copy="onCopy" @error="onError" />
    </CodeBlock>
  </div>
</template>
