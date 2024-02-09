import { makeStyles, MenuList, mergeClasses } from "@fluentui/react-components";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StoryNavigationMenuItem } from "./story-navigation-menu-item";

const componentId = "story-page-navigation";
export const storyPageNavigationClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {},
  menuItem: {},
});

export function useStoryPageNavigationStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(
    storyPageNavigationClassNames.root,
    styles.root
  );
  return { styles, rootStyle };
}

export type TStoryNavigationLink = {
  title: string;
  anchor: string;
};

type TStoryPageNavigation = {
  links: TStoryNavigationLink[];
};

export function StoryPageNavigation({ links }: TStoryPageNavigation) {
  const { rootStyle } = useStoryPageNavigationStyles();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const renderMenuItems = useMemo(
    () =>
      links.map(({ title, anchor }) => {
        return (
          <StoryNavigationMenuItem
            key={anchor}
            selected={hash === "#" + anchor}
            onClick={() => navigate(`${pathname}#${anchor}`)}
          >
            {title}
          </StoryNavigationMenuItem>
        );
      }),
    [hash]
  );

  return (
    <MenuList className={rootStyle}>
      {renderMenuItems}
    </MenuList>
  );
}
