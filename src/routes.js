import React from "react";

import { Switch, Route, Router } from "react-router-dom";

import history from "./services/history";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewIncident from "./pages/NewIncident";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new_incident" component={NewIncident} />
      </Switch>
    </Router>
  );
}
