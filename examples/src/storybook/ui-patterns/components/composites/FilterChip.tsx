import {
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  TagGroup,
  type TagGroupProps,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { type ReactElement, type ReactNode, forwardRef } from "react";

/** Visual size of a filter chip, mirroring Fluent `InteractionTag` sizes. */
export type FilterChipSize = "extra-small" | "small" | "medium";

/** Visual appearance of a filter chip, mirroring Fluent `InteractionTag`. */
export type FilterChipAppearance = "outline" | "brand" | "filled";

export interface FilterChipProps {
  /** Stable value identifying the chip within its group. */
  value: string;

  /** Visible chip label. */
  children: ReactNode;

  /**
   * Whether the underlying filter is currently applied. Controls the
   * highlighted ("selected") visual state without removing the chip.
   */
  selected?: boolean;

  /** Disable both the toggle and dismiss interactions. */
  disabled?: boolean;

  /** Chip size. Inherited from the parent `FilterChipGroup` when omitted. */
  size?: FilterChipSize;

  /** Chip appearance. Defaults to `outline`. */
  appearance?: FilterChipAppearance;

  /** Optional icon/media rendered before the label. */
  icon?: ReactElement;

  /**
   * Fired when the chip body is activated to toggle whether the filter is
   * applied. Dismissal is handled by the parent `FilterChipGroup`.
   */
  onToggle?: (value: string) => void;

  /** Accessible label for the dismiss (X) button. */
  dismissLabel?: string;

  /** Optional CSS class applied to the underlying `InteractionTag`. */
  className?: string;
}

/**
 * FilterChip - a toggleable, dismissible filter chip.
 *
 * Built on Fluent `InteractionTag`, it adds the two-state filter semantics used
 * by faceted-search UIs: clicking the chip body toggles whether the filter is
 * applied (via `onToggle`), while the trailing X removes the chip entirely (via
 * the parent `FilterChipGroup`'s `onDismiss`). It must be rendered inside a
 * `FilterChipGroup`.
 *
 * **Fluent Guidelines Applied:**
 * - Composed only from `@fluentui/react-components` primitives
 * - Token-driven styling, no raw values
 * - Accessible: dismiss button exposes an explicit `aria-label`
 *
 * @example
 * <FilterChipGroup onDismiss={(value) => remove(value)}>
 *   <FilterChip
 *     value="status:active"
 *     selected={isActive}
 *     onToggle={toggle}
 *     dismissLabel="Remove Status: Active"
 *   >
 *     Status: Active
 *   </FilterChip>
 * </FilterChipGroup>
 */
export const FilterChip = forwardRef<HTMLDivElement, FilterChipProps>(
  (
    {
      value,
      children,
      selected = false,
      disabled = false,
      size,
      appearance = "outline",
      icon,
      onToggle,
      dismissLabel,
      className,
    },
    ref
  ) => {
    return (
      <InteractionTag
        ref={ref}
        value={value}
        size={size}
        appearance={appearance}
        selected={selected}
        disabled={disabled}
        className={className}
      >
        <InteractionTagPrimary
          hasSecondaryAction
          icon={icon}
          onClick={onToggle ? () => onToggle(value) : undefined}
        >
          {children}
        </InteractionTagPrimary>
        <InteractionTagSecondary
          aria-label={
            dismissLabel ??
            (typeof children === "string" ? `Remove ${children}` : "Remove")
          }
        />
      </InteractionTag>
    );
  }
);

FilterChip.displayName = "FilterChip";

export interface FilterChipGroupProps {
  /** `FilterChip` children. */
  children: ReactNode;

  /**
   * Fired when a chip's dismiss button is activated, with the dismissed chip's
   * `value`.
   */
  onDismiss?: (value: string) => void;

  /** Size applied to all chips that do not set their own `size`. */
  size?: FilterChipSize;

  /** Accessible label for the group. */
  "aria-label"?: string;

  /** Optional CSS class applied to the root. */
  className?: string;
}

const useGroupStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalXS,
  },
});

/**
 * FilterChipGroup - a wrapping container for `FilterChip` items.
 *
 * Wraps Fluent `TagGroup` to centralize dismissal handling: it maps the Fluent
 * dismiss event to a simple `onDismiss(value)` callback and lays the chips out
 * in a wrapping, token-spaced row.
 *
 * @example
 * <FilterChipGroup aria-label="Active filters" onDismiss={remove}>
 *   {chips.map((chip) => (
 *     <FilterChip key={chip.value} value={chip.value} selected={chip.selected}>
 *       {chip.label}
 *     </FilterChip>
 *   ))}
 * </FilterChipGroup>
 */
export const FilterChipGroup = forwardRef<HTMLDivElement, FilterChipGroupProps>(
  ({ children, onDismiss, size, className, ...rest }, ref) => {
    const styles = useGroupStyles();

    const handleDismiss: TagGroupProps["onDismiss"] = (_event, data) => {
      onDismiss?.(data.value);
    };

    return (
      <TagGroup
        ref={ref}
        size={size}
        onDismiss={handleDismiss}
        className={mergeClasses(styles.root, className)}
        aria-label={rest["aria-label"]}
      >
        {children}
      </TagGroup>
    );
  }
);

FilterChipGroup.displayName = "FilterChipGroup";
