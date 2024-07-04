import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@primevue/nuxt-module'],
  css: ['primeicons/primeicons.css'],
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
  primevue: {
    autoImport: true,
    usePrimeVue: true,
    directives: {
      include: '*',
    },
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false,
        },
      },
    },
  },
});
