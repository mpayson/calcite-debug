import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-components/dist/components/calcite-button";
import { CalciteButton } from "@esri/calcite-components-react";

setAssetPath(location.href);

function App() {
  function onClick(event) {
    const popover = document.createElement("calcite-popover");
    popover.referenceElement = event.target;
    popover.heading = "Popover";
    popover.open = true;
    popover.innerText = `My text`;
    document.body.appendChild(popover);
  }

  return (
    <div>
      <CalciteButton appearance="solid" color="blue" onClick={onClick}>
        Click me
      </CalciteButton>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
