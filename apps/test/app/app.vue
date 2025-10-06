<template>
  <NuxtPage />
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
