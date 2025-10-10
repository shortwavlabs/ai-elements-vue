<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  ChainOfThought,
  ChainOfThoughtHeader,
  ChainOfThoughtContent,
  ChainOfThoughtStep,
  ChainOfThoughtSearchResults,
  ChainOfThoughtSearchResult,
  ChainOfThoughtImage,
} from 'ai-elements-vue/chain-of-thought'
import { ImageIcon, Search } from 'lucide-vue-next'

const visibleSteps = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    visibleSteps.value = Math.min(4, visibleSteps.value + 1)

    if (visibleSteps.value >= 4 && timer) {
      clearInterval(timer)
      timer = undefined
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
})

const researchSources = [
  'https://www.x.com',
  'https://www.instagram.com',
  'https://www.github.com',
]

const recentWork = ['https://www.github.com', 'https://www.dribbble.com']

const getHostname = (url: string) => new URL(url).hostname

const getFavicon = (url: string) =>
  `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(url)}`

const getStatus = (step: number) => {
  if (visibleSteps.value === step) return 'active'
  if (visibleSteps.value > step) return 'complete'
  return 'pending'
}

const open = ref(true)

const onOpenChange = (isOpen: boolean) => {
  console.log('Chain of Thought open state:', isOpen)
}
</script>

<template>
  <div class="space-y-6 w-[435px] h-[490px]">
    <ChainOfThought
      v-model="open"
      :default-open="open"
      @update:open="onOpenChange"
    >
      <ChainOfThoughtHeader />
      <ChainOfThoughtContent>
        <ChainOfThoughtStep
          v-if="visibleSteps >= 1"
          :icon="Search"
          :status="getStatus(1)"
          label="Searching for profiles for Hayden Bleasel"
        >
          <ChainOfThoughtSearchResults>
            <ChainOfThoughtSearchResult
              v-for="website in researchSources"
              :key="website"
            >
              <img
                :alt="`${getHostname(website)} favicon`"
                :src="getFavicon(website)"
                class="size-4 rounded"
              />
              {{ getHostname(website) }}
            </ChainOfThoughtSearchResult>
          </ChainOfThoughtSearchResults>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep
          v-if="visibleSteps >= 2"
          :icon="ImageIcon"
          :status="getStatus(2)"
          label="Found the profile photo for Hayden Bleasel"
        >
          <ChainOfThoughtImage
            caption="Hayden Bleasel's profile photo from x.com, showing a Ghibli-style man."
          >
            <div
              class="flex h-40 w-full items-center justify-center rounded-lg bg-primary/10 text-sm font-medium text-primary"
            >
              Placeholder hero artwork
            </div>
          </ChainOfThoughtImage>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep
          v-if="visibleSteps >= 3"
          :status="getStatus(3)"
          label="Hayden Bleasel is an Australian product designer, software engineer, and founder. He is currently based in the United States working for Vercel, an American cloud application company."
        />

        <ChainOfThoughtStep
          v-if="visibleSteps >= 4"
          :icon="Search"
          :status="getStatus(4)"
          label="Searching for recent work..."
        >
          <ChainOfThoughtSearchResults>
            <ChainOfThoughtSearchResult
              v-for="website in recentWork"
              :key="website"
            >
              <img
                :alt="`${getHostname(website)} favicon`"
                :src="getFavicon(website)"
                class="size-4 rounded"
              />
              {{ getHostname(website) }}
            </ChainOfThoughtSearchResult>
          </ChainOfThoughtSearchResults>
        </ChainOfThoughtStep>
      </ChainOfThoughtContent>
    </ChainOfThought>
  </div>
</template>
