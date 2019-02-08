import React from "react";

import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default Routes;
