import { CalciteButton, CalciteDialog } from "@esri/calcite-components-react";
import { useRef, useState } from "react";

export default function Component() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <CalciteButton onClick={() => setOpen(true)}>Open</CalciteButton>
      {open && (
        <CalciteDialog
          open
          modal
          ref={ref}
          onCalciteDialogClose={() => {
            ref.current.open = true;
            setOpen(false);
          }}
        >
          Content
        </CalciteDialog>
      )}
    </>
  );
}
