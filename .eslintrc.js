/** @type {import('eslint').Linter.Config } */
module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    env: {
        browser: true,
        commonjs: true,
    },
    settings: {},
    overrides: [
        { files: '*.d.ts', rules: { strict: [ 'error', 'never' ] } },
        {
            files: [ '.eslintrc.js', 'next.config.js' ],
            rules: {
                'sort-keys': 'off',
                'array-element-newline': [ 'warn', { multiline: true, minItems: 4 }],
            },
        },
    ],
    plugins: [ 'react', 'tailwindcss' ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:tailwindcss/recommended'
    ],
    rules: {
        '@next/next/no-server-import-in-page': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'newline-per-chained-call': [ 'warn', { ignoreChainWithDepth: 2 }],
        'array-bracket-newline': [ 'warn', { multiline: true, minItems: 4 }],
        'array-bracket-spacing': [ 'warn', 'always', { objectsInArrays: false }],
        eqeqeq: [ 'error', 'smart' ],
        indent: [ 'warn', 4, { SwitchCase: 1 }],
        semi: [ 'warn', 'always' ],
        'no-eval': 'error',
        'no-extra-boolean-cast': 'off',
        'no-var': 'error',
        'object-curly-newline': [ 'warn', { ObjectExpression: { multiline: true, minProperties: 4 }, ObjectPattern: { multiline: true, minProperties: 4 }, ImportDeclaration: 'never' }],
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'off',
        'tailwindcss/no-custom-classname': [ 'warn', { whitelist: [ 'text-md', 'ring-opacity/5' ] }],
    },
    ignorePatterns: [
        'dist/*',
        '.next/*',
        'node_modules/*',
        '*.d.ts'
    ],
};
