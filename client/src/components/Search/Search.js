import React, { Component } from "react";
import API from "../../utils/API";
import Suggestions from "../Suggestions/Suggestions";
import "./search.css";

// import { BrowserRouter as Link } from "react-router-dom";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  componentDidMount() {
    this.loadBiz();
  }

  // Load Page data

  loadBiz = () => {
    API.getBizSearch(this.state.query)
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        console.log("Query Value", this.state.query);
        if (this.state.query && this.state.query.length > 3) {
          console.log("Loading Businesses");
          this.loadBiz();
        }
      }
    );
  };

  render() {
    return (
      <>
        <div id="search">
          <form className="form-inline">
            <a
              className="nav-link"
              href="/login"
              id="login"
              textDecoration="none"
            >
              Login
            </a>
            <input
              className="form-control mr-sm-2 hoverable"
              type="search"
              placeholder="Search for..."
              aria-label="Search"
              size="30"
              ref={(input) => (this.search = input)}
              onChange={this.handleInputChange}
            
            ></input>
            <button
              className="btn my-2 my-sm-0"
              type="submit"
              id="search-btn"
            >
              Search
            </button>
          </form>

          <div className="row">
            <div className="col-lg-2 "></div>
            <div className="col-lg-10 ">
              {this.state.results.map((id) => (
                <a href={`/business/${id._id}`}>
                  <Suggestions results={this.state.results} />
                </a>
              ))}
            </div>
          </div>
         

        </div>
      </>

      //  <form>
      //    <input
      //      placeholder="Search for..."
      //      ref={input => this.search = input}
      //      onChange={this.handleInputChange}
      //    />
      //    <p>{this.state.query}</p>
      //  </form>
    );
  }
}

export default Search;
