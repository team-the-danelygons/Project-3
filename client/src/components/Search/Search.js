import React, { Component } from "react";
import API from "../../utils/API";
// import Suggestions from "../Suggestions/Suggestions";

class Search extends Component {
  state = {
    query: "",
    results: []
  };


  componentDidMount() {
    this.loadBiz();
  }

  // Load Page data

  loadBiz = () => {
    API.getBizAll()
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.loadBiz()
        }
      } 
    })
  }

  render() {
    return (
      <>
        <div id="search">
          <form className="form-inline">
            <a 
              classNmae="nav-link"
              href="/signup"
              id="signup"
              textDecoration="none"
            >
              Signup
            </a>
            <a
              className="nav-link"
              href="/login"
              id="login"
              textDecoration="none"
            >
              Login
            </a>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for..."
              aria-label="Search"
              size="30"
              ref={(input) => (this.search = input)}
              onChange={this.handleInputChange}
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
           
          </form>
          {/* <Suggestions results={this.state.results} /> */}
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
