import {
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  makeStyles,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";
import { Folder20Filled, MoreHorizontalRegular } from "@fluentui/react-icons";
import {
  Fragment,
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface BreadcrumbHeaderProps {
  /** Breadcrumb items displayed before the title. */
  breadcrumbs: Array<{ label: string; onClick?: () => void }>;

  /** Main title shown after the breadcrumb trail. */
  title: string;

  /** Optional leading icon for the title area. */
  icon?: ReactNode;

  /**
   * Maximum number of visible breadcrumb items before overflow is triggered.
   * When the breadcrumb trail exceeds this count, middle items are collapsed
   * into a "More" overflow menu. Defaults to automatic based on available space.
   */
  maxDisplayedItems?: number;

  /** Accessible label for breadcrumb navigation. */
  ariaLabel?: string;

  /** Optional CSS class. */
  className?: string;
}

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    minWidth: 0,
    overflow: "hidden",
  },

  root: {
    display: "flex",
    alignItems: "center",
    columnGap: tokens.spacingHorizontalXXS,
    minHeight: tokens.spacingVerticalXXL,
    whiteSpace: "nowrap",
  },

  breadcrumb: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
  },

  breadcrumbItem: {
    display: "flex",
    alignItems: "center",
  },

  crumbButton: {
    minWidth: "auto",
    paddingLeft: tokens.spacingHorizontalSNudge,
    paddingRight: tokens.spacingHorizontalSNudge,
    paddingTop: tokens.spacingVerticalSNudge,
    paddingBottom: tokens.spacingVerticalSNudge,
    backgroundColor: "transparent",
    borderTopStyle: "none",
    borderRightStyle: "none",
    borderBottomStyle: "none",
    borderLeftStyle: "none",
    boxShadow: "none",
    borderRadius: tokens.borderRadiusSmall,
    color: tokens.colorNeutralForeground2,

    ":hover": {
      backgroundColor: "transparent",
      color: tokens.colorNeutralForeground2Hover,
    },

    ":active": {
      backgroundColor: "transparent",
      color: tokens.colorNeutralForeground2Pressed,
    },

    ":focus-visible": {
      outlineStyle: "none",
      boxShadow: "none",
    },
  },

  divider: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase400,
    paddingLeft: tokens.spacingHorizontalXXS,
    paddingRight: tokens.spacingHorizontalXXS,
  },

  titleGroup: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalSNudge,
    paddingLeft: tokens.spacingHorizontalSNudge,
    paddingBottom: tokens.spacingVerticalXXS,
    minWidth: 0,
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...typographyStyles.subtitle2Stronger,
    flexShrink: 0,
    width: "20px",
    height: "20px",
    color: tokens.colorCompoundBrandForeground1,
  },

  title: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  overflowButton: {
    minWidth: "auto",
    paddingLeft: tokens.spacingHorizontalSNudge,
    paddingRight: tokens.spacingHorizontalSNudge,
    paddingTop: tokens.spacingVerticalSNudge,
    paddingBottom: tokens.spacingVerticalSNudge,
    backgroundColor: "transparent",
    borderTopStyle: "none",
    borderRightStyle: "none",
    borderBottomStyle: "none",
    borderLeftStyle: "none",
    boxShadow: "none",
    borderRadius: tokens.borderRadiusSmall,
    color: tokens.colorNeutralForeground2,

    ":hover": {
      backgroundColor: "transparent",
      color: tokens.colorNeutralForeground2Hover,
    },
  },

  measureContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    pointerEvents: "none",
    height: 0,
    width: "max-content",
    overflow: "visible",
    whiteSpace: "nowrap",
    zIndex: -1,
  },
});

/**
 * BreadcrumbHeader - Inline breadcrumb trail followed by a section title.
 *
 * Responsively collapses middle breadcrumb items into a "..." overflow menu
 * when the container doesn't have enough space. The first and last items
 * always remain visible.
 *
 * Set `maxDisplayedItems` to force a specific collapse point, or leave it
 * undefined for automatic responsive overflow.
 */
export const BreadcrumbHeader = forwardRef<
  HTMLDivElement,
  BreadcrumbHeaderProps
>(
  (
    {
      breadcrumbs,
      title,
      icon,
      maxDisplayedItems,
      ariaLabel = "Breadcrumb",
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const measureRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Array<HTMLElement | null>>([]);
    const [computedMax, setComputedMax] = useState<number | undefined>(
      undefined
    );

    const measure = useCallback(() => {
      // If explicit prop is set, skip auto-detection
      if (maxDisplayedItems !== undefined) return;
      if (!wrapperRef.current || !measureRef.current) return;
      if (breadcrumbs.length <= 2) {
        setComputedMax(undefined);
        return;
      }

      const containerWidth = wrapperRef.current.getBoundingClientRect().width;
      const fullWidth = measureRef.current.getBoundingClientRect().width;

      if (fullWidth <= containerWidth) {
        setComputedMax(undefined);
        return;
      }

      // Measure individual item widths from the hidden measure container
      const itemWidths: number[] = [];
      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        itemWidths.push(el ? el.getBoundingClientRect().width : 0);
      }

      // Measure divider width (they're all the same size)
      const dividerEl = measureRef.current.querySelector(
        "[data-divider-measure]"
      );
      const dividerWidth = dividerEl
        ? dividerEl.getBoundingClientRect().width
        : 16;

      // Measure the overflow button width
      const overflowEl = measureRef.current.querySelector(
        "[data-overflow-marker]"
      );
      const overflowWidth = overflowEl
        ? overflowEl.getBoundingClientRect().width
        : 40;

      // Title group is always shown and must not be clipped
      const titleGroup = wrapperRef.current.querySelector("[data-title-group]");
      const titleWidth = titleGroup
        ? titleGroup.getBoundingClientRect().width
        : 0;

      // Fixed cost: first item + divider + overflow button + divider + last item + gap + title
      const firstWidth = itemWidths[0] ?? 0;
      const lastWidth = itemWidths[itemWidths.length - 1] ?? 0;
      const gap = 4; // columnGap between breadcrumb and title group (~spacingHorizontalXXS)

      // Cost when showing first + overflow + last + title
      const fixedWidthWithLast =
        firstWidth +
        dividerWidth +
        overflowWidth +
        dividerWidth +
        lastWidth +
        gap +
        titleWidth;

      // Check if even first + overflow + last + title fits
      if (fixedWidthWithLast > containerWidth) {
        // Can't fit the last item — collapse to just first + overflow
        setComputedMax(1);
        return;
      }

      let fits = 2; // first + last shown
      let usedWidth = fixedWidthWithLast;
      // Try adding middle items from the end (closest to last) working backwards
      // Each middle item adds its own width plus a divider
      for (let i = itemWidths.length - 2; i >= 1; i--) {
        if (usedWidth + itemWidths[i] + dividerWidth <= containerWidth) {
          usedWidth += itemWidths[i] + dividerWidth;
          fits++;
        } else {
          break;
        }
      }

      setComputedMax(fits);
    }, [breadcrumbs, maxDisplayedItems]);

    useEffect(() => {
      measure();

      const el = wrapperRef.current;
      if (!el) return;

      const observer = new ResizeObserver(() => measure());
      observer.observe(el);
      return () => observer.disconnect();
    }, [measure]);

    // Resolve effective max: explicit prop takes precedence over auto-computed
    const effectiveMax = maxDisplayedItems ?? computedMax;

    const shouldOverflow =
      effectiveMax !== undefined &&
      breadcrumbs.length > effectiveMax &&
      breadcrumbs.length > 1;

    const overflowCount = shouldOverflow
      ? breadcrumbs.length - effectiveMax
      : 0;

    // When effectiveMax is 1, only the first item is visible; everything else overflows
    const showLastItem = shouldOverflow ? effectiveMax >= 2 : true;

    const firstItem = breadcrumbs[0];
    const lastItem = breadcrumbs[breadcrumbs.length - 1];
    const overflowItems = shouldOverflow
      ? showLastItem
        ? breadcrumbs.slice(1, 1 + overflowCount)
        : breadcrumbs.slice(1) // all items after first go into overflow
      : [];
    const middleItems = shouldOverflow
      ? showLastItem
        ? breadcrumbs.slice(1 + overflowCount, breadcrumbs.length - 1)
        : []
      : breadcrumbs.slice(1, breadcrumbs.length - 1);

    return (
      <div
        ref={(node) => {
          wrapperRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={[styles.wrapper, className].filter(Boolean).join(" ")}
        {...rest}
      >
        {/* Hidden measurement container — renders all items to measure their widths */}
        <div
          ref={measureRef}
          className={styles.measureContainer}
          aria-hidden="true"
        >
          <div className={styles.root}>
            <Breadcrumb className={styles.breadcrumb}>
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={`measure-${crumb.label}-${index}`}>
                  <BreadcrumbItem
                    className={styles.breadcrumbItem}
                    ref={(el: HTMLElement | null) => {
                      itemRefs.current[index] = el;
                    }}
                  >
                    <BreadcrumbButton>{crumb.label}</BreadcrumbButton>
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbDivider
                      className={styles.divider}
                      {...(index === 0 ? { "data-divider-measure": "" } : {})}
                    >
                      /
                    </BreadcrumbDivider>
                  )}
                </Fragment>
              ))}
            </Breadcrumb>
            <BreadcrumbItem
              className={styles.breadcrumbItem}
              data-overflow-marker=""
            >
              <BreadcrumbButton className={styles.overflowButton}>
                <MoreHorizontalRegular />
              </BreadcrumbButton>
            </BreadcrumbItem>
            <BreadcrumbDivider className={styles.divider}>/</BreadcrumbDivider>
          </div>
        </div>

        {/* Visible breadcrumb */}
        <div className={styles.root}>
          <nav aria-label={ariaLabel}>
            <Breadcrumb className={styles.breadcrumb}>
              {/* First item — always visible */}
              {breadcrumbs.length > 0 && (
                <Fragment>
                  <BreadcrumbItem className={styles.breadcrumbItem}>
                    <BreadcrumbButton onClick={firstItem.onClick}>
                      {firstItem.label}
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                  {(breadcrumbs.length > 1 || shouldOverflow) && (
                    <BreadcrumbDivider className={styles.divider}>
                      /
                    </BreadcrumbDivider>
                  )}
                </Fragment>
              )}

              {/* Overflow menu for collapsed middle items */}
              {shouldOverflow && (
                <Fragment>
                  <BreadcrumbItem className={styles.breadcrumbItem}>
                    <Menu>
                      <MenuTrigger disableButtonEnhancement>
                        <BreadcrumbButton className={styles.overflowButton}>
                          <MoreHorizontalRegular />
                        </BreadcrumbButton>
                      </MenuTrigger>
                      <MenuPopover>
                        <MenuList>
                          {overflowItems.map((crumb, index) => (
                            <MenuItem
                              key={`overflow-${crumb.label}-${index}`}
                              onClick={crumb.onClick}
                            >
                              {crumb.label}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </MenuPopover>
                    </Menu>
                  </BreadcrumbItem>
                  {(middleItems.length > 0 || showLastItem) && (
                    <BreadcrumbDivider className={styles.divider}>
                      /
                    </BreadcrumbDivider>
                  )}
                </Fragment>
              )}

              {/* Remaining visible middle items */}
              {middleItems.map((crumb, index) => (
                <Fragment key={`${crumb.label}-${index}`}>
                  <BreadcrumbItem className={styles.breadcrumbItem}>
                    <BreadcrumbButton onClick={crumb.onClick}>
                      {crumb.label}
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider className={styles.divider}>
                    /
                  </BreadcrumbDivider>
                </Fragment>
              ))}

              {/* Last item — visible when there's room */}
              {breadcrumbs.length > 1 && showLastItem && (
                <>
                  <BreadcrumbItem className={styles.breadcrumbItem}>
                    <BreadcrumbButton onClick={lastItem.onClick}>
                      {lastItem.label}
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider className={styles.divider}>
                    /
                  </BreadcrumbDivider>
                </>
              )}
            </Breadcrumb>
          </nav>

          <div className={styles.titleGroup} data-title-group="">
            <span className={styles.titleIcon} aria-hidden="true">
              {icon ?? <Folder20Filled />}
            </span>
            <Text className={styles.title}>{title}</Text>
          </div>
        </div>
      </div>
    );
  }
);

BreadcrumbHeader.displayName = "BreadcrumbHeader";
