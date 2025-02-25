import { MenuList } from "@fluentui/react-components";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StoryNavigationMenuItem } from "./story-navigation-menu-item";

export type TStoryNavigationLink = {
  title: string;
  anchor: string;
};

type TStoryPageNavigation = {
  links: TStoryNavigationLink[];
};

export function StoryPageNavigation({ links }: TStoryPageNavigation) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("#" + links[0].anchor);

  useEffect(() => {
    if (hash) {
      setSelected(hash);
    }
  }, [hash]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
  const renderMenuItems = useMemo(
    () =>
      links.map(({ title, anchor }) => {
        return (
          <StoryNavigationMenuItem
            key={anchor}
            selected={selected === "#" + anchor}
            onClick={() => navigate(`${pathname}#${anchor}`)}
          >
            {title}
          </StoryNavigationMenuItem>
        );
      }),
    [selected]
  );

  return <MenuList>{renderMenuItems}</MenuList>;
}
