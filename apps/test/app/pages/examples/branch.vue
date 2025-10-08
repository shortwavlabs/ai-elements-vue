<script setup lang="ts">
import { nanoid } from 'nanoid'
import {
  Branch,
  BranchMessages,
  BranchNext,
  BranchPage,
  BranchPrevious,
  BranchSelector,
} from '@repo/elements/branch'

// const userMessages = [
//   {
//     id: nanoid(),
//     content: 'What are the key strategies for optimizing Vue performance?',
//   },
//   {
//     id: nanoid(),
//     content: 'How can I improve the performance of my Vue application?',
//   },
//   {
//     id: nanoid(),
//     content: 'What performance optimization techniques should I use in Vue?',
//   },
// ]

// const assistantMessages = [
//   {
//     id: nanoid(),
//     content:
//       "Here's the first response to your question. This approach focuses on performance optimization.",
//   },
//   {
//     id: nanoid(),
//     content:
//       "Here's an alternative response. This approach emphasizes code readability and maintainability over pure performance.",
//   },
//   {
//     id: nanoid(),
//     content:
//       "And here's a third option. This balanced approach considers both performance and maintainability, making it suitable for most use cases.",
//   },
// ]

const handleBranchChange = (branchIndex: number) => {
  console.log('Branch changed to:', branchIndex)
}
</script>
<template>
  <div class="h-[700px]">
    <Branch :default-branch="0" :onBranchChange="handleBranchChange">
      <BranchMessages>
        <!-- TODO: update when messages component is built to match React demo -->
        <div>Branch A1</div>
        <div>Branch 2</div>
        <div>Branch 3</div>
      </BranchMessages>
      <BranchSelector from="user">
        <BranchPrevious />
        <BranchPage />
        <BranchNext />
      </BranchSelector>
    </Branch>
  </div>
</template>
