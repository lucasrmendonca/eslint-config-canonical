module.exports.recommended = {
  files: ['**/*.{ts,tsx}'],
  rules: {
    '@babel/no-unused-expressions': 0,
    '@typescript-eslint/brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    '@typescript-eslint/comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    '@typescript-eslint/comma-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    '@typescript-eslint/default-param-last': 2,

    '@typescript-eslint/func-call-spacing': [2, 'never'],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/init-declarations': 0,
    '@typescript-eslint/keyword-spacing': [
      2,
      {
        after: true,
        before: true,
      },
    ],
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-dupe-class-members': 2,
    '@typescript-eslint/no-extra-parens': 2,
    '@typescript-eslint/no-extra-semi': 2,

    '@typescript-eslint/no-invalid-this': 0,
    '@typescript-eslint/no-loop-func': 2,
    '@typescript-eslint/no-loss-of-precision': 2,
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-redeclare': [
      2,
      {
        builtinGlobals: true,
      },
    ],
    '@typescript-eslint/no-restricted-imports': 0,
    '@typescript-eslint/no-shadow': [
      2,
      {
        builtinGlobals: false,
        hoist: 'all',
      },
    ],

    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        classes: true,
        functions: false,
        variables: true,
      },
    ],
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/object-curly-spacing': 0,
    '@typescript-eslint/quotes': [2, 'single'],
    '@typescript-eslint/require-await': 0,
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/space-before-blocks': [2, 'always'],
    '@typescript-eslint/space-before-function-paren': [2, 'always'],
    '@typescript-eslint/space-infix-ops': 2,
    'brace-style': 0,
    'comma-dangle': 0,
    'comma-spacing': 0,
    'default-param-last': 0,
    'dot-notation': 0,
    'func-call-spacing': 0,
    indent: 0,
    'init-declarations': 0,
    'keyword-spacing': 0,
    'no-array-constructor': 0,
    'no-dupe-class-members': 0,
    'no-duplicate-imports': 0,
    'no-empty-function': 0,
    'no-extra-parens': 0,
    'no-extra-semi': 0,
    'no-implied-eval': 0,
    'no-invalid-this': 0,
    'no-loop-func': 0,
    'no-loss-of-precision': 0,
    'no-magic-numbers': 0,
    'no-redeclare': 0,
    'no-restricted-imports': 0,
    'no-shadow': 0,
    'no-throw-literal': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-useless-constructor': 0,
    'object-curly-spacing': 0,
    quotes: 0,
    'react/prop-types': 0,
    'require-await': 0,
    semi: 0,
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'space-infix-ops': 0,
  },
};
