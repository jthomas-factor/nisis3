import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
  ),
  ...compat.plugins('@stylistic'),
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
    braceStyle: '1tbs',
  }),
  {
    rules: {
      '@stylistic/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'non-jsx' }],
      '@stylistic/jsx-self-closing-comp': ['error', {
        component: true,
        html: true
      }],
      '@stylistic/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
        propertyValue: 'ignore'
      }],
      '@stylistic/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
      '@stylistic/operator-linebreak': ['error', 'after',
        { overrides:
          {
            '+': 'ignore',
            '-': 'ignore',
            '|': 'ignore',
            '?': 'ignore',
          }
        }],
    },
  },
];

export default eslintConfig;
