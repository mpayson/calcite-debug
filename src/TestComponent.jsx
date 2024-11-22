import { useState } from "react";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-components/dist/components/calcite-button";
import { CalciteButton, CalcitePopover } from "@esri/calcite-components-react";

function TestComponent() {
  const [ref, setRef] = useState(null);
  return (
    <>
      <CalciteButton ref={setRef}>Test</CalciteButton>
      <CalcitePopover heading="Test" referenceElement={ref} autoClose></CalcitePopover>
    </>
  );
}

export default TestComponent;