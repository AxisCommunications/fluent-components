# Theme - @axiscommunications/fluent-illustrations

## design plan:

**script targets**

```json
    "run": "pnpm illustrations:deploy",
    "illustrations:deploy": "mkdir -p src && pnpm react:build && cp -a dist/react/* src",
    "illustrations:build": "mkdir -p dist/react-svg && pnpm react:generate:svg && pnpm react:svg:optimize && pnpm react:generate:react",
      "illustrations:generate:svg": "node --require ts-node/register build-svg.ts --source=assets --dest=./dist/react-svg --extension=svg"
      "illustrations:svg:optimize": "svgo --folder=./dist/react-svg --precision=2 --disable=removeViewBox,mergePaths",
      "illustrations:generate:react": "node --require ts-node/register build-react.ts --source=./dist/react-svg --dest=./dist/react",
```

**details**
*illustrations:build*
* some cleanup*, example empty
* illustrations:generate:svg
  * validates all assets, add/removes attributes, assets copied to temp folder
* illustrations:svg:optimize
  * optimizes svgs in temp folder using third party tool svgo, reduce size and such
* illustrations:generate:react
  * based of temp svg, generate react components

*all generated components will copied from temp to src folder, next run can then cleanup temp and re-rerun



### when generation live add this to README.md
## License
Font generation inspired by [microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons) which has MIT license.
