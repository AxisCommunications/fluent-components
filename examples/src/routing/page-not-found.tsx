/*! *****************************************************************************
Copyright 2022 Axis Communications AB, SWEDEN. All rights reserved.
***************************************************************************** */
import { Title1, mergeClasses } from "@fluentui/react-components";
import React from "react";
import { useFixedPageStyle, useLayoutStyles } from "../styles/page";

export const PageNotFound = () => {
  const layout = useLayoutStyles();
  const pageStyle = useFixedPageStyle();
  const rootStyle = mergeClasses("page-not-found", pageStyle, layout.center);

  return (
    <div className={rootStyle}>
      <Title1>Page not found</Title1>
    </div>
  );
};
