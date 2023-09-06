import { render } from "@testing-library/react";
import React from "react";
import { TopBar } from "./top-bar";

describe("Topbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TopBar />);

    expect(baseElement).toBeTruthy();
  });
});
