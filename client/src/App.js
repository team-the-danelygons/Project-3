import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAcations";
import "./App.css";

import { Provider } from 'react-redux';
import store from "./store"

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/Home/Home";
import Business from "./components/pages/Business/Business";
import Contact from "./components/pages/Contact/Contact";
import Signup from "./components/pages/Signup/Signup";
import Login from "./components/pages/Login/Login";
import PrivateRoute from "./components/private-route/PrivateRoutes"
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
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/business/:id" component={Business} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
