import React from "react";
import ReactDOM from "react-dom/client";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-dialog";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import Component from "./Component";

setAssetPath(location.href);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);
