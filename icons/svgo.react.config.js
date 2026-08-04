// SVGO config for the icon REACT pipeline (react:svg:optimize).
// Migrated from svgo 1.x CLI flags `--precision=2 --disable=removeViewBox,mergePaths`
// to svgo 3 config: floatPrecision + preset-default overrides.
export default {
  floatPrecision: 2,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          mergePaths: false,
        },
      },
    },
  ],
};
