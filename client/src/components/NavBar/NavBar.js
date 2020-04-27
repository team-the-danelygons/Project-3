import React, { Component } from "react";
import "./nav.css";
import logo from "../../assets/images/ssfulllogo.png"

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} width="150" height="40" className="d-inline-block align-top" alt=""/>
      </a>
    </nav>
     
    );
  }
}

export default NavBar;