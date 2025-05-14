import { makeStaticStyles, tokens } from "@fluentui/react-components";

const scrollbarColor = tokens.colorScrollbarOverlay;

export const useScrollStaticStyles = makeStaticStyles({
  "*": {
    scrollbarWidth: "thin",
    scrollbarColor: `${scrollbarColor} transparent`,
  },
});
