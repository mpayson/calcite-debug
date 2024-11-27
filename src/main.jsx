import React from "react";
import ReactDOM from "react-dom/client";
import { setAssetPath } from "@esri/calcite-components";
import "@esri/calcite-components/dist/components/calcite-button";
import { CalciteButton } from "@esri/calcite-components-react";

setAssetPath(location.href);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalciteButton>Click me</CalciteButton>
  </React.StrictMode>
);
