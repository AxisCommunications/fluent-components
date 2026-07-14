import { ButtonProps } from "@fluentui/react-components";
import { CopyButton as BaseCopyButton } from "../copy-button";

type TCopy = {
  codeString: string;
  className?: string;
} & Pick<ButtonProps, "shape" | "appearance">;

export function CopyButton({ className, codeString, ...rest }: TCopy) {
  return (
    <BaseCopyButton
      value={codeString}
      className={className}
      copyLabel="Copy code"
      shape="circular"
      {...rest}
    />
  );
}
