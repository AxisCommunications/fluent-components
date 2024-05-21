import {
  FluentProvider,
  FluentProviderProps,
} from "@fluentui/react-components";
import { renderHook } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { useIdentifyCurrentAxisTheme } from "../hooks/use-identify-current-axis-theme.hook";
import { axisDarkTheme, axisLightTheme } from "../themes/brand";
import { axisBlueDarkTheme, axisBlueLightTheme } from "../themes/blue";

describe("useIdentifyCurrentAxisTheme", () => {
  it("should return null values if used with none-axis themes", () => {
    const { result } = renderHook(() => useIdentifyCurrentAxisTheme(), {
      wrapper: RenderFluentProviderDefault,
    });
    expect(result.current).toBeNull();
  });

  it("should return name and variant for axisDarkTheme", () => {
    const { result } = renderHook(() => useIdentifyCurrentAxisTheme(), {
      wrapper: RenderFluentProviderWithAxisDarkTheme,
    });
    const name = result.current?.name;
    const variant = result.current?.variant;

    expect(name).toBe("axisDarkTheme");
    expect(variant).toBe("dark");
  });

  it("should return name and variant for axisLightTheme", () => {
    const { result } = renderHook(() => useIdentifyCurrentAxisTheme(), {
      wrapper: RenderFluentProviderWithAxisLightTheme,
    });
    const name = result.current?.name;
    const variant = result.current?.variant;

    expect(name).toBe("axisLightTheme");
    expect(variant).toBe("light");
  });

  it("should return name and variant for AxisBlueDarkTheme ", () => {
    const { result } = renderHook(() => useIdentifyCurrentAxisTheme(), {
      wrapper: RenderFluentProviderWithAxisBlueDarkTheme,
    });
    const name = result.current?.name;
    const variant = result.current?.variant;

    expect(name).toBe("axisBlueDarkTheme");
    expect(variant).toBe("dark");
  });

  it("should return name and variant for axisBlueLightTheme", () => {
    const { result } = renderHook(() => useIdentifyCurrentAxisTheme(), {
      wrapper: RenderFluentProviderWithAxisBlueLightTheme,
    });
    const name = result.current?.name;
    const variant = result.current?.variant;

    expect(name).toBe("axisBlueLightTheme");
    expect(variant).toBe("light");
  });
});

function RenderFluentProviderWithAxisLightTheme(
  { children }: PropsWithChildren
): JSX.Element {
  return (
    <RenderFluentProviderDefault theme={axisLightTheme}>
      {children}
    </RenderFluentProviderDefault>
  );
}

function RenderFluentProviderWithAxisDarkTheme(
  { children }: PropsWithChildren
): JSX.Element {
  return (
    <RenderFluentProviderDefault theme={axisDarkTheme}>
      {children}
    </RenderFluentProviderDefault>
  );
}

function RenderFluentProviderWithAxisBlueDarkTheme(
  { children }: PropsWithChildren
): JSX.Element {
  return (
    <RenderFluentProviderDefault theme={axisBlueDarkTheme}>
      {children}
    </RenderFluentProviderDefault>
  );
}

function RenderFluentProviderWithAxisBlueLightTheme(
  { children }: PropsWithChildren
): JSX.Element {
  return (
    <RenderFluentProviderDefault theme={axisBlueLightTheme}>
      {children}
    </RenderFluentProviderDefault>
  );
}

type TRenderFluentProvider =
  & { theme?: FluentProviderProps["theme"] }
  & PropsWithChildren;

function RenderFluentProviderDefault(
  { children, theme }: TRenderFluentProvider
): JSX.Element {
  return (
    <FluentProvider theme={theme}>
      {children}
    </FluentProvider>
  );
}
