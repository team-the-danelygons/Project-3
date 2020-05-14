import React, { Component } from "react";
import API from "../../utils/API";

import "./newsearch.css";

class newSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",

      name: "",

      results: [],
    };
  }

  componentDidMount() {
    // this.props.loadBiz();
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
          this.updateSearchQuery(this.search.value);
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
                  list="biz-search"
                  id="search-bar"
                  className="form-control mr-sm-2 "
                  type="search"
                  placeholder="Try Walmart, Safeway etc..."
                  aria-label="Search"
                  // size="90"
                  ref={(input) => (this.search = input)}
                  onChange={this.props.handleInputChange}
                ></input>
                <a href="/results" className="btn my-2 my-sm-0">
                  Search
                </a>

                <datalist id="biz-search">
                  {this.state.results.map((results) => (
                    <option value={results.bizname}></option>
                  ))}
                </datalist>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default newSearch;
