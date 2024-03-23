import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { RectangleLandscapeHintCopyRegular } from "@fluentui/react-icons";
import React, { useCallback } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

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

  const copyCode = useCallback(async () => {
    await copyToClipboard(codeString);
  }, []);

  return (
    <div className={styles.root}>
      {canCopy && (
        <Button
          onClick={copyCode}
          className={styles.copy}
          icon={<RectangleLandscapeHintCopyRegular />}
        >
          copy snippet
        </Button>
      )}
      <SyntaxHighlighter language="typescript">
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Error copying to clipboard:", error);
  }
}
