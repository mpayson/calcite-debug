import { useState } from "react";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-components/dist/components/calcite-button";
import { Button, Popover } from "@esri/calcite-components-react";

function TestComponent() {
  const [ref, setRef] = useState(null);
  return (
    <>
      <Button ref={setRef}>Test</Button>
      <Popover heading="Test" referenceElement={ref} autoClose></Popover>
    </>
  );
}

export default TestComponent;