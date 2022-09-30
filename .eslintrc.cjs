module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.cjs'],
    plugins: ['simple-import-sort'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:react/recommended', // React specific linting rules for eslint
        'plugin:prettier/recommended', // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
        'plugin:sonarjs/recommended', // SonarJS rules for ESLint to detect bugs and suspicious patterns in your code.
        'plugin:react-hooks/recommended', // This ESLint plugin enforces the Rules of Hooks.
    ],
    rules: {
        'no-console': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'unicorn/filename-case': 'off',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'prettier/prettier': ['error', {endOfLine: 'auto'}],
    },
}
