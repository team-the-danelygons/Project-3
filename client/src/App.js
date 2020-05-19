import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAcations";
import "./App.css";

import { Provider } from 'react-redux';
import store from "./store"

import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Business from "./components/pages/Business/Business";
import Claim from "./components/pages/Claim/Claim";
import Signup from "./components/pages/Signup/Signup";
import Login from "./components/pages/Login/Login";
import Results from "./components/pages/Results/Results";
import API from "./utils/API";

// import PrivateRoute from "./components/private-route/PrivateRoutes"
// This comment is so I can push up the changes.

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}



class App extends Component {

  state = {
    query: "",
    results: [],
    ownerID: "",
    bizID: "",
    userID: ""
  }

  updateSearchQuery = (value) => {
    this.setState({query: value})
  }

  updateOwnerID = (value) => {
    this.setState({ownerID: value})
  }

  updateBizID = (value) => {
    this.setState({bizID: value})
  }

  componentDidMount() {
    this.loadBiz();
    // this.setState({ownerID: user.id})
  }

  loadBiz = () => {
    
    if (this.state.query) {
      API.getBizSearch(this.state.query)
    
        .then((res) => this.setState({ results: res.data }))
        .catch((err) => console.log(err));
    }
    
  };

  loginUser = userData => {
    console.log("sending login", userData);
    axios
        .post("/api/users/login", userData)
        .then(res => {
            console.log("The user information:", res.data);
            // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            // dispatch(setCurrentUser(decoded))
            this.setState({redirect: true, userId: res.data.id});
        })
        .catch(//err => 
            //dispatch({
            //    type: GET_ERRORS,
            //    payload: err.response.data
            //})    
        );
}

  // handleInputChange = () => {
  //   this.setState(
  //     {
  //       query: this.search.value,
  //     },
  //     () => {
  //       console.log("Query Value", this.state.query);
  //       if (this.state.query && this.state.query.length > 2) {
  //         console.log("Loading Businesses");
  //         this.loadBiz(this.state.query);
  //       } else {
  //         this.setState({
  //           results: [],
  //         });
  //         // this.updateSearchQuery(this.search.value);
  //       }
  //     }
  //   );
  // };
  resetRedirect = () => {
    this.setState({redirect: false});
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            
            <Route exact path="/">
              <Home loadBiz = {this.loadBiz} updateSearchQuery = {this.updateSearchQuery} handleInputChange={this.props.handleInputChange}/>
            </Route>
            
            {/* <Route exact path="/business/:id">
              <Business userID={this.state.userID}/>
            </Route> */}

            <Route path="/business/:id" component={Business} />
            <Route path="/claim" component={Claim} />
            <Route path="/results">
              <Results searchQuery={this.state.query} updateSearchQuery = {this.updateSearchQuery}  results={this.state.results} loadBiz={this.loadBiz} />
            </Route>
            
            <Route path="/signup" component={Signup} />
            <Route path="/login" >
              <Login loginUser={this.loginUser} redirect={this.state.redirect} resetRedirect={this.resetRedirect} />
            </Route>
            <Footer />

           
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
