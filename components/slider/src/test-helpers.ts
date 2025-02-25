import { vi } from "vitest";
import { sliderClassNames } from "./use-slider-styles";

export const getControlRoot = (sliderRoot: HTMLElement): HTMLElement => {
  const element = sliderRoot.querySelector(`.${sliderClassNames.control}`);
  if (element === null) {
    throw new Error("Unable to find control element");
  }
  element.getBoundingClientRect = () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 10,
    bottom: 10,
    left: 0,
    right: 0,
    top: 0,
    toJSON: vi.fn(),
  });
  return element as HTMLElement;
};
