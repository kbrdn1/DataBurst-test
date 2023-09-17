/** @type {import("prettier").Config} */
module.exports = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'crlf',
    overrides: [
        {
            files: '*.tsx',
            options: {
                parser: 'typescript'
            }
        }
    ]
};