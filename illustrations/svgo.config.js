// SVGO config for the illustration pipeline (illustrations:optimize-svg).
// Migrated from svgo 1.x (.svgo.yml) to svgo 3 preset-default + overrides.
// preset-default already enables removeDoctype, removeComments, removeMetadata,
// removeEditorsNSData, cleanupIds, removeUselessDefs, removeUnknownsAndDefaults,
// removeUselessStrokeAndFill, removeHiddenElems, removeEmptyText, removeEmptyAttrs,
// removeEmptyContainers, removeUnusedNS and removeDesc, so only the deviations are
// listed here. removeDimensions and removeRasterImages are not part of the preset.
export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    "removeDimensions",
    "removeRasterImages",
  ],
};
