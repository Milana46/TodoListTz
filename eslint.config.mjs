import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'comma-dangle': ['error', 'always-multiline'],
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react', '^'], ['^@?\\w'], ['^src/'], ['^\\.']],
        },
      ],
      ...pluginReact.configs.recommended.rules,
    },
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['build/*', 'webpack*', 'node_modules'],
  },
];
