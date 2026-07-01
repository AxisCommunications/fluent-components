// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import path, { dirname } from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    // Auto-generate the ArgTypes / Controls table from each component's
    // TypeScript prop types instead of relying on hand-written argTypes.
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      // Drop low-level React DOM attribute noise (HTMLAttributes, AriaAttributes,
      // CSS typings) but keep Fluent/Axis-declared props so every component —
      // including thin wrappers like PasswordInput that re-export Fluent props —
      // still produces a populated table.
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(@types\/react|react|csstype)\//.test(
              prop.parent.fileName
            )
          : true,
    },
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@axiscommunications/fluent-advanced-data-grid": path.resolve(
            __dirname,
            "../../components/advanced-data-grid/src/index.ts"
          ),
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
