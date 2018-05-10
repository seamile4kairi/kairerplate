// Module Exports
// -------------------------------------------------------------

// cf.) https://github.com/svg/svgo#what-it-can-do

module.exports = {
  plugins: [
    "convertStyleToAttrs",
    {
      "removeUselessStrokeAndFill": {
        "fill": false
      }
    },
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeTitle",
    "removeEditorsNSData",
    "cleanupAttrs",
    "cleanupIDs",
    "removeUselessDefs",
    "cleanupNumericValues",
    "cleanupListOfValues",
    "convertColors",
    "removeNonInheritableGroupAttrs",
    "cleanupEnableBackground",
    "removeHiddenElems",
    "removeEmptyText",
    "convertShapeToPath",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    "collapseGroups",
    "convertTransform",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "removeUnusedNS",
    "removeDesc"
  ],
}
