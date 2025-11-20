import { render } from "@testing-library/react";
import { AddUserDark, AddUserLight } from "../index.js";
import { bundleIllustration } from "../utils/bundleIllustration.js";

const BundledIllustration = bundleIllustration(AddUserDark, AddUserLight);

describe("bundleIllustration", () => {
  it("Should render dark variant", () => {
    const { getByTestId } = render(<BundledIllustration variant={"dark"} />);
    const testElement = getByTestId("bundleIllustration-dark");
    expect(testElement).toBeInTheDocument();
  });

  it("Should render light variant", () => {
    const { getByTestId } = render(<BundledIllustration variant={"light"} />);
    const testElement = getByTestId("bundleIllustration-light");
    expect(testElement).toBeInTheDocument();
  });
});
