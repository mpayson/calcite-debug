import React from "react";
import ReactDOM from "react-dom/client";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import TestComponent from "./TestComponent";

setAssetPath(location.href);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>
);
