# Illustrations - @axiscommunications/fluent-illustrations

Axis branded illustrations

## Usage
You can use svg illustration directly from the `assets` folder'

Your can consume illustration in `React as Functional Components`
  * The components are `<img/>` and can take props accordingly

example:
```tsx
import React from "react";
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
## Assets

The `assets` folder contains all the SVG icons.
There is only one icon per folder. However, it should exist in a dark and light version.
The naming convention is `My Custom Illustration\il_axis_my_custom_illustration_type.svg` where type is either `light` or `dark`.

## Add/update or remove illustrations

### step1 - adjust illustrations
#### Add
Create a new folder on `assets` folder. Add a dark and light svg svg following the convention above. We recommend that your svg are optimized. Tho, the will be optimized before transformed to react components.
#### or/and Update
Identify the `assets` folder containing the illustration you want to update. You can update folder name or and svg name and content freely.
#### or/and Remove
Identify the `assets` folder containing the illustrations you want to remove. delete folder.

### step2 - generate react components
Run script target `illustrations:deploy`.
This script will start a chain of operations to generate react components. In short it will:
* run 3rd part svg optimizer on svgs
* wrap svg in react component (and image, src=svg)
* package index file for export

The components will be divided into chunkfiles in the `illustrations` folder.

**known issue** when doing a lot of update, we recommend to empty this folder completely before running script. currently it only override files, not remove. so example: if there are lots of illustrations divided into 3 chunk-files. Then u remove alot of them, now it generates 2 chunk-files. the 3rd will linger, delete it! :D

### step3 - verify illustrations
When done please start of dev example project and navigate to illustration page.
verify that all look good!

Now you can create PR of your changes!

## License

Illustration generation is heavily inspired of [microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons) which has MIT license.
