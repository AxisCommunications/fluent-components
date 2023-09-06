import { render } from "@testing-library/react";
import React from "react";
import { StepperDialog } from "./stepper-dialog";
import { DialogStep } from "./stepper-dialog.types";
import { vi } from "vitest";

describe("StepperDialog", () => {
  const steps: DialogStep[] = [
    {
      name: "First step",
      content: <>step1</>,
    },
    {
      name: "Second step",
      content: <>step2</>,
    },
    {
      name: "Third step",
      content: <>step3</>,
    },
  ];

  it("should render successfully", () => {
    const { baseElement } = render(
      <StepperDialog
        currentStep={0}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={""}
        nextLabel={""}
        previousLabel={""}
        finishLabel={""}
      />
    );

    expect(baseElement).toBeTruthy();
  });

  it("should contain the correct steps", () => {
    const { getByText } = render(
      <StepperDialog
        currentStep={0}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={""}
        nextLabel={""}
        previousLabel={""}
        finishLabel={""}
      />
    );

    expect(getByText("1")).toBeVisible();
    expect(getByText("2")).toBeVisible();
    expect(getByText("3")).toBeVisible();
  });

  it("should not show previous numbers when completed", () => {
    const { queryByText } = render(
      <StepperDialog
        currentStep={2}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={""}
        nextLabel={""}
        previousLabel={""}
        finishLabel={""}
      />
    );

    expect(queryByText("1")).not.toBeInTheDocument();
    expect(queryByText("2")).not.toBeInTheDocument();
    expect(queryByText("3")).toBeVisible();
  });

  it("should render cancel and next button", () => {
    const { getByRole, queryByRole } = render(
      <StepperDialog
        currentStep={0}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    expect(getByRole("button", { name: "Next" })).toBeVisible();
    expect(getByRole("button", { name: "Cancel" })).toBeVisible();
    expect(queryByRole("button", { name: "Previous" })).not.toBeInTheDocument();
    expect(queryByRole("button", { name: "Finish" })).not.toBeInTheDocument();
  });

  it("should render cancel, next and previous", () => {
    const { getByRole, queryByRole } = render(
      <StepperDialog
        currentStep={1}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    expect(getByRole("button", { name: "Next" })).toBeVisible();
    expect(getByRole("button", { name: "Cancel" })).toBeVisible();
    expect(getByRole("button", { name: "Previous" })).toBeVisible();
    expect(queryByRole("button", { name: "Finish" })).not.toBeInTheDocument();
  });

  it("should render cancel, finish and reset", () => {
    const { getByRole, queryByRole } = render(
      <StepperDialog
        currentStep={2}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    expect(getByRole("button", { name: "Cancel" })).toBeVisible();
    expect(getByRole("button", { name: "Finish" })).toBeVisible();
    expect(queryByRole("button", { name: "Next" })).not.toBeInTheDocument();
    expect(getByRole("button", { name: "Previous" })).toBeVisible();
  });

  it("should not render cancel if no label is provided", () => {
    const { getByRole, queryByRole } = render(
      <StepperDialog
        currentStep={2}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    expect(queryByRole("button", { name: "Cancel" })).not.toBeInTheDocument();
    expect(getByRole("button", { name: "Finish" })).toBeVisible();
    expect(queryByRole("button", { name: "Next" })).not.toBeInTheDocument();
    expect(getByRole("button", { name: "Previous" })).toBeVisible();
  });

  it("should render an disabled next button for state one", () => {
    const { getByRole } = render(
      <StepperDialog
        currentStep={1}
        steps={steps}
        disableProgression={true}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );
    expect(getByRole("button", { name: "Cancel" })).toBeVisible();
    expect(getByRole("button", { name: "Next" })).toBeDisabled();
  });

  it("should render an disabled next button for state two", () => {
    const { getByRole } = render(
      <StepperDialog
        currentStep={1}
        steps={steps}
        disableProgression={true}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );
    expect(getByRole("button", { name: "Cancel" })).toBeVisible();
    expect(getByRole("button", { name: "Next" })).toBeDisabled();
  });

  it("should be able to go to next step", () => {
    const onStepChange = vi.fn();

    const { getByRole } = render(
      <StepperDialog
        currentStep={0}
        steps={steps}
        disableProgression={false}
        onStepChange={onStepChange}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    getByRole("button", { name: "Next" }).click();

    expect(onStepChange).toHaveBeenCalledWith(1);
  });

  it("should be able go to previous step", () => {
    const onStepChange = vi.fn();

    const { getByRole } = render(
      <StepperDialog
        currentStep={1}
        steps={steps}
        disableProgression={false}
        onStepChange={onStepChange}
        onFinish={vi.fn()}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    getByRole("button", { name: "Previous" }).click();

    expect(onStepChange).toHaveBeenCalledWith(0);
  });

  it("should be able press cancel", () => {
    const onCancel = vi.fn();

    const { getByRole } = render(
      <StepperDialog
        currentStep={1}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onCancel={onCancel}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    getByRole("button", { name: "Cancel" }).click();

    expect(onCancel).toHaveBeenCalled();
  });

  it("should be able press finish", () => {
    const onFinish = vi.fn();

    const { getByRole } = render(
      <StepperDialog
        currentStep={2}
        steps={steps}
        disableProgression={false}
        onStepChange={vi.fn()}
        onFinish={onFinish}
        onCancel={vi.fn()}
        cancelLabel={"Cancel"}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        finishLabel={"Finish"}
      />
    );

    getByRole("button", { name: "Finish" }).click();

    expect(onFinish).toHaveBeenCalled();
  });
});
