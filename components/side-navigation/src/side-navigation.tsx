import { Tooltip, mergeClasses } from "@fluentui/react-components";
import {
  PanelLeftContractRegular,
  PanelLeftExpandRegular,
} from "@fluentui/react-icons";
import React from "react";

import { SideNavigationItemRow } from "./side-navigation-item.js";
import {
  DEFAULT_EXPANDED_WIDTH,
  INDICATOR_HEIGHT,
  RAIL_WIDTH,
  sideNavigationClassNames as classNames,
  useSideNavigationStyles,
} from "./side-navigation.styles.js";
import { SideNavigationProps } from "./side-navigation.types.js";
import { useControllableState } from "./use-controllable-state.js";

/**
 * A vertical navigation rail for Fluent UI v9 applications. Renders a compact
 * icon rail that can expand to reveal labels and nested sub-items, with an
 * animated indicator tracking the selected item.
 *
 * Selection and the expanded state can each be used in a controlled or
 * uncontrolled way. Sub-item groups are managed internally and seeded with
 * {@link SideNavigationProps.defaultOpenItemIds}.
 */
export const SideNavigation = React.forwardRef<
  HTMLElement,
  SideNavigationProps
>((props, ref) => {
  const {
    className,
    style,
    items,
    footerItems,
    selectedItemId,
    defaultSelectedItemId,
    onSelect,
    expanded: expandedProp,
    defaultExpanded = false,
    onExpandedChange,
    collapsible = true,
    defaultOpenItemIds,
    expandedWidth = DEFAULT_EXPANDED_WIDTH,
    expandLabel = "Expand navigation",
    collapseLabel = "Collapse navigation",
    ...rest
  } = props;

  const styles = useSideNavigationStyles();

  const rootRef = React.useRef<HTMLElement | null>(null);
  const itemRefs = React.useRef<Map<string, HTMLElement>>(new Map());
  const [indicatorOffset, setIndicatorOffset] = React.useState<number | null>(
    null
  );

  const [selectedItem, setSelectedItem] = useControllableState<
    string | undefined
  >({
    controlledValue: selectedItemId,
    defaultValue: defaultSelectedItemId,
    onChange: onSelect as ((value: string | undefined) => void) | undefined,
  });

  const [expanded, setExpanded] = useControllableState<boolean>({
    controlledValue: expandedProp,
    defaultValue: defaultExpanded,
    onChange: onExpandedChange,
  });

  const [openItemIds, setOpenItemIds] = React.useState<string[]>(
    () => defaultOpenItemIds ?? []
  );

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

  const registerRef = React.useCallback(
    (id: string) => (node: HTMLElement | null) => {
      if (node) {
        itemRefs.current.set(id, node);
      } else {
        itemRefs.current.delete(id);
      }
    },
    []
  );

  const updateIndicator = React.useCallback(() => {
    const rootElement = rootRef.current;
    const selectedElement = selectedItem
      ? itemRefs.current.get(selectedItem)
      : undefined;

    if (!rootElement || !selectedElement) {
      setIndicatorOffset(null);
      return;
    }

    const rootRect = rootElement.getBoundingClientRect();
    const selectedRect = selectedElement.getBoundingClientRect();
    const offset =
      selectedRect.top -
      rootRect.top +
      (selectedRect.height - INDICATOR_HEIGHT) / 2;

    setIndicatorOffset(offset);
  }, [selectedItem]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-measure the indicator after layout changes (expand, open groups, items)
  React.useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, expanded, openItemIds, items, footerItems]);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  const handleToggleExpanded = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  const handleToggleOpen = React.useCallback((id: string) => {
    setOpenItemIds((current) =>
      current.includes(id)
        ? current.filter((openId) => openId !== id)
        : [...current, id]
    );
  }, []);

  const toggleLabel = expanded ? collapseLabel : expandLabel;

  return (
    <nav
      ref={setRootRef}
      className={mergeClasses(
        classNames.root,
        styles.root,
        expanded && classNames.expanded,
        className
      )}
      style={{ ...style, width: expanded ? expandedWidth : RAIL_WIDTH }}
      {...rest}
    >
      {indicatorOffset !== null ? (
        <span
          className={mergeClasses(
            classNames.selectedIndicator,
            styles.selectedIndicator
          )}
          style={{ transform: `translateY(${indicatorOffset}px)` }}
        />
      ) : null}

      {collapsible ? (
        <Tooltip content={toggleLabel} relationship="label" withArrow>
          <button
            type="button"
            className={mergeClasses(classNames.toggle, styles.toggle)}
            onClick={handleToggleExpanded}
            aria-label={toggleLabel}
            aria-expanded={expanded}
          >
            {expanded ? (
              <PanelLeftContractRegular />
            ) : (
              <PanelLeftExpandRegular />
            )}
          </button>
        </Tooltip>
      ) : null}

      <div className={mergeClasses(classNames.list, styles.list)}>
        {items.map((item) => (
          <SideNavigationItemRow
            key={item.id}
            item={item}
            expanded={expanded}
            selectedItemId={selectedItem}
            open={openItemIds.includes(item.id)}
            onSelect={setSelectedItem}
            onToggleOpen={handleToggleOpen}
            registerRef={registerRef}
          />
        ))}
      </div>

      {footerItems && footerItems.length > 0 ? (
        <div className={mergeClasses(classNames.footer, styles.footer)}>
          <div className={mergeClasses(classNames.divider, styles.divider)} />
          {footerItems.map((item) => (
            <SideNavigationItemRow
              key={item.id}
              item={item}
              expanded={expanded}
              selectedItemId={selectedItem}
              open={openItemIds.includes(item.id)}
              onSelect={setSelectedItem}
              onToggleOpen={handleToggleOpen}
              registerRef={registerRef}
            />
          ))}
        </div>
      ) : null}
    </nav>
  );
});
SideNavigation.displayName = "SideNavigation";
