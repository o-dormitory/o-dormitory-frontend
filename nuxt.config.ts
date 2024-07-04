// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ['@pinia/nuxt', "@nuxt/eslint"],
  eslint: {
    checker: true,
    config: {
      stylistic: {
        semi: true,
        indent: 2,
        quotes: 'single',
        arrowParens: true,
      },
    },
  },
})
