import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAcations";
import Suggestions from "../Suggestions/Suggestions";

class Search extends Component {
  state = {
    query: "",
    loggedIn: this.props.auth.isAuthenticated,
    name: "Guest",
    buttonName: "Login",
    results: []
  };

  componentDidMount() {
    const { user } = this.props.auth
    this.loadBiz();
    if (this.state.loggedIn) {
      this.setState({
        name: user.name.split(" ")[0],
        buttonName: "Logout"
      })
    } else {
      console.log("No user is logged in.")
    }
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

  logButtonHandler = event => {
    console.log("You clicked this button");
    if (this.state.loggedIn) {
      this.props.logoutUser();
      window.location.reload();
    } else {
      console.log("The user will be logged in")
    }
  }

  render() {
    return (
      <>
        <div id="search">
          <p>Welcome {this.state.name}</p>
          <form className="form-inline">
            <a 
              className="nav-link"
              href="/signup"
              id="signup"
              textDecoration="none"
            >
              Signup
            </a>
            <a
              className="nav-link"
              href="/login"
              id="logButton"
              textDecoration="none"
              onClick = {this.logButtonHandler}
            >
              {this.state.buttonName}
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

Search.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Search);