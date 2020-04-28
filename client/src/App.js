import React, { Component } from "react";
import "./App.css";
import logo from "./assets/images/ssfulllogo.png"

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} width="150" height="30" className="d-inline-block align-top" alt=""/>
      </a>
    </nav>
     
    );
  }
}

export default App;
