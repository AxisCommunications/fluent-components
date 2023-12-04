import { makeStaticStyles } from "@fluentui/react-components";

export const useStaticStyles = makeStaticStyles({
  body: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    // hide overflow to prevent FluentProvider from flashing scrollbars when opening menus
    overflow: "hidden",
  },
});
