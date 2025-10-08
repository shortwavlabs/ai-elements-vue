<script setup lang="ts">
import { Button } from '@repo/shadcn-ui/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/shadcn-ui/components/ui/dropdown-menu'

import { SunIcon, MoonStarIcon } from 'lucide-vue-next'

const colorMode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline" size="icon" class="rounded-full">
        <SunIcon v-if="colorMode.preference === 'light'" />
        <MoonStarIcon v-else-if="colorMode.preference === 'dark'" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Theme</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        @click="colorMode.preference = 'light'"
        class="hover:cursor-pointer"
      >
        <span>Light</span>
      </DropdownMenuItem>
      <DropdownMenuItem
        @click="colorMode.preference = 'dark'"
        class="hover:cursor-pointer"
      >
        <span>Dark</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
