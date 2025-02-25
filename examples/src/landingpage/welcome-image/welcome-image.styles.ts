// --------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
// --------------------------------------------------------------------

import { makeStyles, shorthands } from "@fluentui/react-components";

const topBarHeight = "46px";
const cardPadding = "12px";
const pagePadding = "16px";
const pagePaddingBottom = "8px";

export const useWelcomeImageStyles = makeStyles({
  image: {
    ...shorthands.padding("64px"),
    maxHeight: `calc(100vh - ${topBarHeight} - ${cardPadding} - ${cardPadding} - ${pagePadding} - ${pagePaddingBottom})`,
  },
});
