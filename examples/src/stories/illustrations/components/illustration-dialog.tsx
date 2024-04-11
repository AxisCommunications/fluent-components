import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import * as React from "react";
import { PropsWithChildren } from "react";
import { IllustrationCopy } from "./illustration-copy";

const useStyles = makeStyles({
  codeBlockWrapper: {
    flexGrow: 1,
  },
  dialogContent: {
    display: "flex",
  },
  dialogButton: {
    ...shorthands.transition("all", "250ms"),
    ":hover": {
      ...shorthands.borderRadius(tokens.borderRadiusCircular),
      backgroundColor: tokens.colorNeutralBackground1,
    },
  },
  iconBootstrap: {
    resize: "both",
    width: "250px",
    maxWidth: "500px",
    maxHeight: "500px",
    ...shorthands.overflow("auto"),
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
});

type TIllustrationDialog = {
  thumbnail: JSX.Element;
  title?: string;
};

export const IllustrationDialog = (
  { thumbnail, children, title }: PropsWithChildren<TIllustrationDialog>
) => {
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
              {children}
            </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export const codeString = `
hej
`;
