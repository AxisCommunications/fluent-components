import {
  Button,
  ButtonProps,
  Tooltip,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { CheckmarkRegular, CopyRegular } from "@fluentui/react-icons";
import { MouseEvent, useCallback, useState } from "react";

const useStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground3,
    ":hover": {
      color: tokens.colorNeutralForeground1,
    },
  },
  copied: {
    color: tokens.colorStatusSuccessForeground1,
    ":hover": {
      color: tokens.colorStatusSuccessForeground1,
    },
  },
});

export type CopyButtonProps = {
  /** The text to write to the clipboard. */
  value: string;
  /** Tooltip/aria label shown in the idle state. */
  copyLabel?: string;
  /** Tooltip/aria label shown briefly after a successful copy. */
  copiedLabel?: string;
  className?: string;
} & Pick<ButtonProps, "shape" | "appearance" | "size">;

export function CopyButton({
  value,
  copyLabel = "Copy",
  copiedLabel = "Copied!",
  className,
  appearance = "subtle",
  ...rest
}: CopyButtonProps) {
  const styles = useStyles();
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    },
    [value]
  );

  return (
    <Tooltip
      withArrow
      relationship="label"
      content={copied ? copiedLabel : copyLabel}
    >
      <Button
        appearance={appearance}
        aria-label={copied ? copiedLabel : copyLabel}
        icon={copied ? <CheckmarkRegular /> : <CopyRegular />}
        className={mergeClasses(
          styles.root,
          copied && styles.copied,
          className
        )}
        onClick={onCopy}
        {...rest}
      />
    </Tooltip>
  );
}
