<script setup lang="ts">
import { computed } from 'vue'
import { nanoid } from 'nanoid'
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from '@repo/elements/tool'

const toolCall = {
  type: 'tool-database_query',
  toolCallId: nanoid(),
  state: 'output-available',
  input: {
    query: 'SELECT COUNT(*) FROM users WHERE created_at >= ?',
    params: ['2024-01-01'],
    database: 'analytics',
  },
  output: [
    {
      userId: 1,
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: '2024-01-15',
    },
    {
      userId: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      createdAt: '2024-01-20',
    },
    {
      userId: 3,
      name: 'Bob Wilson',
      email: 'bob@example.com',
      createdAt: '2024-02-01',
    },
    {
      userId: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      createdAt: '2024-02-10',
    },
    {
      userId: 5,
      name: 'Charlie Davis',
      email: 'charlie@example.com',
      createdAt: '2024-02-15',
    },
  ],
  errorText: undefined,
} as const

const shouldShowOutput = computed(() => toolCall.state === 'output-available')
</script>

<template>
  <div class="flex h-[500px] w-full items-start justify-center p-6">
    <Tool class="w-full max-w-2xl">
      <ToolHeader :type="toolCall.type" :state="toolCall.state" />
      <ToolContent>
        <ToolInput :input="toolCall.input" />
        <ToolOutput
          v-if="shouldShowOutput"
          :error-text="toolCall.errorText"
          :output="toolCall.output"
        />
      </ToolContent>
    </Tool>
  </div>
</template>
