import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-combobox";
import "@esri/calcite-components/dist/components/calcite-combobox-item";
import {
  CalciteCombobox,
  CalciteComboboxItem,
} from "@esri/calcite-components-react";

setAssetPath(location.href);

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <CalciteCombobox>
          <CalciteComboboxItem value="1" textLabel="One" />
          <CalciteComboboxItem value="2" textLabel="Two" />
        </CalciteCombobox>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
