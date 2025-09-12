module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
    },
    {
        files: ['**/*.js'],
        plugins: {
            prettier: require('eslint-plugin-prettier'),
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];

