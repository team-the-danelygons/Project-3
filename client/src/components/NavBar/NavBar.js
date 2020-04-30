import React, { Component } from "react";
import "./nav.css";
import logo from "../../assets/images/ssfulllogo.png";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </a>



      
        <div id="search">
          <form class="form-inline">
           <a class="nav-link" href="/login" id="login" text-decoration="none">Login</a>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              size="30"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
