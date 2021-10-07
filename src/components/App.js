import React, { useState } from "react";
import Header from "./Header/Header";
import "./css/App.css";
import AllSafes from "./AllSafes";
import SecretSafes from "./SecretSafes";

import VaultRole from "./Router/VaultRole";
import AzureAD from "./Router/AzureAD";
import IAMServiceAcc from "./Router/IAMServiceAcc";
import ServiceAcc from "./Router/ServiceAcc";


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
          <Route exact path="/vaultrole">
              <VaultRole/>
          </Route>
          <Route exact path="/ServiceAcc">
              <ServiceAcc/>
          </Route>
          <Route exact path="/IAMServiceAcc">
              <IAMServiceAcc/>
          </Route>
          <Route exact path="/AzureAD">
              <AzureAD/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
