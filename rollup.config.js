import resolver from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

const config = require('./config');

export default {
  entry: `${config.src}/scripts/main.js`,
  dest: `${config.dest}/scripts/main.js`,
  plugins: [
    resolver({ jsnext: true }),
    commonjs(),
    buble()
  ],
  format: 'iife'
}
