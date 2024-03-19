import { Button, Tooltip } from "@fluentui/react-components";
import { RectangleLandscapeHintCopyRegular } from "@fluentui/react-icons";
import React, { useCallback } from "react";

type TIllustrationCopy = {
  toolTip: string;
  toCopy?: string;
};

export function IllustrationCopy({ toolTip, toCopy }: TIllustrationCopy) {
  const copyCode = useCallback(async () => {
    toCopy && await copyToClipboard(`<${toCopy}/>`);
  }, []);

  return (
    <Tooltip withArrow content={toolTip} relationship={"label"}>
      <Button
        appearance="transparent"
        onClick={copyCode}
        icon={<RectangleLandscapeHintCopyRegular />}
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
