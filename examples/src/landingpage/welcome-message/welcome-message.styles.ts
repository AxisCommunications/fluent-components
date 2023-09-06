// --------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
// --------------------------------------------------------------------

import { makeStyles, shorthands } from "@fluentui/react-components";

export const useWelcomeMessageStyle = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("50px"),
    ...shorthands.padding("100px"),
  },
  bodyText: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("10px"),
  },
});
