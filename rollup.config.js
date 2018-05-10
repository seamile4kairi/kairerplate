// Module Imports
// -------------------------------------------------------------

import resolver from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import buble from 'rollup-plugin-buble';

// Configurations
// -------------------------------------------------------------

const {
  src,
  dest,
  ptrn
} = require('./bin/config');

// Module Exports
// -------------------------------------------------------------

// cf.) https://rollupjs.org/guide/en#configuration-files

export default [
  {
    input: `${src}/${ptrn['build:script']}`,
    output: [
      {
        file: `${dest}/${ptrn['build:script']}`,
        format: 'iife',
        name: `MainScript`,
      }
    ],
    plugins: [
      resolver({
        jsnext: true,
        main: true,
      }),
      commonjs({
        include: [
          `node_modules/**`,
        ],
      }),
      eslint({
        exclude: [
          `node_modules/**`,
          `${src}/lib/**`,
        ]
      }),
      buble({}),
    ],
  }
];
