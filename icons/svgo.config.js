// SVGO config for the icon FONT pipeline (fonts:optimize:svg).
// Migrated from svgo 1.x (svgo_config.yml) to svgo 3 preset-default + overrides.
// `noSpaceAfterFlags: false` keeps a space after arc flags so the generated
// path data stays parseable by the downstream font generator.
export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          convertPathData: { noSpaceAfterFlags: false },
          mergePaths: { noSpaceAfterFlags: false },
        },
      },
    },
  ],
};
