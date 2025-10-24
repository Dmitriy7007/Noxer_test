import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
// import boundaries from 'eslint-plugin-boundaries';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactLint from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const typescriptConfig = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
};

export default [
  {
    ignores: ['build', 'node_modules', '.react-router'],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  typescriptConfig,
  ...pluginQuery.configs['flat/recommended'],
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      react: reactLint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      // boundaries,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
      },
      // 'boundaries/include': ['src/**/*'],
      // 'boundaries/elements': [
      //   { type: 'app', pattern: 'app' },
      //   { type: 'pages', pattern: 'pages/*', capture: ['page'] },
      //   { type: 'widgets', pattern: 'widgets/*', capture: ['widget'] },
      //   { type: 'features', pattern: 'features/*', capture: ['feature'] },
      //   { type: 'entities', pattern: 'entities/*', capture: ['entity'] },
      //   { type: 'shared', pattern: 'shared/*', capture: ['segment'] },
      // ],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': "off",
      'react/prop-types': 'off',
      'import/order': ['warn', { alphabetize: { order: 'asc' } }],
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],


      // 🚧 FSD ограничения

      // 'boundaries/entry-point': [
      //   2,
      //   {
      //     default: 'disallow',
      //     rules: [
      //       {
      //         target: [['shared', { segment: 'lib' }]],
      //         allow: '*/index.ts',
      //       },
      //       {
      //         target: [['shared', { segment: 'lib' }]],
      //         allow: '**/*.(ts|tsx)',
      //       },
      //       {
      //         target: [['shared', { segment: 'constants' }]],
      //         allow: 'index.ts',
      //       },
      //       {
      //         target: [['shared', { segment: 'ui' }]],
      //         allow: '**',
      //       },
      //       {
      //         target: [['shared', { segment: 'assets' }]],
      //         allow: '**',
      //       },
      //                   {
      //         target: [['shared', { segment: 'api' }]],
      //         allow: '**',
      //       },
      //       {
      //         target: [['shared', { segment: 'type' }]],
      //         allow: '*.ts',
      //       },
      //       {
      //         target: [['shared', { segment: 'router' }]],
      //         allow: '*.ts',
      //       },
      //       {
      //         target: [['shared', { segment: 'store' }]],
      //         allow: '**/*.ts',
      //       },
      //       {
      //         target: [['shared', { segment: 'hooks' }]],
      //         allow: '*.(ts|tsx)',
      //       },
      //       {
      //         target: ['app', 'pages', 'widgets', 'features', 'entities'],
      //         allow: 'index.(ts|tsx)',
      //       },
      //     ],
      //   },
      // ],
      // 'boundaries/element-types': [
      //   2,
      //   {
      //     default: 'allow',
      //     message: '${file.type} запрещен к импорту из (${dependency.type})',
      //     rules: [
      //       {
      //         from: ['shared'],
      //         disallow: ['app', 'pages', 'widgets', 'features', 'entities'],
      //         message: 'Shared запрещен к импорту из (${dependency.type})',
      //       },
      //       {
      //         from: ['entities'],
      //         disallow: ['app', 'pages', 'widgets', 'features'],
      //         message: 'Entity запрещен к импорту из (${dependency.type})',
      //       },
      //       {
      //         from: ['entities'],
      //         disallow: [['entities', { entity: '!$(entity)' }]],
      //         message: 'Entity запрещен к импорту из другого entity',
      //       },
      //       {
      //         from: ['features'],
      //         disallow: ['app', 'pages', 'widgets'],
      //         message: 'Feature запрещен к импорту из (${dependency.type})',
      //       },
      //       {
      //         from: ['features'],
      //         disallow: [['features', { feature: '!$(feature)' }]],
      //         message: 'Feature запрещен к импорту из другого feature',
      //       },
      //       {
      //         from: ['widgets'],
      //         disallow: ['app', 'pages'],
      //         message: 'Widget запрещен к импорту из (${dependency.type})',
      //       },
      //       {
      //         from: ['widgets'],
      //         disallow: [['widgets', { widget: '!$(widget)' }]],
      //         message: 'Widget запрещен к импорту из другого widget',
      //       },
      //       {
      //         from: ['pages'],
      //         disallow: ['app'],
      //         message: 'Page запрещен к импорту из (${dependency.type})',
      //       },
      //       {
      //         from: ['pages'],
      //         disallow: [['pages', { page: '!$(page)' }]],
      //         message: 'Page запрещен к импорту из другого page',
      //       },
      //     ],
      //   },
      // ],
    },
  },
];
