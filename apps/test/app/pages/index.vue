<script setup lang="ts">
import { nanoid } from 'nanoid'
const items = [
  { id: nanoid(), name: 'Actions', url: '/examples/actions' },
  { id: nanoid(), name: 'Artifact', url: '/examples/artifact' },
  { id: nanoid(), name: 'Branch', url: '/examples/branch' },
  { id: nanoid(), name: 'Canvas', url: '/examples/canvas' },
  { id: nanoid(), name: 'Chain of Thought', url: '/examples/chain-of-thought' },
  { id: nanoid(), name: 'Code Block', url: '/examples/code-block' },
  { id: nanoid(), name: 'Context', url: '/examples/context' },
  { id: nanoid(), name: 'Conversation', url: '/examples/conversation' },
  { id: nanoid(), name: 'Image', url: '/examples/image' },
  { id: nanoid(), name: 'Inline Citation', url: '/examples/inline-citation' },
  { id: nanoid(), name: 'Message', url: '/examples/message' },
  { id: nanoid(), name: 'Prompt Input', url: '/examples/prompt-input' },
  { id: nanoid(), name: 'Reasoning', url: '/examples/reasoning' },
  { id: nanoid(), name: 'Response', url: '/examples/response' },
  { id: nanoid(), name: 'Sources', url: '/examples/sources' },
  { id: nanoid(), name: 'Suggestion', url: '/examples/suggestion' },
  { id: nanoid(), name: 'Tool', url: '/examples/tool' },
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
