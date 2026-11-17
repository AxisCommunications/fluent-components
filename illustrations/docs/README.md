# Illustrations - @axiscommunications/fluent-illustrations

Axis branded illustrations

## Usage
You can use svg illustration directly from the `assets` folder

Your can consume illustrations as `React Functional Components`
  * The components are `<img/>` and can take props accordingly
  * React components use width: auto by default

example:
```tsx
import { AddUserDark, AddUserLight } from "@axiscommunications/fluent-illustrations";


function IllustrationReactExample(){

  return(
    <div>
      <AddUserDark />
      <AddUserLight width={100}/>
    </div>
    )
}
;
```

### Import a single illustration

Each illustration is also published as its own module, `@axiscommunications/fluent-illustrations/<kebab-case-name>`.
It exports the dark and light variants plus a default export that picks the variant matching the current Axis theme (`bundleIllustrationSmart`).
Use it to load an illustration on demand, so it is only downloaded when rendered:

```tsx
import { Suspense, lazy } from "react";

const AddUser = lazy(() => import("@axiscommunications/fluent-illustrations/add-user"));

function LazyIllustrationExample() {
  return (
    <Suspense fallback={<div style={{ width: 230, height: 160 }} />}>
      <AddUser width={230} />
    </Suspense>
  );
}
```

The package is marked `"sideEffects": false`, so bundlers also drop unused illustrations when importing named exports from the package root.
## Assets

The `assets` folder contains all the SVG icons.
There is only one illustration per folder. However, it should exist in a dark and light version.
The naming convention is `My Custom Illustration\il_axis_my_custom_illustration_type.svg` where type is either `light` or `dark`.

## Add/update or remove illustrations

### Step 1 - adjust illustrations
#### Add
Create a new folder in `assets` folder. Add a dark and light svg following the convention above. We recommend that your svg:s are optimized. They will be optimized before transformed to react components.
#### or/and Update
Identify the `assets` folder containing the illustration you want to update. You can update folder name and/or svg name and content freely.
#### or/and Remove
Identify the `assets` folder containing the illustrations you want to remove. Delete folder.

### Step 2 - generate react components
Run script target `illustrations:deploy`.
This script will start a chain of operations to generate react components. In short it will:
* Run 3rd part svg optimizer on svgs
* Wrap svg in react component (and image, src=svg)
* Package index file for export

The components are written to one file per illustration in the `illustrations` folder, named after the illustration in kebab-case (for example `add-user.tsx`). The folder is emptied before the new files are copied, so removed illustrations don't linger.

### Step 3 - verify illustrations
When done please start the dev example project and navigate to illustration page.
verify that all look good!

Now you can create a PR of your changes!

## License

Illustration generation is heavily inspired of [microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons) which has MIT license.
