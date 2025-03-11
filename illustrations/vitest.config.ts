// vite.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTest.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: ["node_modules/"],
    },
  },
});
