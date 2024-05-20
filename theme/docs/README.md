# Theme - @axiscommunications/fluent-theme

An Axis branded theme for Fluent UI v9. Extended with custom tokens.
Axis themes in this package are consumed via `npm.pkg.github.com` as `@axiscommunications/fluent-theme`.

```tsx
import React from "react";
import { FluentProvider } from "@fluentui/react-components";
import { axisDarkTheme, axisCustomTokens } from "@axiscommunications/fluent-theme";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <FluentProvider theme={axisDarkTheme}>
      <App/>
    </FluentProvider>
  </React.StrictMode>
);
```
```tsx
import React from "react";
import { makeStyles } from "@fluentui/react-components";
import { axisCustomTokens } from "@axiscommunications/fluent-theme";

export const useApplicationStyles = makeStyles({
  root: {
    backgroundColor: axisCustomTokens.axisCustomColorMyBusinessBackground
  }
});
```


# Tokens

The `src/index.ts` file is used to update fluent themes directly. After edit or update of fluent version, please run scripts below to generate tokens to other formats.

A fluent token can be overridden by simply overwriting the corresponding value, example:

    to override colorNeutralForegroundOnBrand for axisDarkTheme do:

      export const axisDarkTheme: Theme = {
      ...createDarkTheme(brand),
      colorNeutralForegroundOnBrand: "#000000",
      };

Fluent themes are transformed into Style Dictionary tokens for each "theme", i.e. `tokens/generated/tokens/global.json`, `tokens/generated/tokens/dark.json`, `tokens/generated/tokens/light.json`.

Style Dictionary tokens are used to generate files in different formats, e.g. css, ts, xaml, etc.

## how to generate tokens

After updating theme src/index or up fluent version

- `pnpm tokens:transform` to create Style Dictionary tokens in the `tokens/generated/tokens` folder
- `pnpm tokens:build` to generate tokens in all different formats to the `tokens/generated` folder
- `pnpm tokens:runall` to all in one go
