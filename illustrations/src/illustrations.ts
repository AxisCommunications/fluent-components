import { lazy as _lazy } from "react";
import Add from "../assets/add.svg";



// eslint-disable-next-line @typescript-eslint/ban-types
function lazy(importFn: Function) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}


export const illustrations = {
  Add
};
