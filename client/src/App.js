import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={require("./assets/images/ssfulllogo.png")} width="150" height="30" className="d-inline-block align-top" alt=""/>
      </a>
    </nav>
     
    );
  }
}

export default App;
