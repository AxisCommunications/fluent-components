import { describe, expect, it } from "vitest";
import { AdvancedColumnDef } from "./advanced-data-grid.types";
import { buildCsv } from "./utils/export-csv";
import { filterItems } from "./utils/filtering";
import { aggregate, groupItems } from "./utils/grouping";
import { sortItems } from "./utils/sorting";

interface Person {
  id: string;
  name: string;
  age: number;
  role: string;
}

const people: Person[] = [
  { id: "1", name: "Robin", age: 21, role: "Sidekick" },
  { id: "2", name: "Batman", age: 35, role: "Hero" },
  { id: "3", name: "Alfred", age: 70, role: "Butler" },
  { id: "4", name: "Joker", age: 40, role: "Villain" },
  { id: "5", name: "Bane", age: 38, role: "Villain" },
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
    groupable: true,
    getValue: (p) => p.role,
  },
];

describe("filterItems", () => {
  it("applies a global search across all columns", () => {
    const result = filterItems(people, columns, [], "bat");
    expect(result.map((p) => p.id)).toEqual(["2"]);
  });

  it("applies a contains column filter", () => {
    const result = filterItems(
      people,
      columns,
      [{ columnId: "role", operator: "contains", value: "villain" }],
      ""
    );
    expect(result.map((p) => p.id)).toEqual(["4", "5"]);
  });

  it("applies a numeric greaterThan filter", () => {
    const result = filterItems(
      people,
      columns,
      [{ columnId: "age", operator: "greaterThan", value: "38" }],
      ""
    );
    expect(result.map((p) => p.id)).toEqual(["3", "4"]);
  });

  it("ignores empty filter values", () => {
    const result = filterItems(
      people,
      columns,
      [{ columnId: "name", operator: "contains", value: "" }],
      ""
    );
    expect(result).toHaveLength(people.length);
  });
});

describe("sortItems", () => {
  it("sorts numbers ascending", () => {
    const result = sortItems(people, columns, {
      columnId: "age",
      direction: "ascending",
    });
    expect(result.map((p) => p.age)).toEqual([21, 35, 38, 40, 70]);
  });

  it("sorts strings descending", () => {
    const result = sortItems(people, columns, {
      columnId: "name",
      direction: "descending",
    });
    expect(result[0].name).toBe("Robin");
  });

  it("returns the original order without a sort model", () => {
    const result = sortItems(people, columns, undefined);
    expect(result).toEqual(people);
  });
});

describe("groupItems & aggregate", () => {
  it("groups by a column and computes aggregation", () => {
    const groups = groupItems(people, columns, "role");
    const villains = groups.find((g) => g.label === "Villain");
    expect(villains?.items).toHaveLength(2);
    const ageAgg = villains?.aggregations.get("age");
    expect(ageAgg?.value).toBe(39);
  });

  it("computes sum aggregation", () => {
    const column: AdvancedColumnDef<Person> = {
      columnId: "age",
      header: "Age",
      aggregation: "sum",
      getValue: (p) => p.age,
    };
    expect(aggregate(people, column).value).toBe(204);
  });
});

describe("buildCsv", () => {
  it("builds a header and rows", () => {
    const labels = new Map([
      ["name", "Name"],
      ["age", "Age"],
      ["role", "Role"],
    ]);
    const csv = buildCsv(people.slice(0, 1), columns, labels);
    expect(csv).toBe("Name,Age,Role\r\n" + "Robin,21,Sidekick");
  });

  it("escapes values that could be interpreted as formulas", () => {
    const danger: Person[] = [{ id: "x", name: "=cmd()", age: 1, role: "a,b" }];
    const labels = new Map([
      ["name", "Name"],
      ["age", "Age"],
      ["role", "Role"],
    ]);
    const csv = buildCsv(danger, columns, labels);
    expect(csv).toContain("'=cmd()");
    expect(csv).toContain('"a,b"');
  });
});
