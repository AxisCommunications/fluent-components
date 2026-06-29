import { mergeClasses } from "@fluentui/react-components";
import { ChevronRightRegular } from "@fluentui/react-icons";

import {
  sideNavigationClassNames as classNames,
  useSideNavigationStyles,
} from "./side-navigation.styles.js";
import { SideNavigationItem } from "./side-navigation.types.js";

export type SideNavigationItemRowProps = {
  /** The item to render. */
  item: SideNavigationItem;
  /** Whether the rail is expanded (labels and sub-items are visible). */
  expanded: boolean;
  /** The id of the currently selected item or sub-item. */
  selectedItemId: string | undefined;
  /** Whether this item's group of sub-items is open. */
  open: boolean;
  /** Selects an item or sub-item by id. */
  onSelect: (id: string) => void;
  /** Toggles this item's group of sub-items open or closed. */
  onToggleOpen: (id: string) => void;
  /** Registers a DOM node for the sliding selection indicator, keyed by id. */
  registerRef: (id: string) => (node: HTMLElement | null) => void;
};

/**
 * Renders a single top-level navigation item together with its nested
 * sub-items. Used internally by {@link SideNavigation}.
 */
export const SideNavigationItemRow = ({
  item,
  expanded,
  selectedItemId,
  open,
  onSelect,
  onToggleOpen,
  registerRef,
}: SideNavigationItemRowProps) => {
  const styles = useSideNavigationStyles();

  const hasChildren = Boolean(item.children && item.children.length > 0);
  const isSelected = item.id === selectedItemId;
  const hasSelectedDescendant =
    hasChildren &&
    (item.children?.some((child) => child.id === selectedItemId) ?? false);
  // When the rail is collapsed, sub-items are hidden, so a selected descendant
  // is indicated on the parent by the filled icon and selected background
  // (the sliding yellow indicator is intentionally not shown for this state).
  const showSelectedAppearance =
    isSelected || (!expanded && hasSelectedDescendant);
  const showChildren = expanded && hasChildren && open;

  const handleClick = () => {
    if (item.disabled) {
      return;
    }

    if (expanded && hasChildren) {
      onToggleOpen(item.id);
    }

    onSelect(item.id);
  };

  return (
    <div className={mergeClasses(classNames.group, styles.group)}>
      <button
        type="button"
        ref={registerRef(item.id)}
        className={mergeClasses(
          classNames.item,
          styles.item,
          showSelectedAppearance && classNames.itemSelected,
          showSelectedAppearance && styles.itemSelected
        )}
        onClick={handleClick}
        disabled={item.disabled}
        aria-current={isSelected ? "page" : undefined}
        aria-expanded={hasChildren ? open : undefined}
        aria-label={expanded ? undefined : item.label}
        title={expanded ? undefined : item.label}
      >
        <span className={mergeClasses(classNames.itemIcon, styles.itemIcon)}>
          {showSelectedAppearance
            ? (item.selectedIcon ?? item.icon)
            : item.icon}
        </span>
        <span
          className={mergeClasses(
            classNames.itemLabel,
            styles.itemLabel,
            expanded && styles.itemLabelVisible
          )}
        >
          {item.label}
        </span>
        {hasChildren ? (
          <span
            className={mergeClasses(
              classNames.itemChevron,
              styles.itemChevron,
              open && styles.itemChevronOpen
            )}
          >
            <ChevronRightRegular />
          </span>
        ) : null}
      </button>

      {showChildren
        ? item.children?.map((child) => {
            const isChildSelected = child.id === selectedItemId;

            return (
              <button
                key={child.id}
                type="button"
                ref={registerRef(child.id)}
                className={mergeClasses(
                  classNames.subItem,
                  styles.subItem,
                  isChildSelected && classNames.subItemSelected,
                  isChildSelected && styles.subItemSelected
                )}
                onClick={() => {
                  if (!child.disabled) {
                    onSelect(child.id);
                  }
                }}
                disabled={child.disabled}
                aria-current={isChildSelected ? "page" : undefined}
              >
                {child.label}
              </button>
            );
          })
        : null}
    </div>
  );
};
SideNavigationItemRow.displayName = "SideNavigationItemRow";
