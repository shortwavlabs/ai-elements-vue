<script setup lang="ts">
import { CarouselContent } from '@repo/shadcn-ui/components/ui/carousel'

defineOptions({ name: 'InlineCitationCarouselContent' })
</script>

<template>
  <CarouselContent>
    <slot />
  </CarouselContent>
</template>
