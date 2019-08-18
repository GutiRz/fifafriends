import * as React from "react";
import * as ReactDOM from "react-dom";
import { NavContextProvider } from "core";
import { PrimeraDivisionScene, SegundaDivisionScene, SuperCopaLigaScene, HomeScene, MiEquipoScene } from "./scenes";
import { HashRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <NavContextProvider>
    <HashRouter>
      <Switch>
        <Route path={"/home"} render={() => <HomeScene />} />
        <Route path={"/mi-equipo"} render={() => <MiEquipoScene />} />
        <Route path={"/primera-division"} render={() => <PrimeraDivisionScene />} />
        <Route path={"/segunda-division"} render={() => <SegundaDivisionScene />} />
        <Route path={"/supercopa-liga"} render={() => <SuperCopaLigaScene />} />
      </Switch>
    </HashRouter>
  </NavContextProvider>,
  document.getElementById("root")
);
