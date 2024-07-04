import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js', '**/*.ts', '**/*.vue'],
    rules: {
      semi: 'error'
    }
  }
);
