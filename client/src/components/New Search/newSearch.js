import React, { Component } from "react";
import API from "../../utils/API";
import Suggestions from "../Suggestions/Suggestions";
import "./newsearch.css";

class newSearch extends Component {
  state = {
    query: "",

    name: "",

    results: [],
  };

  componentDidMount() {
    this.loadBiz();
  }

  // Load Page data`

  loadBiz = (name) => {
    if (name) {
      API.getBizSearch(this.state.query)
        .then((res) => this.setState({ results: res.data }))
        .catch((err) => console.log(err));
    }
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        console.log("Query Value", this.state.query);
        if (this.state.query && this.state.query.length > 2) {
          console.log("Loading Businesses");
          this.loadBiz(this.state.query);
        } else {
          this.setState({
            results: [],
          });
        }
      }
    );
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div id="search">
          <div className="row" id="search-row">
            <div class="col-lg-12 hoverable" id="search-box">
              <form className="form-inline ">
                <input
                  id="search-bar"
                  className="form-control mr-sm-2 "
                  type="search"
                  placeholder="Try Walmart, Safeway etc..."
                  aria-label="Search"
                  // size="90"
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
                <div className="row"></div>
                <div className="col-lg-10 suggestions ">
                  {this.state.results.map((id) => (
                    <div>
                      <a href={`/business/${id._id}`} key={id._id}>
                        <Suggestions results={this.state.results} />
                      </a>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default newSearch;
