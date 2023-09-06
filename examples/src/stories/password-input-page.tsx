import React from "react";

import { PasswordInput } from "@axiscommunications/fluent-password-input";

import { mergeClasses } from "@fluentui/react-components";
import { PageHeader } from "../components/page-header";
import { useLayoutStyles, useScrollPageStyle } from "../styles/page";

export const PasswordInputPage = () => {
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();

  return (
    <div className={layoutStyles.grid}>
      <PageHeader className={layoutStyles.header} title="Password input" />
      <div
        className={mergeClasses(
          "content",
          layoutStyles.content,
          layoutStyles.sections,
          scrollPageStyle
        )}
      >
        <div>
          <PasswordInput />
        </div>
      </div>
    </div>
  );
};
