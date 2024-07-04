import type { NuxtConfig } from 'nuxt/schema';

export const defineEslintConfig = (): NuxtConfig['eslint'] => ({
  checker: true,
  config: {
    typescript: { strict: true },
    stylistic: {
      semi: true,
      indent: 2,
      quotes: 'single',
      arrowParens: true,
    },
  },
});
