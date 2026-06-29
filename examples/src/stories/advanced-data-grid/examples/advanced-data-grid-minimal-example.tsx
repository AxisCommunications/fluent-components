import {
  AdvancedColumnDef,
  AdvancedDataGrid,
} from "@axiscommunications/fluent-advanced-data-grid";

interface User {
  id: string;
  user: string;
  role: string;
  luckyNumber: number;
}

const users: User[] = [
  { id: "1", user: "Robin", role: "Admin", luckyNumber: 1337 },
  { id: "2", user: "Batman", role: "Hero", luckyNumber: 7 },
  { id: "3", user: "Alfred", role: "Butler", luckyNumber: 9 },
  { id: "4", user: "Joker", role: "Villain", luckyNumber: 4 },
  { id: "5", user: "Harley Quinn", role: "Villain", luckyNumber: 5 },
  { id: "6", user: "Bane", role: "Villain", luckyNumber: 6 },
  { id: "7", user: "Poison Ivy", role: "Villain", luckyNumber: 7 },
];

const columns: AdvancedColumnDef<User>[] = [
  { columnId: "user", header: "User", getValue: (u) => u.user },
  { columnId: "role", header: "Role", getValue: (u) => u.role },
  {
    columnId: "luckyNumber",
    header: "Lucky number",
    type: "number",
    getValue: (u) => u.luckyNumber,
  },
];

export function AdvancedDataGridMinimalExample() {
  return (
    <AdvancedDataGrid
      items={users}
      columns={columns}
      getRowId={(u) => u.id}
      selectionMode="none"
      defaultDensity="compact"
      defaultPageSize={5}
      enableGrouping={false}
      enablePinning={false}
      enableReordering={false}
      enableExport={false}
      aria-label="Users"
    />
  );
}

export const AdvancedDataGridMinimalExampleAsString = `import {
  AdvancedColumnDef,
  AdvancedDataGrid,
} from "@axiscommunications/fluent-advanced-data-grid";

interface User {
  id: string;
  user: string;
  role: string;
  luckyNumber: number;
}

const columns: AdvancedColumnDef<User>[] = [
  { columnId: "user", header: "User", getValue: (u) => u.user },
  { columnId: "role", header: "Role", getValue: (u) => u.role },
  {
    columnId: "luckyNumber",
    header: "Lucky number",
    type: "number",
    getValue: (u) => u.luckyNumber,
  },
];

export function AdvancedDataGridMinimalExample() {
  return (
    <AdvancedDataGrid
      items={users}
      columns={columns}
      getRowId={(u) => u.id}
      selectionMode="none"
      defaultDensity="compact"
      defaultPageSize={5}
      enableGrouping={false}
      enablePinning={false}
      enableReordering={false}
      enableExport={false}
      aria-label="Users"
    />
  );
}`;
