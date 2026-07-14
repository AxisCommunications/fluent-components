import { CopyButton } from "../../../components/copy-button";

type TIllustrationCopy = {
  toolTip: string;
  toCopy?: string;
};

export function IllustrationCopy({ toolTip, toCopy }: TIllustrationCopy) {
  return (
    <CopyButton
      value={toCopy ? `<${toCopy}/>` : ""}
      copyLabel={toolTip}
      appearance="transparent"
    />
  );
}
