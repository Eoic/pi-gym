import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    'argsIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'caughtErrorsIgnorePattern': '^_',
                },
            ],
            'indent': [
                'error',
                4,
                { 'SwitchCase': 1 },
            ],
            'linebreak-style': [
                'error',
                'unix',
            ],
            'quotes': [
                'error',
                'single',
            ],
            'semi': [
                'error',
                'always',
            ],
            'object-curly-spacing': [
                'error',
                'always',
            ],
            'curly': ['error', 'multi-or-nest'],
            'comma-dangle': ['error', {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never',
            }],
            'prefer-template': 'error',
        },
    }
);
