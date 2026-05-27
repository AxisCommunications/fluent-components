import { mergeClasses } from "@fluentui/react-components";
import {
  AppsFilled,
  AppsRegular,
  BuildingFilled,
  BuildingRegular,
  HomeFilled,
  HomeRegular,
  LayerFilled,
  LayerRegular,
  MoreHorizontalFilled,
  MoreHorizontalRegular,
  PeopleFilled,
  PeopleRegular,
} from "@fluentui/react-icons";
import React from "react";

import { useSideNavigationStyles } from "./side-navigation.styles.js";
import {
  SideNavigationItem,
  SideNavigationProps,
} from "./side-navigation.types.js";

const defaultItems: SideNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeRegular fontSize={24} />,
    selectedIcon: <HomeFilled fontSize={24} />,
  },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: <AppsRegular fontSize={24} />,
    selectedIcon: <AppsFilled fontSize={24} />,
  },
  {
    id: "onelake",
    label: "OneLake",
    icon: <LayerRegular fontSize={24} />,
    selectedIcon: <LayerFilled fontSize={24} />,
  },
  {
    id: "realtime",
    label: "Real-Time",
    icon: <PeopleRegular fontSize={24} />,
    selectedIcon: <PeopleFilled fontSize={24} />,
  },
  {
    id: "monitor",
    label: "Monitor",
    icon: <BuildingRegular fontSize={24} />,
    selectedIcon: <BuildingFilled fontSize={24} />,
  },
  {
    id: "workloads",
    label: "Workloads",
    icon: <AppsRegular fontSize={24} />,
    selectedIcon: <AppsFilled fontSize={24} />,
  },
  {
    id: "workspace",
    label: "Contoso Workspace",
    icon: <BuildingRegular fontSize={24} />,
    selectedIcon: <BuildingFilled fontSize={24} />,
  },
  {
    id: "more",
    label: "More",
    icon: <MoreHorizontalRegular fontSize={24} />,
    selectedIcon: <MoreHorizontalFilled fontSize={24} />,
  },
];

const defaultBottomItem: SideNavigationItem = {
  id: "site",
  label: "Site",
  icon: <AppsRegular fontSize={24} />,
};

export const SideNavigation = React.forwardRef<
  HTMLElement,
  SideNavigationProps
>((props, ref) => {
  const {
    className,
    items = defaultItems,
    selectedItemId = defaultItems[0]?.id,
    onSelect,
    bottomItem = defaultBottomItem,
    mode = "rail",
    ...rest
  } = props;
  const { styles, rootStyle } = useSideNavigationStyles();
  const isHidden = mode === "hidden";
  const rootRef = React.useRef<HTMLElement | null>(null);
  const itemRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [selectedIndicatorOffset, setSelectedIndicatorOffset] = React.useState<
    number | null
  >(null);

  const hubItems = items.slice(0, 6);
  const workspaceItem = items[6];
  const overflowItem = items[7];
  const isWorkspaceSelected = workspaceItem?.id === selectedItemId;
  const isOverflowSelected = overflowItem?.id === selectedItemId;

  const setRootRef = React.useCallback(
    (node: HTMLElement | null) => {
      rootRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  const setItemRef = React.useCallback(
    (itemId: string) => (node: HTMLDivElement | null) => {
      itemRefs.current[itemId] = node;
    },
    []
  );

  const updateSelectedIndicatorOffset = React.useCallback(() => {
    if (!selectedItemId) {
      setSelectedIndicatorOffset(null);
      return;
    }

    const rootElement = rootRef.current;
    const selectedItemElement = itemRefs.current[selectedItemId];

    if (!rootElement || !selectedItemElement) {
      setSelectedIndicatorOffset(null);
      return;
    }

    const rootRect = rootElement.getBoundingClientRect();
    const selectedItemRect = selectedItemElement.getBoundingClientRect();
    const indicatorHeight = 16;
    const centeredOffset =
      selectedItemRect.top -
      rootRect.top +
      (selectedItemRect.height - indicatorHeight) / 2;

    setSelectedIndicatorOffset(centeredOffset);
  }, [selectedItemId]);

  React.useLayoutEffect(() => {
    updateSelectedIndicatorOffset();
  }, [updateSelectedIndicatorOffset]);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("resize", updateSelectedIndicatorOffset);

    return () => {
      window.removeEventListener("resize", updateSelectedIndicatorOffset);
    };
  }, [updateSelectedIndicatorOffset]);

  const handleSelect = React.useCallback(
    (itemId: string) => {
      onSelect?.(itemId);
    },
    [onSelect]
  );

  return (
    <aside
      ref={setRootRef}
      className={mergeClasses(
        rootStyle,
        isHidden ? styles.rootHidden : undefined,
        className
      )}
      {...rest}
    >
      {selectedIndicatorOffset !== null ? (
        <span
          className={styles.selectedIndicator}
          style={{ transform: `translateY(${selectedIndicatorOffset}px)` }}
        />
      ) : null}

      <div className={styles.topGroup}>
        {hubItems.map((item) => {
          const isSelected = item.id === selectedItemId;

          return (
            <div
              key={item.id}
              className={styles.itemContainer}
              ref={setItemRef(item.id)}
            >
              <button
                type="button"
                className={mergeClasses(
                  styles.item,
                  isSelected ? styles.selectedItem : undefined
                )}
                onClick={() => {
                  handleSelect(item.id);
                }}
                aria-current={isSelected ? "page" : undefined}
                aria-label={item.label}
                title={item.label}
              >
                {isSelected ? (item.selectedIcon ?? item.icon) : item.icon}
                <span className={styles.itemLabel}>{item.label}</span>
              </button>
            </div>
          );
        })}
      </div>

      {workspaceItem ? (
        <div className={styles.workspaceSection}>
          <div className={styles.divider} />
          <div
            className={styles.itemContainer}
            ref={setItemRef(workspaceItem.id)}
          >
            <button
              type="button"
              className={mergeClasses(
                styles.item,
                isWorkspaceSelected ? styles.selectedItem : undefined
              )}
              onClick={() => {
                handleSelect(workspaceItem.id);
              }}
              aria-current={isWorkspaceSelected ? "page" : undefined}
              aria-label={workspaceItem.label}
              title={workspaceItem.label}
            >
              {isWorkspaceSelected
                ? (workspaceItem.selectedIcon ?? workspaceItem.icon)
                : workspaceItem.icon}
              <span className={styles.itemLabel}>{workspaceItem.label}</span>
            </button>
          </div>
        </div>
      ) : null}

      {overflowItem ? (
        <div className={styles.overflowSection}>
          <div
            className={styles.itemContainer}
            ref={setItemRef(overflowItem.id)}
          >
            <button
              type="button"
              className={mergeClasses(
                styles.item,
                isOverflowSelected ? styles.selectedItem : undefined
              )}
              onClick={() => {
                handleSelect(overflowItem.id);
              }}
              aria-current={isOverflowSelected ? "page" : undefined}
              aria-label={overflowItem.label}
              title={overflowItem.label}
            >
              {isOverflowSelected
                ? (overflowItem.selectedIcon ?? overflowItem.icon)
                : overflowItem.icon}
              <span className={styles.itemLabel}>{overflowItem.label}</span>
            </button>
          </div>
        </div>
      ) : null}

      <div className={styles.bottomSection}>
        <button
          type="button"
          className={styles.bottomItem}
          onClick={() => {
            handleSelect(bottomItem.id);
          }}
          aria-label={bottomItem.label}
          title={bottomItem.label}
        >
          {bottomItem.icon}
          <span className={styles.itemLabel}>{bottomItem.label}</span>
        </button>
      </div>
    </aside>
  );
});
