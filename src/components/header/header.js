import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
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
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            My Library
          </Link>
        </Typography>

        <Typography variant="h5" className="title">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Something else
          </Link>
        </Typography>

        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Login</Button>
        </Link>

        <Link
          to="/registration"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button color="inherit">Registration</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
