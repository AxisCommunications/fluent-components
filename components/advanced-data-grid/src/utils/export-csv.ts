import { AdvancedColumnDef } from "../advanced-data-grid.types";
import { valueToString } from "./filtering";

/**
 * Escapes a value for inclusion in a CSV cell.
 *
 * In addition to standard quoting, leading characters that spreadsheet
 * applications interpret as formulas (`=`, `+`, `-`, `@`, tab, CR) are prefixed
 * with a single quote to mitigate CSV injection.
 */
function escapeCsvCell(raw: string): string {
  let value = raw;
  if (/^[=+\-@\t\r]/.test(value)) {
    value = `'${value}`;
  }
  if (/[",\n\r]/.test(value)) {
    value = `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function buildCsv<TItem>(
  items: TItem[],
  columns: AdvancedColumnDef<TItem>[],
  headerLabels: Map<string, string>
): string {
  const header = columns
    .map((column) =>
      escapeCsvCell(headerLabels.get(column.columnId) ?? column.columnId)
    )
    .join(",");

  const rows = items.map((item) =>
    columns
      .map((column) => escapeCsvCell(valueToString(column.getValue(item))))
      .join(",")
  );

  return [header, ...rows].join("\r\n");
}

export function downloadCsv(fileName: string, csv: string): void {
  if (typeof document === "undefined") {
    return;
  }
  const blob = new Blob([`\uFEFF${csv}`], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName.endsWith(".csv") ? fileName : `${fileName}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
