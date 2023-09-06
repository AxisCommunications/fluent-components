# Axis Icons

Fluent icons are available at [microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons) and are easily consumed via `npm` as [@fluentui/react-icons](https://www.npmjs.com/package/@fluentui/react-icons) or as [fonts](https://github.com/microsoft/fluentui-system-icons/tree/master/fonts).

```tsx
import React from "react";
import { Button, FluentProvider } from "@fluentui/react-components";
import { Add16Regular } from "@fluentui/react-icons";
import { axisDarkTheme } from "@axiscommunications/fluent-theme";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <FluentProvider theme={axisDarkTheme}>
      <Button icon={<Add16Regular />}>Click me!</Button>
    </FluentProvider>
  </React.StrictMode>
);
```

Axis custom icons in this package are consumed via `npm.pkg.github.com` as `@axiscommunications/fluent-icons` or as [fonts](https://github.com/AxisCommunications/fluent-components/tree/main/icons/fonts).

```tsx
import React from "react";
import { Button, FluentProvider } from "@fluentui/react-components";
import { Add16Regular, AddFilled } from "@axiscommunications/fluent-icons";
import { axisDarkTheme } from "@axiscommunications/fluent-theme";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <FluentProvider theme={axisDarkTheme}>
      <Button icon={<Add16Regular />}>Click me!</Button>
      <Button icon={<AddFilled />}>Click me!</Button>
    </FluentProvider>
  </React.StrictMode>
);
```

## Assets

The `assets` folder contains all the SVG icons.
The 20px icons are used for the resizable icons (with width and height set to `1em`).
There is only one icon per folder. However, it may exist in multiple sizes and types.
The naming convention is `My Custom Icon\SVG\ic_axis_my_custom_icon_20_type.json` where type is either `filled` or `regular`.
The fill color `#212121` should be used in order to be properly handled by the tool chain.

The `fonts` folder contains files generated from SVG files using `pnpm fonts:deploy`.
However, only codepoints specified in the JSON files are included in the fonts.

The `src` folder contains files with React components generated from SVG files using `pnpm react:deploy`.

After updating SVG files:

- Update JSON files with codepoints for new icons
  - `fonts/AxisSystemIcons-Filled.json`
  - `fonts/AxisSystemIcons-Regular.json`
- `pnpm fonts:deploy` to generate and copy fonts to the `fonts` folder
- `pnpm react:deploy` to generate and copy react components to the `src` folder

## License

Font generation based on [microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons) which has MIT license.
