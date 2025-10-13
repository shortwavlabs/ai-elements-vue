<script setup lang="ts">
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@repo/elements/sources'

const sources = [
  {
    href: 'https://stripe.com/docs/api',
    title: 'Stripe API Documentation',
  },
  {
    href: 'https://docs.github.com/en/rest',
    title: 'GitHub REST API',
  },
  {
    href: 'https://docs.aws.amazon.com/sdk-for-javascript/',
    title: 'AWS SDK for JavaScript',
  },
] as const
</script>

<template>
  <div class="flex w-full justify-center p-6">
    <div class="h-[110px]">
      <Sources>
        <SourcesTrigger :count="sources.length" />
        <SourcesContent>
          <Source
            v-for="source in sources"
            :key="source.href"
            :href="source.href"
            :title="source.title"
          />
        </SourcesContent>
      </Sources>
    </div>
  </div>
</template>
