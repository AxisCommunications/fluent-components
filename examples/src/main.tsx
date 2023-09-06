import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ApplicationStateProvider } from "./context/ApplicationStateProvider";

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ApplicationStateProvider>
      <App />
    </ApplicationStateProvider>
  </React.StrictMode>
);
