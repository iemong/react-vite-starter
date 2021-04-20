const tailwindcss = require('tailwindcss')
const postcssPresetEnv = require('postcss-preset-env')
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        tailwindcss(),
        autoprefixer(),
        postcssPresetEnv({ browsers: 'last 2 versions', stage: 1 }),
    ],
}

module.exports = (opts = {}) => {
    checkOpts(opts)
    return {
        postcssPlugin: 'postcss-dark-theme-class',
        Once(root, { result }) {
            root.walkAtRules((atrule) => {})
        },
    }
}

module.exports.postcss = true
