import {
  Badge,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
  Tooltip,
} from "@fluentui/react-components";
import React from "react";

export enum EStoryStatus {
  NEW,
  WIP,
  STABLE,
  PRIVATE,
  PUBLIC,
}

const STATUS_BADGES: Record<EStoryStatus, JSX.Element> = {
  [EStoryStatus.WIP]: (
    <Tooltip
      content={"Packages is not yet fully completed. Work is still in progress."}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="warning">wip</Badge>
    </Tooltip>
  ),
  [EStoryStatus.NEW]: (
    <Tooltip
      content={"Packages was newly added, beware of hick-ups!"}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="success">new</Badge>
    </Tooltip>
  ),
  [EStoryStatus.STABLE]: (
    <Tooltip
      content={"Packages is considered stable, tho please report problems if found!"}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="brand">stable</Badge>
    </Tooltip>
  ),
  [EStoryStatus.PRIVATE]: (
    <Tooltip
      content={"Packages is private, you may copy from repository if you want."}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="severe">private</Badge>
    </Tooltip>
  ),
  [EStoryStatus.PUBLIC]: (
    <Tooltip
      content={"Packages is public and published."}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="important">public</Badge>
    </Tooltip>
  ),
};

const componentId = "story-status";
export const storyStatusClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
});

export function useStoryStatusStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(storyStatusClassNames.root, styles.root);
  return { styles, rootStyle };
}

type TStoryStatus = {
  status: EStoryStatus[];
};

export function StoryStatus({ status }: TStoryStatus) {
  const { rootStyle } = useStoryStatusStyles();

  const _renderStatuses = (
    status: EStoryStatus
  ): JSX.Element => {
    return (
      STATUS_BADGES[status]
    );
  };

  return (
    <div className={rootStyle}>
      {status.map(_renderStatuses)}
    </div>
  );
}
