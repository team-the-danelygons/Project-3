import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/Home";
import Business from "./components/pages/Business";
import Contact from "./components/pages/Contact";
// This comment is so I can push up the changes.

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/business" component={Business} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
