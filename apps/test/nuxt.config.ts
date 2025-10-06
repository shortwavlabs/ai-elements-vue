import { fileURLToPath } from 'url'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxt/fonts',
      {
        google: {
          families: ['Inter:100..900'],
          display: 'swap',
        },
        inject: true,
        prefetch: true,
      },
    ],
  ],
  vite: {
    plugins: [tsConfigPaths()],
    resolve: {
      alias: {
        '@': fileURLToPath(
          new URL('../../packages/shadcn-ui', import.meta.url),
        ),
      },
    },
  },
})
