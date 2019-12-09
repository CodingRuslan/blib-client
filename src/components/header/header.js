import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import "./header.css";

import {
  checkAuthenticationFromLocalStorage,
  logOut,
} from '../../actions';

const RegLogBar = () => (
    <>
      <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
        <Button color="inherit">Login</Button>
      </Link>

      <Link
          to="/registration"
          style={{ textDecoration: "none", color: "white" }}
      >
        <Button color="inherit">Registration</Button>
      </Link>
    </>
);

const LogOutBar = ({ logOut }) => (
    <IconButton
        // edge="start"
        onClick={() => logOut()}
        className="logOutButton"
        color="inherit"
        aria-label="logout"
    >
      <ExitToAppIcon />
    </IconButton>
);

class Header extends  Component{

  componentDidMount() {
    const { checkAuthenticationFromLocalStorage } = this.props;
    checkAuthenticationFromLocalStorage();
  }

  render() {
    const { isAuth, loginName, logOut } = this.props;
    console.log(this.props)
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton
                edge="start"
                className="menuButton"
                color="inherit"
                aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h4" className="title">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Plib
              </Link>
            </Typography>

            <Typography variant="h5" className="title">
              <Link to="/my-library" style={{ textDecoration: "none", color: "white" }}>
                My Library
              </Link>
            </Typography>

            {isAuth ? <LogOutBar logOut={logOut} /> : <RegLogBar />}

          </Toolbar>
        </AppBar>
    );
  }
}


const mapStateToProps = ({ loginName, isAuth }) => ({ loginName, isAuth });
const mapDispatchToProps = {
  logOut,
  checkAuthenticationFromLocalStorage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
