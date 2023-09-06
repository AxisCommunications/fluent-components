# Styles - @axiscommunications/fluent-styles

Styles for use with fluent UI components

## How to install

```sh
yarn add @axiscommunications/fluent-styles
```

```sh
npm install @axiscommunications/fluent-styles
```

## Usage of styles

```ts
import {
  useRowStyles,
  useColumnStyles,
  useTableStyles,
} from "@axiscommunications/fluent-styles";

const tableStyles = useTableStyles();
const rowStyles = useRowStyles();
const columnStyles = useColumnStyles();

<Table noNativeElements size="medium" className={tableStyles.table}>
  <TableHeader className={tableStyles.header}>
    <TableRow>
      <TableHeaderCell className={columnStyles.normal}>User</TableHeaderCell>
      <TableHeaderCell className={columnStyles.wide}>Role</TableHeaderCell>
      <TableHeaderCell className={columnStyles.narrow}>
        Lucky number
      </TableHeaderCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className={rowStyles.normal}>
      <TableCell className={columnStyles.normal}>
        <TableCellLayout>Super User</TableCellLayout>
      </TableCell>
      <TableCell className={columnStyles.wide}>
        <TableCellLayout>Admin</TableCellLayout>
      </TableCell>
      <TableCell className={columnStyles.narrow}>
        <TableCellLayout>777</TableCellLayout>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

## Usage of static styles

```ts
import {,
  useScrollStaticStyles,
} from "@axiscommunications/fluent-styles";


export const App = () => {

  useScrollStaticStyles()

  return <div>...</div>
}
```
