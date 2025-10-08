<script setup lang="ts">
import {
  CopyIcon,
  RefreshCcwIcon,
  ShareIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from 'lucide-vue-next'
import { Action, Actions } from '@repo/elements/actions'

const actions = [
  {
    label: 'Copy',
    icon: CopyIcon,
    handler: () => {
      console.log('copy')
    },
  },
  {
    label: 'Refresh',
    icon: RefreshCcwIcon,
    handler: () => {
      console.log('refresh')
    },
  },
  {
    label: 'Share',
    icon: ShareIcon,
    handler: () => {
      console.log('share')
    },
  },
  {
    label: 'Like',
    icon: ThumbsUpIcon,
    handler: () => {
      console.log('like')
    },
    tooltip: 'I like this',
  },
  {
    label: 'Dislike',
    icon: ThumbsDownIcon,
    handler: () => {
      console.log('dislike')
    },
    tooltip: 'I dislike this',
  },
]
</script>
<template>
  <div class="w-full h-[calc(100%-64px)] flex items-center justify-center">
    <Actions>
      <Action
        v-for="action in actions"
        :key="action.label"
        :label="action.label"
        :tooltip="action.tooltip"
        @click="action.handler"
      >
        <component :is="action.icon" :size="18" />
      </Action>
    </Actions>
  </div>
</template>
