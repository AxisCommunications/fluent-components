import { makeStaticStyles, tokens } from "@fluentui/react-components";

const scrollbarColor = tokens.colorScrollbarOverlay;

const isFirefox = window.navigator.userAgent.includes("Fire");
export const useScrollStaticStyles = makeStaticStyles({
  "*": {
    // Firefox
    // Scrollbar styling is amazingly complex. Read more here:
    // https://stackoverflow.com/questions/6165472/custom-css-scrollbar-for-firefox
    scrollbarWidth: isFirefox ? "thin" : "unset",
    scrollbarColor: isFirefox ? `${scrollbarColor} transparent` : "auto",
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
