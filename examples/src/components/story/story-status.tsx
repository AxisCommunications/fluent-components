import {
  Badge,
  Tooltip,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ReactElement } from "react";

/**
 * statuses are sorted in same order the listed in enum
 */
export enum EStoryStatus {
  WIP,
  NEW,
  PRIVATE,
  PUBLIC,
  STABLE,
  UNSTABLE,
}

const STATUS_BADGES: Record<EStoryStatus, ReactElement> = {
  [EStoryStatus.WIP]: (
    <Tooltip
      key={EStoryStatus.PUBLIC}
      content={
        "Feature(s) is not yet fully completed. Work is still in progress."
      }
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="warning">
        wip
      </Badge>
    </Tooltip>
  ),
  [EStoryStatus.NEW]: (
    <Tooltip
      key={EStoryStatus.NEW}
      content={"Feature(s) was newly added, beware of hick-ups!"}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="success">
        new
      </Badge>
    </Tooltip>
  ),
  [EStoryStatus.STABLE]: (
    <Tooltip
      key={EStoryStatus.STABLE}
      content={
        "Feature(s) is considered stable, tho please report problems if found!"
      }
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="brand">
        stable
      </Badge>
    </Tooltip>
  ),
  [EStoryStatus.UNSTABLE]: (
    <Tooltip
      key={EStoryStatus.UNSTABLE}
      content={"Feature(s) is considered unstable, experimental."}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="warning">
        unstable
      </Badge>
    </Tooltip>
  ),
  [EStoryStatus.PRIVATE]: (
    <Tooltip
      key={EStoryStatus.PRIVATE}
      content={
        "Packages is private, not yet published, you may copy from repository if you want."
      }
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="severe">
        private
      </Badge>
    </Tooltip>
  ),
  [EStoryStatus.PUBLIC]: (
    <Tooltip
      key={EStoryStatus.PUBLIC}
      content={"Packages is public and published."}
      withArrow
      relationship={"label"}
    >
      <Badge appearance="filled" color="important">
        public
      </Badge>
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
  const sortedStatuses = status.sort((a, b) => a - b);

  const _renderStatuses = (status: EStoryStatus): ReactElement => {
    return STATUS_BADGES[status];
  };

  return <div className={rootStyle}>{sortedStatuses.map(_renderStatuses)}</div>;
}
