<script setup lang="ts">
const items = [
  { id: 1, name: 'Actions', url: '/examples/actions' },
  { id: 2, name: 'Artifact', url: '/examples/artifact' },
  { id: 3, name: 'Branch', url: '/examples/branch' },
  { id: 4, name: 'Canvas', url: '/examples/canvas' },
  { id: 5, name: 'Chain of Thought', url: '/examples/chain-of-thought' },
  { id: 6, name: 'Code Block', url: '/examples/code-block' },
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">AI Elements Vue</h1>
    <ul class="list-disc list-inside">
      <li v-for="item in items" :key="item.id">
        <NuxtLink :to="item.url" class="hover:text-primary">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
