import eslintConfigPrettier from 'eslint-config-prettier';
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      'react': pluginReact,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: {
        version: "detect",
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
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/react-in-jsx-scope': 'off',
      'prefer-const': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      ...pluginReact.configs.recommended.rules,
    },
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ["build/*", "webpack*"]
  }
];