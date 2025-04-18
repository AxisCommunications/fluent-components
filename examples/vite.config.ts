import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: "/fluent-components/",
  resolve: {
    alias: {
      "@axiscommunications/fluent-empty-view": path.resolve(
        "../components/empty-view/src/index.ts"
      ),
      "@axiscommunications/fluent-icons": path.resolve("../icons/src/index.ts"),
      "@axiscommunications/fluent-stepper": path.resolve(
        "../components/stepper/src/index.ts"
      ),
      "@axiscommunications/fluent-password-input": path.resolve(
        "../components/password-input/src/index.ts"
      ),
      "@axiscommunications/fluent-theme": path.resolve("../theme/src/index.ts"),
      "@axiscommunications/fluent-topbar": path.resolve(
        "../components/topbar/src/index.ts"
      ),
      "@axiscommunications/fluent-hooks": path.resolve("../hooks/src/index.ts"),
      "@axiscommunications/fluent-styles": path.resolve(
        "../styles/src/index.ts"
      ),
      "@axiscommunications/fluent-slider": path.resolve(
        "../components/slider/src/index.ts"
      ),
      "@axiscommunications/fluent-illustrations": path.resolve(
        "../illustrations/src/index.ts"
      ),
    },
  },
});
