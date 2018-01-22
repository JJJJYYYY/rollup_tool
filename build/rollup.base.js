const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')

module.exports = {
  input: 'src/main.js',
  plugins: [
    eslint({
      include: 'src/**',
      throwOnError: true
    }),
    babel({
      include: 'src/**',
      runtimeHelpers: true
    })
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    sourcemap: true,
    strict: true,
    name: 'Main'
  },
  external: ['babel-polyfill']
}