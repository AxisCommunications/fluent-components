import { makeStaticStyles, tokens } from "@fluentui/react-components";

const scrollbarColor = tokens.colorScrollbarOverlay;
export const useScrollStaticStyles = makeStaticStyles({
  "@-moz-document url-prefix() {*": {
    // Firefox
    // Scrollbar styling is amazingly complex. Read more here:
    // https://stackoverflow.com/questions/6165472/custom-css-scrollbar-for-firefox
    scrollbarWidth: "thin",
    scrollbarColor: `${scrollbarColor} transparent`,
  },
  "*::-webkit-scrollbar": {
    width: tokens.spacingHorizontalSNudge,
    height: tokens.spacingHorizontalSNudge,
  },
  "*::-webkit-scrollbar-thumb": {
    background: scrollbarColor,
    borderRadius: tokens.borderRadiusXLarge,
  },
  "*::-webkit-scrollbar-track": {
    background: "none",
  },
});
