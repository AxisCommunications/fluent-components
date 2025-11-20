import { AxisIllustrationProps } from "@axiscommunications/fluent-illustrations";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Subtitle2,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import { ReactElement } from "react";
import { useFindVariantsByIllustrationName } from "../illustration-page.hooks";
import { IllustrationCopy } from "./illustration-copy";

const useStyles = makeStyles({
  codeBlockWrapper: {
    flexGrow: 1,
  },
  dialogContent: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingVerticalXXL),
  },
  dialogButton: {
    ...shorthands.transition("all", "250ms"),
    ":hover": {
      ...shorthands.borderRadius(tokens.borderRadiusCircular),
      backgroundColor: tokens.colorNeutralBackground1,
    },
  },
  illustrationBootstrap: {
    resize: "horizontal",
    width: "500px",
    aspectRatio: 1,
    maxWidth: "800px",
    maxHeight: "800px",
    ...shorthands.overflow("hidden"),
    ...shorthands.border(
      tokens.strokeWidthThick,
      "solid",
      tokens.colorNeutralBackground1Selected
    ),
  },
  dialogSurface: {
    width: "fit-content",
    maxWidth: "8000px",
    maxHeight: "8000px",
  },
  variantPreview: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalM),
  },
  preview: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingVerticalM),
  },
  copyVariant: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

type TIllustrationDialog = {
  thumbnail: ReactElement;
  title?: string;
  Illustration: React.FC<AxisIllustrationProps>;
};

export const IllustrationDialog = ({
  thumbnail,
  Illustration,
  title,
}: TIllustrationDialog) => {
  const styles = useStyles();

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button className={styles.dialogButton} appearance="transparent">
          {thumbnail}
        </Button>
      </DialogTrigger>
      <DialogSurface className={styles.dialogSurface}>
        <DialogBody>
          <DialogTitle
            action={
              <DialogTrigger action="close">
                <Button
                  appearance="subtle"
                  aria-label="close"
                  icon={<DismissRegular />}
                />
              </DialogTrigger>
            }
          >
            {title}
            <IllustrationCopy
              toolTip={"copy react component to clipboard"}
              toCopy={title}
            />
          </DialogTitle>
          <DialogContent className={styles.dialogContent}>
            <div className={styles.illustrationBootstrap}>
              <Illustration />
            </div>
            <VariantPreview Illustration={Illustration} />
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

function VariantPreview({
  Illustration,
}: Pick<TIllustrationDialog, "Illustration">) {
  const styles = useStyles();

  if (!Illustration.displayName) {
    return <div />;
  }

  const { DarkVariant, LightVariant, currentVariant } =
    useFindVariantsByIllustrationName(Illustration.displayName);
  const OtherVariant = currentVariant === "Dark" ? LightVariant : DarkVariant;

  return (
    <div className={styles.variantPreview}>
      {OtherVariant && <Preview Illustration={OtherVariant} />}
    </div>
  );
}

type TPreview = {
  title?: string;
  toCopy?: string;
  Illustration: React.FC<AxisIllustrationProps>;
};

function Preview({ Illustration, title, toCopy }: TPreview) {
  const styles = useStyles();

  return (
    <div className={styles.preview}>
      {<Illustration width={200} />}
      <div className={styles.copyVariant}>
        <Subtitle2>{title || Illustration.displayName}</Subtitle2>
        <IllustrationCopy
          toolTip={"copy react component to clipboard"}
          toCopy={toCopy || Illustration.displayName}
        />
      </div>
    </div>
  );
}
