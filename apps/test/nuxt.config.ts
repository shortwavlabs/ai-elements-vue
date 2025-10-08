import { fileURLToPath } from 'url'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['@repo/shadcn-ui/src/styles/globals.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
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
  colorMode: {
    classSuffix: '',
  },
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
