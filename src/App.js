import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import "./App.css";
import AllSafes from "./pages/safe/safefolder/AllSafes";
import SecretSafes from "./pages/safe/secretfolder/SecretSafes";
import { Redirect } from 'react-router';
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
          <Route exact path="/tvault"
            render={() => {
              return <Redirect to="/" />;
            }}>
              <AllSafes setselectID={setselectID}/>
              <SecretSafes selectID={selectID}/>
          </Route>
          <Route path="/vaultrole" component = { VaultRole } />
          <Route path="/ServiceAcc" component = { ServiceAcc } />
          <Route path="/IAMServiceAcc" component = { IAMServiceAcc } />
          <Route path="/AzureAD" component = { AzureAD } />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
