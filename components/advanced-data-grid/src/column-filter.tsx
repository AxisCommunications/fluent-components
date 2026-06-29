import {
  Button,
  Dropdown,
  Field,
  Input,
  Option,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Text,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { FilterFilled, FilterRegular } from "@fluentui/react-icons";
import { useState } from "react";
import {
  AdvancedColumnDef,
  FilterModelItem,
  FilterOperator,
} from "./advanced-data-grid.types";
import { OPERATOR_LABELS, operatorsForType } from "./toolbar/filter-operators";
import { isValuelessOperator } from "./utils/filtering";

const useStyles = makeStyles({
  trigger: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: tokens.colorNeutralForeground3,
  },
  triggerActive: {
    color: tokens.colorBrandForeground1,
  },
  surface: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalM),
    minWidth: "260px",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

export interface ColumnFilterProps<TItem> {
  column: AdvancedColumnDef<TItem>;
  /** The active filter for this column, if any. */
  filter: FilterModelItem | undefined;
  onApply: (operator: FilterOperator, value: string) => void;
  onClear: () => void;
}

export function ColumnFilter<TItem>({
  column,
  filter,
  onApply,
  onClear,
}: ColumnFilterProps<TItem>) {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const type = column.type ?? "string";
  const operators = operatorsForType(type);

  const [operator, setOperator] = useState<FilterOperator>(
    filter?.operator ?? operators[0]
  );
  const [value, setValue] = useState(filter?.value ?? "");

  const isActive = filter?.enabled !== false && filter !== undefined;
  const showValueInput = !isValuelessOperator(operator);
  const canApply = !showValueInput || value.trim() !== "";

  // Reset the draft to the current filter whenever the popover opens.
  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setOperator(filter?.operator ?? operators[0]);
      setValue(filter?.value ?? "");
    }
    setOpen(nextOpen);
  };

  const handleApply = () => {
    if (!canApply) {
      return;
    }
    onApply(operator, showValueInput ? value : "");
    setOpen(false);
  };

  const handleClear = () => {
    onClear();
    setOpen(false);
  };

  return (
    <Popover
      open={open}
      onOpenChange={(_, data) => handleOpenChange(data.open)}
      trapFocus
      positioning="below-end"
    >
      <PopoverTrigger disableButtonEnhancement>
        <span
          role="button"
          tabIndex={0}
          aria-label={`Filter ${String(column.header)}`}
          className={mergeClasses(
            styles.trigger,
            isActive && styles.triggerActive
          )}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleOpenChange(true);
            }
          }}
        >
          {isActive ? <FilterFilled /> : <FilterRegular />}
        </span>
      </PopoverTrigger>
      <PopoverSurface className={styles.surface}>
        <Text weight="semibold">Filter {String(column.header)}</Text>
        <div className={styles.fields}>
          <Field label="Condition">
            <Dropdown
              aria-label="Filter condition"
              value={OPERATOR_LABELS[operator]}
              selectedOptions={[operator]}
              onOptionSelect={(_, data) =>
                setOperator((data.optionValue as FilterOperator) ?? operator)
              }
            >
              {operators.map((option) => (
                <Option
                  key={option}
                  value={option}
                  text={OPERATOR_LABELS[option]}
                >
                  {OPERATOR_LABELS[option]}
                </Option>
              ))}
            </Dropdown>
          </Field>
          {showValueInput && (
            <Field label="Value">
              {type === "select" && column.selectOptions ? (
                <Dropdown
                  aria-label="Filter value"
                  value={
                    column.selectOptions.find((o) => o.value === value)
                      ?.label ?? value
                  }
                  selectedOptions={[value]}
                  onOptionSelect={(_, data) => setValue(data.optionValue ?? "")}
                >
                  {column.selectOptions.map((option) => (
                    <Option
                      key={option.value}
                      value={option.value}
                      text={option.label}
                    >
                      {option.label}
                    </Option>
                  ))}
                </Dropdown>
              ) : (
                <Input
                  aria-label="Filter value"
                  type={type === "number" ? "number" : "text"}
                  value={value}
                  onChange={(_, data) => setValue(data.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleApply();
                    }
                  }}
                />
              )}
            </Field>
          )}
        </div>
        <div className={styles.actions}>
          {isActive && (
            <Button appearance="secondary" size="small" onClick={handleClear}>
              Clear
            </Button>
          )}
          <Button
            appearance="primary"
            size="small"
            disabled={!canApply}
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </PopoverSurface>
    </Popover>
  );
}
