import { AxisIllustrationProps } from "@axiscommunications/fluent-illustrations";
import {
  Caption1,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import React, { ReactElement } from "react";
import { IllustrationCopy } from "../components/illustration-copy";
import { IllustrationDialog } from "../components/illustration-dialog";
import { DEFAULT_ILLUSTRATION_WIDTH } from "../illustration-page.types";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  iconWrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    ...shorthands.padding("8px"),
    ...shorthands.overflow("hidden"),
  },
  text: {
    display: "inline-block",
    height: "auto",
    ...shorthands.padding("0px 8px"),
  },
  displayName: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export function IllustrationList({
  illustrations,
}: { illustrations: React.FC<AxisIllustrationProps>[] }) {
  const styles = useStyles();

  const _renderIllustration = (
    Illustration: React.FC<AxisIllustrationProps>
  ): ReactElement => {
    return (
      <div
        key={Illustration.displayName}
        aria-label={Illustration.displayName}
        className={styles.iconWrapper}
      >
        <IllustrationDialog
          thumbnail={<Illustration width={DEFAULT_ILLUSTRATION_WIDTH} />}
          title={Illustration.displayName}
          Illustration={Illustration}
        />
        <div className={styles.displayName}>
          <Caption1 className={styles.text}>
            {Illustration.displayName}
          </Caption1>
          <IllustrationCopy
            toolTip={"copy react component to clipboard"}
            toCopy={Illustration.displayName}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.root}>{illustrations.map(_renderIllustration)}</div>
  );
}
