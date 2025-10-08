<script setup lang="ts">
import ModeToggle from './components/ModeToggle.vue'
</script>

<template>
  <div class="w-full h-full">
    <header
      class="w-full p-4 border-b flex items-center justify-between sticky top-0 bg-background z-10"
    >
      <h1 class="text-base font-bold font-sans">AI Elements Vue</h1>
      <div>
        <ModeToggle />
      </div>
    </header>
    <NuxtPage />
  </div>
</template>

<style global>
:root {
  /* If @nuxt/fonts injects a variable it'll be --font-inter; otherwise use system sans */
  --app-font-sans: var(
    --font-inter,
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial
  );
}

html,
body,
#__nuxt,
#app {
  height: 100%;
}

body {
  font-family: var(--app-font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
