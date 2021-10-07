import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import AllSafes from "./pages/safe/safefolder/AllSafes";
import SecretSafes from "./pages/safe/secretfolder/SecretSafes";

import VaultRole from "./pages/vaultrole/VaultRole";
import AzureAD from "./pages/azuread/AzureAD";
import IAMServiceAcc from "./pages/iamserviceacc/IAMServiceAcc";
import ServiceAcc from "./pages/serviceacc/ServiceAcc";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [selectID, setselectID] =useState()
  return (
    <Router>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
              <AllSafes setselectID={setselectID}/>
              <SecretSafes selectID={selectID}/>
          </Route>
          <Route exact path="/vaultrole" component = { VaultRole } />
          <Route exact path="/ServiceAcc" component = { ServiceAcc } />
          <Route exact path="/IAMServiceAcc" component = { IAMServiceAcc } />
          <Route exact path="/AzureAD" component = { AzureAD } />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
