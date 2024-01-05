// declare module "*.svg" {
//   import * as React from "react";

//   export const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;
// }

// declare module "*.svg" {
//   const content: string;
//   export default content;
// }

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
