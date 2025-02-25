import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ApplicationStateProvider } from "./context/ApplicationStateProvider";

const container = createRoot(document.getElementById("root") as HTMLElement);

container.render(
  <React.StrictMode>
    <ApplicationStateProvider>
      <App />
    </ApplicationStateProvider>
  </React.StrictMode>
);
