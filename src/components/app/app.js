import React from "react";
import "./app.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Footer from "../footer";
import Header from "../header";
import { HomePage, LoginPage, RegisterPage, LibraryPage } from "../pages";

const App = ({ isAuth, messageForModalWindow }) => {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
              isAuth ? (
              <Route path="/" component={HomePage} exact />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/my-library"
          render={() =>
              isAuth ? (
              <Route path="/my-library" component={LibraryPage} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        {/*<Route path="/my-library" component={LibraryPage} exact />*/}
        <Route path="/login" component={LoginPage} />
        <Route path="/registration" component={RegisterPage} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ isAuth, messageForModalWindow }) => (
    { isAuth, messageForModalWindow });

export default connect(mapStateToProps)(App);
