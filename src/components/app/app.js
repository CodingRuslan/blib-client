import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import { HomePage, LoginPage, RegisterPage, LibraryPage } from "../pages";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
          <Route path="/my-library" component={LibraryPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/registration" component={RegisterPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
