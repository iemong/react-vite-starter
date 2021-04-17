module.export = {
    root: true,
    parser: '@typescript-eslint/parser',

    plugins: [
        '@typescript-eslint',
        'react-hooks',
        'jsx-a11y',
        'import',
        'prettier',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
}
