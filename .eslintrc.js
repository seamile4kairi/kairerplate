// Configurations
// -------------------------------------------------------------

const {
  isPrd
} = require('./bin/config');

// Module Exports
// -------------------------------------------------------------

// cf.) https://eslint.org/docs/user-guide/configuring

module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "error",
      {
        allow: [
          (isPrd ? "" : "log"),
          "warn",
          "error"
        ]
      }
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "local",
        "args": "none"
      }
    ],
  }
};
