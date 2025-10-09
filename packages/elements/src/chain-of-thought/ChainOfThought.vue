<script setup lang="ts">
import { computed, toRef, useAttrs, ref } from 'vue'
import { Collapsible } from '@repo/shadcn-ui/components/ui/collapsible'
import { cn } from '@repo/shadcn-ui/lib/utils'
import { provideChainOfThought } from './chain-of-thought-context'
// import { useControllableState } from './use-controllable-state'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    // open?: boolean
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
  }>(),
  {
    defaultOpen: false,
  },
)

const attrs = useAttrs()
// const defaultOpen = toRef(props, 'defaultOpen')
// const openRef = toRef(props, 'open')

// const isOpen = useControllableState<boolean>({
//   modelValue: openRef,
//   defaultValue: defaultOpen.value,
//   onUpdate: props.onOpenChange,
// })
const isOpen = ref(props.defaultOpen)

const setIsOpen = (open: boolean) => {
  isOpen.value = open
}

provideChainOfThought({
  isOpen,
  setIsOpen,
})

const rootClasses = computed(() =>
  cn(
    'not-prose max-w-prose space-y-4',
    attrs.class as string | string[] | undefined,
  ),
)

const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs as Record<string, unknown>
  return rest
})
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    :default-open="defaultOpen"
    :class="rootClasses"
    v-bind="restAttrs"
  >
    <slot />
  </Collapsible>
</template>
