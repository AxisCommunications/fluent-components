import { ColumnDataType, FilterOperator } from "../advanced-data-grid.types";

export const OPERATOR_LABELS: Record<FilterOperator, string> = {
  contains: "contains",
  notContains: "does not contain",
  equals: "equals",
  notEquals: "does not equal",
  startsWith: "starts with",
  endsWith: "ends with",
  isEmpty: "is empty",
  isNotEmpty: "is not empty",
  greaterThan: "greater than",
  greaterThanOrEqual: "greater than or equal",
  lessThan: "less than",
  lessThanOrEqual: "less than or equal",
};

const STRING_OPERATORS: FilterOperator[] = [
  "contains",
  "notContains",
  "equals",
  "notEquals",
  "startsWith",
  "endsWith",
  "isEmpty",
  "isNotEmpty",
];

const NUMBER_OPERATORS: FilterOperator[] = [
  "equals",
  "notEquals",
  "greaterThan",
  "greaterThanOrEqual",
  "lessThan",
  "lessThanOrEqual",
  "isEmpty",
  "isNotEmpty",
];

const SELECT_OPERATORS: FilterOperator[] = [
  "equals",
  "notEquals",
  "isEmpty",
  "isNotEmpty",
];

export function operatorsForType(type: ColumnDataType): FilterOperator[] {
  switch (type) {
    case "number":
    case "date":
      return NUMBER_OPERATORS;
    case "boolean":
    case "select":
      return SELECT_OPERATORS;
    default:
      return STRING_OPERATORS;
  }
}
