import React from "react";
import { App } from "./App";
import { ApplicationStateProvider } from "./context/ApplicationStateProvider";
import { createRoot } from "react-dom/client";

const container = createRoot(document.getElementById("root") as HTMLElement);

container.render(
  <React.StrictMode>
    <ApplicationStateProvider>
      <App />
    </ApplicationStateProvider>
  </React.StrictMode>
);
