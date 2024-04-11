import {
  Button,
  makeStyles,
  mergeClasses,
  tokens,
  Tooltip,
} from "@fluentui/react-components";
import { RectangleLandscapeHintCopyFilled } from "@fluentui/react-icons";
import React, { useCallback } from "react";

const componentId = "copy";
export const copyClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    "&:hover": {
      color: tokens.colorBrandBackground,
    },
  },
});

type TUseCopyStyles = {
  className?: string;
};

export function useCopyStyles({ className }: TUseCopyStyles) {
  const styles = useStyles();
  const rootStyle = mergeClasses(copyClassNames.root, styles.root, className);
  return { styles, rootStyle };
}

type TCopy = {
  codeString: string;
  className?: string;
};

export function CopyButton({ className, codeString, ...rest }: TCopy) {
  const { rootStyle } = useCopyStyles({ className });

  const copyCode = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      e.preventDefault();
      await copyToClipboard(codeString);
    },
    []
  );

  return (
    <Tooltip withArrow content={"copy codeblock"} relationship={"label"}>
      <Button
        className={rootStyle}
        {...rest}
        shape="circular"
        onClick={copyCode}
        icon={<RectangleLandscapeHintCopyFilled />}
      >
      </Button>
    </Tooltip>
  );
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Error copying to clipboard:", error);
  }
}
