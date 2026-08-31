import { Tooltip, mergeClasses } from "@fluentui/react-components";
import { ChevronLeftRegular, ChevronRightRegular } from "@fluentui/react-icons";
import React from "react";

import { SideNavigationItemRow } from "./side-navigation-item.js";
import {
  DEFAULT_EXPANDED_WIDTH,
  INDICATOR_INSET,
  RAIL_WIDTH,
  sideNavigationClassNames as classNames,
  useSideNavigationStyles,
} from "./side-navigation.styles.js";
import {
  SideNavigationItem,
  SideNavigationProps,
  SideNavigationSubItem,
} from "./side-navigation.types.js";
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
    togglePosition = "top",
    defaultOpenItemIds,
    expandedWidth = DEFAULT_EXPANDED_WIDTH,
    expandLabel = "Expand navigation",
    collapseLabel = "Collapse navigation",
    ...rest
  } = props;

  const styles = useSideNavigationStyles();

  const rootRef = React.useRef<HTMLElement | null>(null);
  const itemRefs = React.useRef<Map<string, HTMLElement>>(new Map());
  const [indicator, setIndicator] = React.useState<{
    offset: number;
    height: number;
  } | null>(null);

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
  // Remembers a collapsed-mode flyout selection's ancestors so every level is
  // open once the rail expands again.
  const pendingOpenParentIdsRef = React.useRef<string[] | null>(null);

  const findParentId = React.useCallback(
    (childId: string): string | undefined =>
      findParentIdInItems([...items, ...(footerItems ?? [])], childId),
    [items, footerItems]
  );

  const handleSelect = React.useCallback(
    (id: string) => {
      if (!expanded) {
        pendingOpenParentIdsRef.current =
          findParentIdsInItems([...items, ...(footerItems ?? [])], id) ?? null;
      }
      setSelectedItem(id);
    },
    [expanded, footerItems, items, setSelectedItem]
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
    // Sub-items only render (and register a ref) while their group is open
    // and the rail is expanded; when they're hidden, the marker falls back to
    // the parent category so it always points at something visible.
    let targetId = selectedItem;
    while (targetId && !itemRefs.current.has(targetId)) {
      targetId = findParentId(targetId);
    }
    const selectedElement = targetId
      ? itemRefs.current.get(targetId)
      : undefined;

    if (!rootElement || !selectedElement) {
      setIndicator(null);
      return;
    }

    const rootRect = rootElement.getBoundingClientRect();
    const selectedRect = selectedElement.getBoundingClientRect();

    setIndicator({
      offset: selectedRect.top - rootRect.top + INDICATOR_INSET,
      height: Math.max(selectedRect.height - INDICATOR_INSET * 2, 0),
    });
  }, [selectedItem, findParentId]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-measure the indicator after layout changes (expand, open groups, items)
  React.useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, expanded, openItemIds, items, footerItems]);

  React.useLayoutEffect(() => {
    if (expanded && pendingOpenParentIdsRef.current) {
      setOpenItemIds(pendingOpenParentIdsRef.current);
      pendingOpenParentIdsRef.current = null;
    }
  }, [expanded]);

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

  const toggleButton = collapsible ? (
    <Tooltip content={toggleLabel} relationship="label" withArrow>
      <button
        type="button"
        className={mergeClasses(classNames.toggle, styles.toggle)}
        onClick={handleToggleExpanded}
        aria-label={toggleLabel}
        aria-expanded={expanded}
      >
        {expanded ? <ChevronLeftRegular /> : <ChevronRightRegular />}
      </button>
    </Tooltip>
  ) : null;
  const hasBottomToggle = collapsible && togglePosition === "bottom";

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
      {indicator !== null ? (
        <span
          className={mergeClasses(
            classNames.selectedIndicator,
            styles.selectedIndicator
          )}
          style={{
            height: indicator.height,
            transform: `translateY(${indicator.offset}px)`,
          }}
        />
      ) : null}

      {togglePosition === "top" ? toggleButton : null}

      <div className={mergeClasses(classNames.list, styles.list)}>
        {items.map((item) => (
          <SideNavigationItemRow
            key={item.id}
            item={item}
            expanded={expanded}
            selectedItemId={selectedItem}
            open={openItemIds.includes(item.id)}
            openItemIds={openItemIds}
            onSelect={handleSelect}
            onToggleOpen={handleToggleOpen}
            registerRef={registerRef}
          />
        ))}
      </div>

      {(footerItems && footerItems.length > 0) || hasBottomToggle ? (
        <div className={mergeClasses(classNames.footer, styles.footer)}>
          {footerItems && footerItems.length > 0 ? (
            <>
              <div
                className={mergeClasses(classNames.divider, styles.divider)}
              />
              {footerItems.map((item) => (
                <SideNavigationItemRow
                  key={item.id}
                  item={item}
                  expanded={expanded}
                  selectedItemId={selectedItem}
                  open={openItemIds.includes(item.id)}
                  openItemIds={openItemIds}
                  onSelect={handleSelect}
                  onToggleOpen={handleToggleOpen}
                  registerRef={registerRef}
                />
              ))}
            </>
          ) : null}
          {hasBottomToggle ? toggleButton : null}
        </div>
      ) : null}
    </nav>
  );
});
SideNavigation.displayName = "SideNavigation";

function findParentIdInItems(
  items: (SideNavigationItem | SideNavigationSubItem)[],
  childId: string
): string | undefined {
  for (const item of items) {
    for (const child of item.children ?? []) {
      if (child.id === childId) {
        return item.id;
      }

      const parentId = findParentIdInItems([child], childId);
      if (parentId) {
        return parentId;
      }
    }
  }
}

function findParentIdsInItems(
  items: (SideNavigationItem | SideNavigationSubItem)[],
  childId: string,
  ancestorIds: string[] = []
): string[] | undefined {
  for (const item of items) {
    if (item.id === childId) {
      return ancestorIds;
    }

    const parentIds = findParentIdsInItems(item.children ?? [], childId, [
      ...ancestorIds,
      item.id,
    ]);
    if (parentIds) {
      return parentIds;
    }
  }
}
