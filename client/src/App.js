import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Provider } from 'react-redux';
import store from "./store"

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/Home/Home";
import Business from "./components/pages/Business/Business";
import Contact from "./components/pages/Contact/Contact";
import Signup from "./components/pages/Signup/Signup";
import Login from "./components/pages/Login/Login";
// This comment is so I can push up the changes.

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/business/:id" component={Business} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
