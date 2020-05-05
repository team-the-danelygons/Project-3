import React, { Component } from "react";
import "./nav.css";
import logo from "../../assets/images/ssfulllogo.png";
import Search from "../Search/Search";

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


<Search />
      
        {/* <div id="search">
          <form className="form-inline">
           <a className="nav-link" href="/login" id="login" textDecoration="none">Login</a>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              size="30"
            ></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div> */}
      </nav>
    );
  }
}

export default NavBar;
