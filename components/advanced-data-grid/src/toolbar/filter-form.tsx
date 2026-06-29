import {
  Button,
  Divider,
  Dropdown,
  Field,
  Input,
  Option,
  Text,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { useMemo, useState } from "react";
import {
  AdvancedColumnDef,
  FilterModelItem,
  FilterOperator,
} from "../advanced-data-grid.types";
import { isValuelessOperator } from "../utils/filtering";
import { OPERATOR_LABELS, operatorsForType } from "./filter-operators";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    minWidth: "300px",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalM),
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

export interface FilterFormProps<TItem> {
  columns: AdvancedColumnDef<TItem>[];
  onCreate: (filter: FilterModelItem) => void;
  onCancel: () => void;
}

export function FilterForm<TItem>({
  columns,
  onCreate,
  onCancel,
}: FilterFormProps<TItem>) {
  const styles = useStyles();

  const filterableColumns = useMemo(
    () => columns.filter((column) => column.filterable !== false),
    [columns]
  );
  const columnsById = useMemo(
    () => new Map(columns.map((column) => [column.columnId, column])),
    [columns]
  );

  const [draft, setDraft] = useState<FilterModelItem>(() =>
    createDraft(filterableColumns)
  );

  const column = columnsById.get(draft.columnId);
  const type = column?.type ?? "string";
  const operators = operatorsForType(type);
  const showValueInput = !isValuelessOperator(draft.operator);
  const canSubmit =
    draft.columnId !== "" && (!showValueInput || draft.value.trim() !== "");

  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }
    onCreate({ ...draft, enabled: true });
  };

  return (
    <div className={styles.root}>
      <Text weight="semibold">Create filter</Text>
      <Divider />
      <div className={styles.fields}>
        <Field label="Column">
          <Dropdown
            aria-label="Filter column"
            value={String(column?.header ?? draft.columnId)}
            selectedOptions={[draft.columnId]}
            onOptionSelect={(_, data) => {
              const nextColumn = columnsById.get(data.optionValue ?? "");
              const nextOperators = operatorsForType(
                nextColumn?.type ?? "string"
              );
              setDraft({
                columnId: data.optionValue ?? draft.columnId,
                operator: nextOperators[0],
                value: "",
              });
            }}
          >
            {filterableColumns.map((option) => (
              <Option
                key={option.columnId}
                value={option.columnId}
                text={String(option.header)}
              >
                {option.header}
              </Option>
            ))}
          </Dropdown>
        </Field>
        <Field label="Condition">
          <Dropdown
            aria-label="Filter condition"
            value={OPERATOR_LABELS[draft.operator]}
            selectedOptions={[draft.operator]}
            onOptionSelect={(_, data) =>
              setDraft((current) => ({
                ...current,
                operator:
                  (data.optionValue as FilterOperator) ?? current.operator,
              }))
            }
          >
            {operators.map((operator) => (
              <Option
                key={operator}
                value={operator}
                text={OPERATOR_LABELS[operator]}
              >
                {OPERATOR_LABELS[operator]}
              </Option>
            ))}
          </Dropdown>
        </Field>
        {showValueInput && (
          <Field label="Value">
            {column?.type === "select" && column.selectOptions ? (
              <Dropdown
                aria-label="Filter value"
                value={
                  column.selectOptions.find((o) => o.value === draft.value)
                    ?.label ?? draft.value
                }
                selectedOptions={[draft.value]}
                onOptionSelect={(_, data) =>
                  setDraft((current) => ({
                    ...current,
                    value: data.optionValue ?? "",
                  }))
                }
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
                value={draft.value}
                onChange={(_, data) =>
                  setDraft((current) => ({ ...current, value: data.value }))
                }
              />
            )}
          </Field>
        )}
      </div>
      <Divider />
      <div className={styles.actions}>
        <Button appearance="secondary" size="small" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          appearance="primary"
          size="small"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Add filter
        </Button>
      </div>
    </div>
  );
}

function createDraft<TItem>(
  filterableColumns: AdvancedColumnDef<TItem>[]
): FilterModelItem {
  const first = filterableColumns[0];
  if (!first) {
    return { columnId: "", operator: "contains", value: "" };
  }
  const operators = operatorsForType(first.type ?? "string");
  return { columnId: first.columnId, operator: operators[0], value: "" };
}
