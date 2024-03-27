import React from "react";
import ReactDOM from "react-dom/client";
import { setAssetPath } from '@esri/calcite-components/dist/components';
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-notice";
import {
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalciteTab,
  CalciteNotice,
} from "@esri/calcite-components-react";

setAssetPath(location.href);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalciteTabs>
      <CalciteTabNav slot="title-group">
        <CalciteTabTitle selected>Watercraft</CalciteTabTitle>
        <CalciteTabTitle>Automobiles</CalciteTabTitle>
        <CalciteTabTitle>Aircrafts</CalciteTabTitle>
      </CalciteTabNav>
      <CalciteTab selected>
        <CalciteNotice icon="embark" open>
          <div slot="message">Recommended for coastal use</div>
        </CalciteNotice>
      </CalciteTab>
      <CalciteTab>
        <CalciteNotice icon="car" open>
          <div slot="message">A good choice for inland adventure</div>
        </CalciteNotice>
      </CalciteTab>
      <CalciteTab>
        <calcite-notice icon="plane" open>
          <div slot="message">Cross continents quickly</div>
        </calcite-notice>
      </CalciteTab>
    </CalciteTabs>
  </React.StrictMode>
);
