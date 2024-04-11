import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyButton } from "./story-code-copy";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  copy: {
    position: "absolute",
    top: tokens.spacingVerticalM,
    right: tokens.spacingVerticalM,
  },
});

export const StoryCodeBlock = (
  { codeString, canCopy = true }: { codeString: string; canCopy?: boolean }
) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {canCopy && (
        <CopyButton
          codeString={codeString}
          className={styles.copy}
        />
      )}
      <SyntaxHighlighter language="typescript">
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
