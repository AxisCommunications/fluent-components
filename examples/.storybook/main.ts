import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@axiscommunications/fluent-empty-view": path.resolve(
            __dirname,
            "../../components/empty-view/src/index.ts"
          ),
          "@axiscommunications/fluent-hooks": path.resolve(
            __dirname,
            "../../hooks/src/index.ts"
          ),
          "@axiscommunications/fluent-icons": path.resolve(
            __dirname,
            "../../icons/src/index.ts"
          ),
          "@axiscommunications/fluent-illustrations": path.resolve(
            __dirname,
            "../../illustrations/src/index.ts"
          ),
          "@axiscommunications/fluent-password-input": path.resolve(
            __dirname,
            "../../components/password-input/src/index.ts"
          ),
          "@axiscommunications/fluent-side-navigation": path.resolve(
            __dirname,
            "../../components/side-navigation/src/index.ts"
          ),
          "@axiscommunications/fluent-slider": path.resolve(
            __dirname,
            "../../components/slider/src/index.ts"
          ),
          "@axiscommunications/fluent-stepper": path.resolve(
            __dirname,
            "../../components/stepper/src/index.ts"
          ),
          "@axiscommunications/fluent-styles": path.resolve(
            __dirname,
            "../../styles/src/index.ts"
          ),
          "@axiscommunications/fluent-theme": path.resolve(
            __dirname,
            "../../theme/src/index.ts"
          ),
          "@axiscommunications/fluent-topbar": path.resolve(
            __dirname,
            "../../components/topbar/src/index.ts"
          ),
        },
      },
    });
  },
};

export default config;
