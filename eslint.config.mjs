import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import compat from 'eslint-plugin-compat';
import jest from 'eslint-plugin-jest';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * Replaces the retired `eslint-plugin-maintainable` preset, which pinned ESLint 8
 * and `@typescript-eslint` 6 and is now deprecated upstream. The rules below are
 * the ones that preset actually enforced, sourced directly from the mainstream
 * plugins instead.
 *
 * Formatting is no longer routed through ESLint (`eslint-plugin-prettier`);
 * `eslint-config-prettier` switches off the rules that would fight Prettier, and
 * `npm run test:format` / lint-staged run Prettier directly.
 */
export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      'dist/**',
      'coverage/**',
      'storybook-static/**',
      '.wireit/**',
      'test-results/**',
      'playwright-report/**',
      'example-cra/**',
      'example-nextjs/**',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      sonarjs,
    },
    rules: {
      // --- Maintainability budgets, carried over from the old preset ---------
      // `max-len` is deliberately absent: Prettier owns line width (80, from
      // .editorconfig) and eslint-config-prettier switches the rule off anyway.
      // Cognitive complexity replaces ESLint's built-in cyclomatic `complexity`
      // rule, which the old preset capped at 11. ESLint 9 counts optional
      // chaining and `??` towards cyclomatic complexity, which scores `ScrollMenu`
      // at 21 without the code having changed. Cognitive complexity models
      // nesting and short-circuiting the way a reader experiences them and is the
      // metric worth gating on; `ScrollMenu` sits comfortably under this cap.
      'sonarjs/cognitive-complexity': ['error', 9],
      'max-statements': ['error', 30],
      'max-params': ['error', 4],
      'max-nested-callbacks': ['error', 3],
      'max-lines-per-function': [
        'error',
        { max: 120, skipBlankLines: true, skipComments: true },
      ],
      'max-lines': ['error', 400],
      'max-depth': ['error', 3],

      // --- Style preferences the old preset switched off ---------------------
      'sort-imports': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      // `cond && sideEffect()` and `cond ? a() : b()` are used throughout this
      // codebase. typescript-eslint v8 added this rule to its recommended set
      // with those forms disallowed by default; the previous preset did not.
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],

      // --- Imports and unused code ------------------------------------------
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      // Superseded by unused-imports, which knows how to autofix.
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  // --- React ---------------------------------------------------------------
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...react.configs.flat.recommended,
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
  },
  reactHooks.configs.flat['recommended-latest'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // --- Browser support, checked against the `browserslist` field ------------
  {
    files: ['src/**/*.{ts,tsx}'],
    ...compat.configs['flat/recommended'],
  },

  // --- Tests ---------------------------------------------------------------
  // Scoped to `src` (jest's `roots`) so the Playwright specs under `e2e` do not
  // pick up jest's globals and rules.
  {
    files: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    ...jest.configs['flat/recommended'],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },
  {
    files: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    rules: {
      'sonarjs/no-duplicate-string': 'off',
      'max-statements': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': ['error', 7],
    },
  },

  // --- Storybook -----------------------------------------------------------
  ...storybook.configs['flat/recommended'],
  {
    files: ['stories/**/*.{ts,tsx}'],
    rules: {
      'sonarjs/cognitive-complexity': ['error', 10],
      // Examples are illustrative, not production code.
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-statements': 'off',
    },
  },

  // --- Playwright ----------------------------------------------------------
  {
    files: ['e2e/**/*.ts'],
    ...playwright.configs['flat/recommended'],
  },
  {
    files: ['e2e/**/*.ts'],
    rules: {
      // `describe` > `describe` > `test` > callback is normal spec structure.
      'max-nested-callbacks': ['error', 5],
      // A short pause is the only way to assert that state did *not* change
      // after an IntersectionObserver callback; the spec explains each use.
      'playwright/no-wait-for-timeout': 'off',
      // The specs assert through named helpers rather than inline `expect`.
      'playwright/expect-expect': [
        'warn',
        {
          assertFunctionNames: [
            'openDemo',
            'expectArrow',
            'expectVisibleCards',
          ],
        },
      ],
    },
  },

  // Must stay last: turns off everything that would conflict with Prettier.
  prettier,
);
