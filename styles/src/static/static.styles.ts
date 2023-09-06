import { makeStaticStyles, tokens } from "@fluentui/react-components";

const scrollbarColor = tokens.colorScrollbarOverlay;
export const useScrollStaticStyles = makeStaticStyles({
  "*": {
    // Firefox
    scrollbarWidth: "thin",
    scrollbarColor: `${scrollbarColor} transparent`,
  },
  "*::-webkit-scrollbar": {
    width: tokens.spacingHorizontalS,
    height: tokens.spacingVerticalS,
  },
  "*::-webkit-scrollbar-thumb": {
    background: scrollbarColor,
    borderRadius: tokens.borderRadiusLarge,
  },
  "*::-webkit-scrollbar-track": {
    background: "none",
  },
});
