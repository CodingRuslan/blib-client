import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default App;
