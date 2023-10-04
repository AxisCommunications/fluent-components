import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ApplicationStateProvider } from "./context/ApplicationStateProvider";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ApplicationStateProvider>
      <App />
    </ApplicationStateProvider>
  </React.StrictMode>,
  container
);
