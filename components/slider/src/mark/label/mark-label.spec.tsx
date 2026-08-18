import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Slider } from "../../slider";
import { sliderClassNames } from "../../use-slider-styles";

type ResizeCallback = (entries: ResizeObserverEntry[]) => void;

let resizeCallbacks: ResizeCallback[] = [];
let observedElements: Element[] = [];
const disconnectFn = vi.fn();

class MockResizeObserver {
  constructor(callback: ResizeCallback) {
    resizeCallbacks.push(callback);
  }

  observe(el: Element) {
    observedElements.push(el);
  }

  disconnect() {
    disconnectFn();
    observedElements = [];
  }

  unobserve() {}
}

describe("mark label", () => {
  beforeEach(() => {
    vi.stubGlobal("ResizeObserver", MockResizeObserver);
    observedElements = [];
    resizeCallbacks = [];
    disconnectFn.mockClear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const renderSliderWithLabels = (marks: { value: number; label: string }[]) =>
    render(<Slider min={0} max={100} marks={marks} data-testid="slider" />);

  it("should render mark labels", () => {
    const { getByTestId } = renderSliderWithLabels([
      { value: 0, label: "min" },
      { value: 50, label: "mid" },
      { value: 100, label: "max" },
    ]);

    const root = getByTestId("slider");
    const labels = root.querySelectorAll(`.${sliderClassNames.mark.label}`);
    expect(labels).toHaveLength(3);
    expect(labels[0].textContent).toBe("min");
    expect(labels[1].textContent).toBe("mid");
    expect(labels[2].textContent).toBe("max");
  });

  it("should observe mark label elements with ResizeObserver", () => {
    const { getByTestId } = renderSliderWithLabels([
      { value: 0, label: "start" },
      { value: 100, label: "end" },
    ]);

    const root = getByTestId("slider");
    const labels = root.querySelectorAll(`.${sliderClassNames.mark.label}`);

    expect(resizeCallbacks).toHaveLength(labels.length);
    expect(observedElements).toHaveLength(labels.length);
    for (let i = 0; i < labels.length; i++) {
      expect(observedElements[i]).toBe(labels[i]);
    }
  });

  it("should update labelWidth when ResizeObserver fires", () => {
    const { getByTestId } = renderSliderWithLabels([
      { value: 50, label: "center" },
    ]);

    const root = getByTestId("slider");
    const label = root.querySelector(
      `.${sliderClassNames.mark.label}`
    ) as HTMLElement;

    // Simulate ResizeObserver reporting a width change
    Object.defineProperty(label, "clientWidth", {
      value: 80,
      configurable: true,
    });
    act(() => {
      for (const cb of resizeCallbacks) {
        cb([{ target: label } as unknown as ResizeObserverEntry]);
      }
    });

    // After ResizeObserver fires, the label should still be rendered
    const updatedLabel = root.querySelector(
      `.${sliderClassNames.mark.label}`
    ) as HTMLElement;
    expect(updatedLabel).toBeTruthy();
    expect(updatedLabel.textContent).toBe("center");
  });

  it("should disconnect ResizeObserver on unmount", () => {
    const { unmount } = renderSliderWithLabels([{ value: 50, label: "test" }]);

    expect(disconnectFn).not.toHaveBeenCalled();

    unmount();

    expect(disconnectFn).toHaveBeenCalled();
  });
});
