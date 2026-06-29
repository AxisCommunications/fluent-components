import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { fireEvent, render } from "@testing-library/react";
import { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { AdvancedDataGrid } from "./advanced-data-grid";
import { AdvancedColumnDef } from "./advanced-data-grid.types";

interface Person {
  id: string;
  name: string;
  age: number;
}

const people: Person[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  name: `Person ${i + 1}`,
  age: 20 + i,
}));

const columns: AdvancedColumnDef<Person>[] = [
  { columnId: "name", header: "Name", getValue: (p) => p.name },
  { columnId: "age", header: "Age", type: "number", getValue: (p) => p.age },
];

const renderGrid = (ui: ReactElement) =>
  render(<FluentProvider theme={webLightTheme}>{ui}</FluentProvider>);

describe("AdvancedDataGrid", () => {
  it("renders headers and a first page of rows", () => {
    const { getByText, queryByText } = renderGrid(
      <AdvancedDataGrid
        items={people}
        columns={columns}
        getRowId={(p) => p.id}
        defaultPageSize={5}
      />
    );

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Person 1")).toBeInTheDocument();
    // Page size 5 → row 6 should not be visible yet.
    expect(queryByText("Person 6")).not.toBeInTheDocument();
  });

  it("filters rows with the global search box", () => {
    const { getByTestId, getByText, queryByText } = renderGrid(
      <AdvancedDataGrid
        items={people}
        columns={columns}
        getRowId={(p) => p.id}
      />
    );

    const search = getByTestId("adg-search");
    fireEvent.change(search, { target: { value: "Person 11" } });

    expect(getByText("Person 11")).toBeInTheDocument();
    expect(queryByText("Person 1")).not.toBeInTheDocument();
  });

  it("paginates to the next page", () => {
    const { getByLabelText, getByText, queryByText } = renderGrid(
      <AdvancedDataGrid
        items={people}
        columns={columns}
        getRowId={(p) => p.id}
        defaultPageSize={5}
      />
    );

    fireEvent.click(getByLabelText("Next page"));

    expect(getByText("Person 6")).toBeInTheDocument();
    expect(queryByText("Person 1")).not.toBeInTheDocument();
  });
});
