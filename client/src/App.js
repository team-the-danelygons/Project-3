import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/Home/Home";
import Business from "./components/pages/Business/Business";
import Contact from "./components/pages/Contact/Contact";
// This comment is so I can push up the changes.

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/business/:id" component={Business}  />
        <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
