<script setup lang="ts">
import { CodeBlock } from '@repo/elements/code-block'
const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`
</script>
<template>
  <div class="w-[600px]">
    <CodeBlock :code="code" language="js" show-line-numbers />
  </div>
</template>
