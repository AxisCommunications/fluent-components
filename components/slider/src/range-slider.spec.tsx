import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RangeSlider } from "./range-slider";
import React from "react";
import { getControlRoot } from "./test-helpers";
import { describe, expect, it, vi } from "vitest";

const expectSliderValues = (elements: HTMLElement[], values: number[]) => {
  expect(elements).toHaveLength(values.length);
  elements.forEach((element, i) => {
    expect(element.getAttribute("value")).toEqual(values[i].toString());
  });
};

describe("range-slider", () => {
  it("should render", () => {
    const result = render(
      <RangeSlider value={[20, 40]} marks={[]} min={0} max={100} />
    );

    expect(result).toMatchSnapshot();
  });

  it("should apply value", () => {
    const { getAllByRole } = render(
      <RangeSlider min={0} max={100} value={[10, 20]} />
    );
    expectSliderValues(getAllByRole("slider"), [10, 20]);
  });

  it("should apply default value", () => {
    const { getAllByRole } = render(
      <RangeSlider min={0} max={100} defaultValue={[10, 20]} />
    );
    expectSliderValues(getAllByRole("slider"), [10, 20]);
  });

  describe("mouse interaction", () => {
    it("should set closest thumb to value", () => {
      const { getByTestId, getAllByRole } = render(
        <RangeSlider
          min={0}
          max={100}
          defaultValue={[10, 60]}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 50 });

      expectSliderValues(getAllByRole("slider"), [10, 50]);
    });

    it("should swap focused thumb", () => {
      const { getByTestId, getAllByRole } = render(
        <RangeSlider
          min={0}
          max={100}
          defaultValue={[40, 60]}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 40 });
      fireEvent.mouseMove(controlRoot, { buttons: 1, clientX: 70 });

      expectSliderValues(getAllByRole("slider"), [60, 70]);
    });

    it("should call onChange but not committed on down", () => {
      const onChange = vi.fn();
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <RangeSlider
          min={0}
          max={100}
          defaultValue={[0, 100]}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 40 });

      expect(onChange).toHaveBeenCalledWith({ value: [40, 100] });
      expect(onChangeCommitted).not.toHaveBeenCalled();
    });

    it("should call onChange but not committed on move", () => {
      const onChange = vi.fn();
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <RangeSlider
          min={0}
          max={100}
          defaultValue={[0, 100]}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 10 });
      fireEvent.mouseMove(controlRoot, { buttons: 1, clientX: 30 });

      expect(onChange).toHaveBeenCalledWith({ value: [30, 100] });
      expect(onChangeCommitted).not.toHaveBeenCalled();
    });

    it("should call onChangeCommitted", () => {
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <RangeSlider
          min={0}
          max={100}
          defaultValue={[0, 100]}
          onChangeCommitted={onChangeCommitted}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 40 });
      fireEvent.mouseUp(controlRoot, { button: 0, clientX: 40 });

      expect(onChangeCommitted).toHaveBeenCalledWith({ value: [40, 100] });
    });

    it("should snap to closest mark", () => {
      const onChange = vi.fn();
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <RangeSlider
          title="Range Slider"
          min={0}
          max={100}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          marks={[
            { value: 20, label: <span data-testid="mark">20</span> },
            { value: 40, label: "40" },
            { value: 60, label: "60" },
          ]}
          data-testid="slider-root"
        />
      );

      const mark: HTMLElement = getByTestId("mark");
      getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(mark, { button: 0, clientX: 29 });
      fireEvent.mouseUp(mark, { button: 0, clientX: 29 });

      expect(onChange).toHaveBeenCalledWith({ value: [20] });
      expect(onChangeCommitted).toHaveBeenCalledWith({ value: [20] });
    });
  });

  describe("keyboard interaction", () => {
    it("should move focus between thumbs", async () => {
      const { getAllByRole } = render(
        <RangeSlider
          min={0}
          max={100}
          defaultValue={[25, 75]}
          data-testid="slider-root"
        />
      );

      const [left, right] = getAllByRole("slider");
      expect(document.activeElement).not.toEqual(left);
      expect(document.activeElement).not.toEqual(right);

      await userEvent.tab();

      expect(document.activeElement).toEqual(left);

      await userEvent.tab();

      expect(document.activeElement).toEqual(right);
    });

    it("should swap focused thumb", () => {
      const { getAllByRole } = render(
        <RangeSlider min={0} max={100} defaultValue={[49, 50]} />
      );

      const sliders = getAllByRole("slider");
      const [left, right] = sliders;
      fireEvent.focus(left);
      fireEvent.input(left, { target: { valueAsNumber: 50 } });
      fireEvent.input(left, { target: { valueAsNumber: 51 } });

      expect(document.activeElement).toEqual(right);

      expectSliderValues(sliders, [50, 51]);
    });
  });
});
