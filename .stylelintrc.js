// Module Exports
// -------------------------------------------------------------

// cf.) https://stylelint.io/user-guide/configuration/

module.exports = {
  "extends": "stylelint-config-recommended",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "/^custom/",
          "extend"
        ]
      }
    ],
    "block-no-empty": null,
    "font-family-no-duplicate-names": [
      true,
      {
        "ignoreFontFamilyNames": [
          "monospace"
        ]
      }
    ],
    "length-zero-no-unit": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null
  }
}
