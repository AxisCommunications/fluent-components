import {
  Menu,
  MenuGroupHeader,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
} from "@fluentui/react-components";
import { ChevronRightRegular } from "@fluentui/react-icons";

import {
  sideNavigationClassNames as classNames,
  useSideNavigationStyles,
} from "./side-navigation.styles.js";
import {
  SideNavigationItem,
  SideNavigationSubItem,
} from "./side-navigation.types.js";

export type SideNavigationItemRowProps = {
  /** The item to render. */
  item: SideNavigationItem;
  /** Whether the rail is expanded (labels and sub-items are visible). */
  expanded: boolean;
  /** The id of the currently selected item or sub-item. */
  selectedItemId: string | undefined;
  /** Whether this item's group of sub-items is open. */
  open: boolean;
  /** The ids of all open nested groups. */
  openItemIds: string[];
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
  openItemIds,
  onSelect,
  onToggleOpen,
  registerRef,
}: SideNavigationItemRowProps) => {
  const styles = useSideNavigationStyles();

  const hasChildren = Boolean(item.children && item.children.length > 0);
  const isSelected = item.id === selectedItemId;
  const hasSelectedDescendant = hasSelectedChild(item.children, selectedItemId);
  const showChildren = expanded && hasChildren && open;
  // Items with children are just group labels, not pages: the selected
  // appearance (and the sliding marker) only lands on them while their
  // sub-item isn't visibly rendered — collapsed rail or a closed group.
  const showSelectedAppearance =
    isSelected || (hasSelectedDescendant && !showChildren);
  // While collapsed, sub-items are instead revealed in a Fluent `Menu` that
  // opens on hover (or focus) of the parent item.
  const showFlyout = !expanded && hasChildren && !item.disabled;

  const handleClick = () => {
    if (item.disabled) {
      return;
    }

    // A group label only toggles open/closed; only an actual sub-item (or a
    // childless item) can become the selected page.
    if (hasChildren) {
      if (expanded) {
        onToggleOpen(item.id);
      }
      return;
    }

    onSelect(item.id);
  };

  const itemButton = (
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
      aria-expanded={hasChildren && expanded ? open : undefined}
      aria-label={expanded ? undefined : item.label}
      title={expanded ? undefined : item.label}
    >
      <span className={mergeClasses(classNames.itemIcon, styles.itemIcon)}>
        {showSelectedAppearance ? (item.selectedIcon ?? item.icon) : item.icon}
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
      {hasChildren && expanded ? (
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
  );

  return (
    <div className={mergeClasses(classNames.group, styles.group)}>
      {showFlyout ? (
        <Menu openOnHover positioning="after">
          <MenuTrigger disableButtonEnhancement>{itemButton}</MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuGroupHeader>{item.label}</MenuGroupHeader>
              <FlyoutItems
                items={item.children ?? []}
                selectedItemId={selectedItemId}
                onSelect={onSelect}
              />
            </MenuList>
          </MenuPopover>
        </Menu>
      ) : (
        itemButton
      )}

      {showChildren ? (
        <NestedItems
          items={item.children ?? []}
          depth={1}
          selectedItemId={selectedItemId}
          openItemIds={openItemIds}
          onSelect={onSelect}
          onToggleOpen={onToggleOpen}
          registerRef={registerRef}
        />
      ) : null}
    </div>
  );
};
SideNavigationItemRow.displayName = "SideNavigationItemRow";

type NestedItemsProps = {
  items: SideNavigationSubItem[];
  depth: number;
  selectedItemId: string | undefined;
  openItemIds: string[];
  onSelect: (id: string) => void;
  onToggleOpen: (id: string) => void;
  registerRef: (id: string) => (node: HTMLElement | null) => void;
};

function NestedItems({
  items,
  depth,
  selectedItemId,
  openItemIds,
  onSelect,
  onToggleOpen,
  registerRef,
}: NestedItemsProps) {
  const styles = useSideNavigationStyles();

  return items.map((item) => {
    const hasChildren = Boolean(item.children?.length);
    const open = openItemIds.includes(item.id);
    const isSelected = item.id === selectedItemId;
    const isChildSelected = hasSelectedChild(item.children, selectedItemId);

    return (
      <div
        key={item.id}
        className={mergeClasses(classNames.group, styles.group)}
      >
        <button
          type="button"
          ref={registerRef(item.id)}
          className={mergeClasses(
            classNames.subItem,
            styles.subItem,
            depth > 1 && styles.nestedSubItem,
            hasChildren && styles.subItemGroup,
            isSelected && classNames.subItemSelected,
            (isSelected || (isChildSelected && !open)) && styles.subItemSelected
          )}
          onClick={() => {
            if (!item.disabled) {
              hasChildren ? onToggleOpen(item.id) : onSelect(item.id);
            }
          }}
          disabled={item.disabled}
          aria-current={isSelected ? "page" : undefined}
          aria-expanded={hasChildren ? open : undefined}
        >
          <span className={styles.subItemLabel}>{item.label}</span>
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

        {hasChildren && open ? (
          <NestedItems
            items={item.children ?? []}
            depth={depth + 1}
            selectedItemId={selectedItemId}
            openItemIds={openItemIds}
            onSelect={onSelect}
            onToggleOpen={onToggleOpen}
            registerRef={registerRef}
          />
        ) : null}
      </div>
    );
  });
}

function FlyoutItems({
  items,
  selectedItemId,
  onSelect,
}: Pick<NestedItemsProps, "items" | "selectedItemId" | "onSelect">) {
  const styles = useSideNavigationStyles();

  return items.map((item) => {
    const hasChildren = Boolean(item.children?.length);
    const isSelected = item.id === selectedItemId;
    const itemClassName = mergeClasses(
      classNames.flyoutItem,
      styles.flyoutItem,
      isSelected && classNames.flyoutItemSelected,
      isSelected && styles.flyoutItemSelected
    );

    const menuItem = (
      <MenuItem
        key={item.id}
        disabled={item.disabled}
        aria-current={isSelected ? "page" : undefined}
        className={itemClassName}
        onClick={() => {
          if (!item.disabled && !hasChildren) {
            onSelect(item.id);
          }
        }}
      >
        {item.label}
      </MenuItem>
    );

    return hasChildren ? (
      <Menu key={item.id} openOnHover positioning="after">
        <MenuTrigger disableButtonEnhancement>{menuItem}</MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuGroupHeader>{item.label}</MenuGroupHeader>
            <FlyoutItems
              items={item.children ?? []}
              selectedItemId={selectedItemId}
              onSelect={onSelect}
            />
          </MenuList>
        </MenuPopover>
      </Menu>
    ) : (
      menuItem
    );
  });
}

function hasSelectedChild(
  items: SideNavigationSubItem[] | undefined,
  selectedItemId: string | undefined
): boolean {
  return (
    items?.some(
      (item) =>
        item.id === selectedItemId ||
        hasSelectedChild(item.children, selectedItemId)
    ) ?? false
  );
}
