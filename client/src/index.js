import React from "react";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

hydrateRoot(
  rootElement,
  <StrictMode>
    <App />
  </StrictMode>
);
