import Aura from '@primevue/themes/aura';

import type { NuxtConfig } from 'nuxt/schema';

export const definePrimeVueConfig = (): NuxtConfig['primevue'] => ({
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
});
