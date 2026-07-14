import { CopyButton } from "../../../components/copy-button";

type TIconCopy = {
  toolTip: string;
  toCopy?: string;
};

export function IIconCopy({ toolTip, toCopy }: TIconCopy) {
  return (
    <CopyButton
      value={toCopy ? `<${toCopy}/>` : ""}
      copyLabel={toolTip}
      appearance="transparent"
    />
  );
}
