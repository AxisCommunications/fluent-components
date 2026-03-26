import { MenuList } from "@fluentui/react-components";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const isClickNavigating = useRef(false);

  // Scroll-spy: observe section headings and highlight the one in view
  useEffect(() => {
    // Find the scrollable container (the story body with overflowY: auto)
    const scrollContainer = document.querySelector(
      "[data-testid='story-page'] [data-scroll-container]"
    );
    const root =
      scrollContainer instanceof HTMLElement ? scrollContainer : null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickNavigating.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSelected("#" + entry.target.id);
            break;
          }
        }
      },
      {
        root,
        rootMargin: "-10% 0px -80% 0px",
        threshold: 0,
      }
    );

    for (const { anchor } of links) {
      const el = document.getElementById(anchor);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [links]);

  // Sync from hash changes (e.g. direct URL navigation)
  useEffect(() => {
    if (hash) {
      setSelected(hash);
    }
  }, [hash]);

  const handleClick = useCallback(
    (anchor: string) => {
      isClickNavigating.current = true;
      setSelected("#" + anchor);
      navigate(`${pathname}#${anchor}`);
      // Re-enable scroll-spy after scroll settles
      setTimeout(() => {
        isClickNavigating.current = false;
      }, 600);
    },
    [navigate, pathname]
  );

  const renderMenuItems = useMemo(
    () =>
      links.map(({ title, anchor }) => {
        return (
          <StoryNavigationMenuItem
            key={anchor}
            selected={selected === "#" + anchor}
            onClick={() => handleClick(anchor)}
          >
            {title}
          </StoryNavigationMenuItem>
        );
      }),
    [selected, links, handleClick]
  );

  return <MenuList>{renderMenuItems}</MenuList>;
}
