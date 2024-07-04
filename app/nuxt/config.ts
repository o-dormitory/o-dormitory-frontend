import type { NuxtConfig } from 'nuxt/schema';
import { defineEslintConfig } from '../eslint/config';
import { definePrimeVueConfig } from '../primevue/config';

export const useNuxtConfig = (): NuxtConfig => ({
  // devtools
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  // including modules
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@primevue/nuxt-module'],

  // css imports
  css: ['primeicons/primeicons.css'],

  // Eslint config
  eslint: defineEslintConfig(),

  imports: {
    dirs: [
      'shared/*',
    ],
  },

  // routing
  dir: {
    pages: 'app/routes',
  },

  // PrimeVue config
  primevue: definePrimeVueConfig(),
});
