import resolver from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/scripts/main.js',
  dest: 'dist/scripts/main.js',
  plugins: [
    resolver({ jsnext: true }),
    commonjs(),
    buble()
  ],
  format: 'iife'
}
