import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@axiscommunications/fluent-icons": path.resolve(
        "../icons/src/index.ts"
      ),
      "@axiscommunications/fluent-stepper": path.resolve(
        "../components/stepper/src/index.ts"
      ),
      "@axiscommunications/fluent-password-input": path.resolve(
        "../components/password-input/src/index.ts"
      ),
      "@axiscommunications/fluent-theme": path.resolve(
        "../theme/src/index.ts"
      ),
      "@axiscommunications/fluent-topbar": path.resolve(
        "../components/topbar/src/index.ts"
      ),
      "@axiscommunications/fluent-hooks": path.resolve(
        "../hooks/src/index.ts"
      ),
      "@axiscommunications/fluent-styles": path.resolve(
        "../styles/src/index.ts"
      ),
      "@axiscommunications/fluent-slider": path.resolve(
        "../components/slider/src/index.ts"
      ),
      "@axiscommunications/fluent-notification-bar": path.resolve(
        "../components/notification-bar/src/index.ts"
      ),
    },
  },
});
