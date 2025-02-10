import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { FluentProvider } from "@fluentui/react-components";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Slider } from "./slider";
import { getControlRoot } from "./test-helpers";
import { sliderClassNames } from "./use-slider-styles";

const expectSliderValue = (element: HTMLElement, value: number) => {
  expect(element.getAttribute("value")).toEqual(value.toString());
};

describe("slider", () => {
  it("should render", () => {
    const result = render(<Slider value={20} marks={[]} min={0} max={100} />);

    expect(result).toMatchSnapshot();
  });

  it("should apply value", () => {
    const { getByRole } = render(<Slider min={0} max={100} value={10} />);
    expect(getByRole("slider").getAttribute("value")).toEqual("10");
  });

  it("should apply default value", () => {
    const { getByRole } = render(
      <Slider min={0} max={100} defaultValue={10} />
    );
    expect(getByRole("slider").getAttribute("value")).toEqual("10");
  });

  it("should render marks", () => {
    const { getAllByTestId } = render(
      <Slider
        min={0}
        max={100}
        mark={<span data-testid="mark" />}
        marks={[{ value: 10 }, { value: 20 }]}
      />
    );
    expect(getAllByTestId("mark")).toHaveLength(2);
  });

  it("should render mark labels", () => {
    const { getByTestId } = render(
      <Slider
        min={0}
        max={100}
        marks={[
          { value: 10, label: "10" },
          { value: 20, label: "20" },
        ]}
        data-testid="slider-root"
      />
    );
    const root = getByTestId("slider-root");
    expect(
      root.querySelectorAll(`.${sliderClassNames.mark.label}`)
    ).toHaveLength(2);
  });

  it("should generate marks from step", () => {
    const { getAllByTestId } = render(
      <Slider
        min={0}
        max={100}
        mark={<span data-testid="mark" />}
        step={10}
        marks={true}
      />
    );
    expect(getAllByTestId("mark")).toHaveLength(11);
  });

  it("should transform value", () => {
    const { getByTestId, getByRole } = render(
      <Slider
        min={0}
        max={100}
        defaultValue={50}
        valueLabelTransform={(value) => value * 2}
        data-testid="slider"
      />
    );
    const sliderRoot = getByTestId("slider");
    const label = sliderRoot.querySelector(`.${sliderClassNames.thumb.label}`);
    expect(label).toHaveTextContent("100");
    expectSliderValue(getByRole("slider"), 50);
  });

  describe("mouse interaction", () => {
    it("should set value on click", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));

      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 75 });

      expect(getByRole("slider").getAttribute("value")).toEqual("75");
    });

    it("should set value on click when rtl", () => {
      const { getByTestId, getByRole } = render(
        <FluentProvider dir="rtl" theme={{}}>
          <Slider min={0} max={100} data-testid="slider-root" />
        </FluentProvider>
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));

      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 75 });

      expect(getByRole("slider").getAttribute("value")).toEqual("25");
    });

    it("should focus thumb", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const slider = getByRole("slider");
      expect(document.activeElement).not.toEqual(slider);

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 0 });

      expect(document.activeElement).toEqual(slider);
    });

    it("should be disabled", () => {
      const { getByTestId } = render(
        <Slider min={0} max={100} data-testid="slider-root" disabled />
      );

      expect(getByTestId("slider-root").querySelector("input")).toBeDisabled();
    });

    it("should ignore non-left click", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));

      fireEvent.mouseDown(controlRoot, { button: 1, clientX: 50 });
      expectSliderValue(getByRole("slider"), 0);
    });

    it("should call onChange but not committed on down", () => {
      const onChange = vi.fn();
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <Slider
          min={0}
          max={100}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 50 });

      expect(onChange).toHaveBeenCalledWith({ value: 50 });
      expect(onChangeCommitted).not.toHaveBeenCalled();
    });

    it("should call onChange but not committed on move", () => {
      const onChange = vi.fn();
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <Slider
          min={0}
          max={100}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 50 });
      fireEvent.mouseMove(controlRoot, { buttons: 1, clientX: 70 });

      expect(onChange).toHaveBeenCalledWith({ value: 70 });
      expect(onChangeCommitted).not.toHaveBeenCalled();
    });

    it("should call onChangeCommitted", () => {
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <Slider
          min={0}
          max={100}
          onChangeCommitted={onChangeCommitted}
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 50 });
      fireEvent.mouseUp(controlRoot, { button: 0, clientX: 50 });

      expect(onChangeCommitted).toHaveBeenCalledWith({ value: 50 });
    });

    it("should move thumb to value", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} defaultValue={10} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 10 });
      fireEvent.mouseMove(controlRoot, { buttons: 1, clientX: 30 });
      fireEvent.mouseUp(controlRoot, { button: 0, clientX: 30 });

      expectSliderValue(getByRole("slider"), 30);
    });

    it("should abort thumb movement if button is no longer pressed", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} defaultValue={10} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 10 });
      fireEvent.mouseMove(controlRoot, { buttons: 0, clientX: 30 });

      expectSliderValue(getByRole("slider"), 10);
    });

    it("should snap to value", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} step={20} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 16 });

      expectSliderValue(getByRole("slider"), 20);
    });

    it("should snap to marks", () => {
      const { getByTestId, getByRole } = render(
        <Slider
          min={0}
          max={100}
          marks={[{ value: 20 }, { value: 60 }]}
          step="marks"
          data-testid="slider-root"
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.mouseDown(controlRoot, { button: 0, clientX: 50 });

      expectSliderValue(getByRole("slider"), 60);
    });

    it("should open on hover", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const slider = getByRole("slider");
      const label = getByTestId("slider-root").querySelector(
        `.${sliderClassNames.thumb.label}`
      );
      // scale(0) makes it hidden
      expect(label).toHaveStyle({ transform: "translateY(-100%) scale(0)" });

      fireEvent.mouseOver(slider);

      expect(label).toBeVisible();
      expect(label).toHaveStyle({ transform: "translateY(-100%) scale(1)" });
    });

    it("should close on mouse leave", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const slider = getByRole("slider");
      const label = getByTestId("slider-root").querySelector(
        `.${sliderClassNames.thumb.label}`
      );
      expect(label).toHaveStyle({ transform: "translateY(-100%) scale(0)" });

      fireEvent.mouseOver(slider);

      expect(label).toHaveStyle({ transform: "translateY(-100%) scale(1)" });

      fireEvent.mouseLeave(slider);
      expect(label).toHaveStyle({ transform: "translateY(-100%) scale(0)" });
    });
  });

  describe("touch interaction", () => {
    it("should set value on touch", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.touchStart(controlRoot, {
        changedTouches: [{ identifier: 0, clientX: 50 }],
      });

      expectSliderValue(getByRole("slider"), 50);
    });

    it("should set value on touch move", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.touchStart(controlRoot, {
        changedTouches: [{ identifier: 0, clientX: 50 }],
      });
      fireEvent.touchMove(controlRoot, {
        changedTouches: [{ identifier: 0, clientX: 70 }],
      });

      expectSliderValue(getByRole("slider"), 70);
    });

    it("should ignore touch move from other identifier", () => {
      const { getByTestId, getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.touchStart(controlRoot, {
        changedTouches: [{ identifier: 0, clientX: 50 }],
      });
      fireEvent.touchMove(controlRoot, {
        changedTouches: [{ identifier: 1, clientX: 70 }],
      });

      expectSliderValue(getByRole("slider"), 50);
    });

    it("should call onChange but no commit", () => {
      const onChange = vi.fn();
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <Slider
          min={0}
          max={100}
          data-testid="slider-root"
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.touchStart(controlRoot, {
        changedTouches: [{ identifier: 0, clientX: 50 }],
      });

      expect(onChange).toHaveBeenCalledWith({ value: 50 });
      expect(onChangeCommitted).not.toHaveBeenCalled();
    });

    it("should call onChangeCommitted", () => {
      const onChangeCommitted = vi.fn();
      const { getByTestId } = render(
        <Slider
          min={0}
          max={100}
          data-testid="slider-root"
          onChangeCommitted={onChangeCommitted}
        />
      );

      const controlRoot = getControlRoot(getByTestId("slider-root"));
      fireEvent.touchStart(controlRoot, {
        changedTouches: [{ identifier: 0, clientX: 50 }],
      });
      fireEvent.touchEnd(controlRoot, {
        changedTouches: [{ identifier: 0, clientX: 50 }],
      });

      expect(onChangeCommitted).toHaveBeenCalledWith({ value: 50 });
    });
  });

  describe("keyboard interaction", () => {
    it("should focus on tab", async () => {
      const { getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const slider = getByRole("slider");
      expect(document.activeElement).not.toEqual(slider);

      await userEvent.tab();

      expect(document.activeElement).toEqual(slider);
    });

    it("should move value", async () => {
      const { getByRole } = render(
        <Slider min={0} max={100} data-testid="slider-root" />
      );

      const slider = getByRole("slider");
      fireEvent.input(slider, { target: { valueAsNumber: 1 } });

      expectSliderValue(getByRole("slider"), 1);
    });

    it("should call onChange and commit", async () => {
      const onChange = vi.fn();
      const onChangeCommitted = vi.fn();
      const { getByRole } = render(
        <Slider
          min={0}
          max={100}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
        />
      );

      const slider = getByRole("slider");
      fireEvent.input(slider, { target: { valueAsNumber: 1 } });
      expect(onChange).toHaveBeenCalledWith({ value: 1 });
      expect(onChangeCommitted).toHaveBeenCalledWith({ value: 1 });
    });

    it("should move value to next step", async () => {
      const { getByRole } = render(<Slider min={0} max={100} step={10} />);

      const slider = getByRole("slider");
      fireEvent.input(slider, { target: { valueAsNumber: 1 } });

      expectSliderValue(getByRole("slider"), 10);
    });

    it.each([
      [10, 11, 90],
      [90, 89, 10],
    ])(
      "should move value to next mark - from %s via %s to %s",
      async (from: number, ev: number, to: number) => {
        const { getByRole } = render(
          <Slider
            min={0}
            max={100}
            defaultValue={from}
            marks={[{ value: 10 }, { value: 90 }]}
            step="marks"
          />
        );

        const slider = getByRole("slider");
        fireEvent.input(slider, { target: { valueAsNumber: ev } });

        expectSliderValue(getByRole("slider"), to);
      }
    );

    it.each([
      [10, 9],
      [90, 91],
    ])(
      "should prevent moving out of bounds - from %s via %s",
      async (from: number, ev: number) => {
        const { getByRole } = render(
          <Slider
            min={0}
            max={100}
            defaultValue={from}
            marks={[{ value: 10 }, { value: 90 }]}
            step="marks"
          />
        );

        const slider = getByRole("slider");
        fireEvent.input(slider, { target: { valueAsNumber: ev } });

        expectSliderValue(getByRole("slider"), from);
      }
    );

    it("should snap to closest value if current value not snapped", () => {
      const { getByRole } = render(
        <Slider min={0} max={100} defaultValue={15} step={10} />
      );

      const slider = getByRole("slider");
      fireEvent.input(slider, { target: { valueAsNumber: 14 } });

      expectSliderValue(getByRole("slider"), 10);
    });
  });
});
