import { useScrollStaticStyles } from "@axiscommunications/fluent-styles";
import {
  axisBlueDarkTheme,
  axisBlueLightTheme,
  axisDarkTheme,
  axisLightTheme,
} from "@axiscommunications/fluent-theme";
import { FluentProvider } from "@fluentui/react-components";
import type { Decorator, Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ApplicationStateProvider } from "../src/context/ApplicationStateProvider";

type ThemeKey = "dark" | "light" | "blueDark" | "blueLight";
type DirectionKey = "ltr" | "rtl";

const storyTheme: Record<ThemeKey, typeof axisDarkTheme> = {
  dark: axisDarkTheme,
  light: axisLightTheme,
  blueDark: axisBlueDarkTheme,
  blueLight: axisBlueLightTheme,
};

const withFluentProvider: Decorator = (Story, context) => {
  useScrollStaticStyles();

  const theme = context.globals.theme as ThemeKey;
  const direction = context.globals.direction as DirectionKey;
  const isDocsMode = context.viewMode === "docs";

  return (
    <MemoryRouter initialEntries={["/"]}>
      <ApplicationStateProvider>
        <FluentProvider theme={storyTheme[theme]} dir={direction}>
          <div
            style={{
              minHeight: isDocsMode ? "auto" : "100vh",
              padding: isDocsMode ? "8px" : "24px",
            }}
          >
            <Story />
          </div>
        </FluentProvider>
      </ApplicationStateProvider>
    </MemoryRouter>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "UI patterns",
          "Components",
          "Assets",
          "Utilities",
          "Theme",
          "Documentation",
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for all stories",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "dark", title: "Axis Dark" },
          { value: "light", title: "Axis Light" },
          { value: "blueDark", title: "Axis Blue Dark" },
          { value: "blueLight", title: "Axis Blue Light" },
        ],
      },
    },
    direction: {
      description: "Text direction",
      defaultValue: "ltr",
      toolbar: {
        title: "Direction",
        icon: "globe",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL" },
        ],
      },
    },
  },
  decorators: [withFluentProvider],
};

export default preview;
