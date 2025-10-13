<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Collapsible } from '@repo/shadcn-ui/components/ui/collapsible'
import { cn } from '@repo/shadcn-ui/lib/utils'

defineOptions({ inheritAttrs: false, name: 'Sources' })

const attrs = useAttrs()

const rootClasses = computed(() =>
  cn(
    'not-prose mb-4 text-primary text-xs',
    attrs.class as string | string[] | undefined,
  ),
)

const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs as Record<string, unknown>
  return rest
})
</script>

<template>
  <Collapsible :class="rootClasses" v-bind="restAttrs">
    <slot />
  </Collapsible>
</template>
