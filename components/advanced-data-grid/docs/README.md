# @axiscommunications/fluent-advanced-data-grid

An advanced data grid for Fluent UI v9 that combines a filter toolbar with a
[`DataGrid`](https://react.fluentui.dev/?path=/docs/components-datagrid--default).
It brings an advanced feature set to the grid using Fluent UI primitives.

> This package is currently **private** and not published.

## Features

- Global quick-filter search
- Per-column filter panel with type-aware operators
- Column sorting
- Pagination with configurable page sizes
- Row selection (single / multiselect)
- Column visibility toggle
- Density toggle (comfortable / medium / compact)
- CSV export (formula-injection safe)
- Column pinning (left / right) and reordering
- Row grouping with aggregation (sum / avg / min / max / count)

## Usage

```tsx
import {
  AdvancedDataGrid,
  AdvancedColumnDef,
} from "@axiscommunications/fluent-advanced-data-grid";

type Person = { id: string; name: string; age: number; role: string };

const items: Person[] = [
  { id: "1", name: "Robin", age: 21, role: "Sidekick" },
  { id: "2", name: "Batman", age: 35, role: "Hero" },
];

const columns: AdvancedColumnDef<Person>[] = [
  { columnId: "name", header: "Name", getValue: (p) => p.name },
  {
    columnId: "age",
    header: "Age",
    type: "number",
    aggregation: "avg",
    getValue: (p) => p.age,
  },
  {
    columnId: "role",
    header: "Role",
    type: "select",
    groupable: true,
    selectOptions: [
      { label: "Hero", value: "Hero" },
      { label: "Sidekick", value: "Sidekick" },
    ],
    getValue: (p) => p.role,
  },
];

export function Example() {
  return (
    <AdvancedDataGrid
      items={items}
      columns={columns}
      getRowId={(p) => p.id}
    />
  );
}
```

## Column definition

| Field | Description |
| --- | --- |
| `columnId` | Stable unique id. |
| `header` | Header content. |
| `getValue` | Returns the comparable / exportable value. |
| `renderCell` | Optional custom cell renderer. |
| `type` | `string` \| `number` \| `boolean` \| `date` \| `select`. |
| `sortable` / `filterable` / `groupable` / `pinnable` / `hideable` | Feature opt-out flags. |
| `aggregation` | `sum` \| `avg` \| `min` \| `max` \| `count`. |
| `selectOptions` | Options for `select` columns. |
| `width` / `minWidth` | Sizing hints (used for pinning offsets). |
