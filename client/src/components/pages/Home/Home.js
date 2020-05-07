import React, { Component } from "react";
import "./home.css";
import API from "../../../utils/API";
import MapWithMark from "./MapWithMark";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";

class Home extends Component {
  state = {
    business: [],
  };

  componentDidMount() {
    this.loadPage();
  }

  // Load Page data

  loadPage = () => {
    API.getBizAll()
      .then((res) => this.setState({ business: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        {/* Jumbotron */}
        <div className="jumbotron" id="jumbohome">
          <h1 className="display-4">Healthy Shopping Together</h1>
          <p className="lead">
            Safestance - Your guide to a clean shopping experience
          </p>
        </div>

        {/* Rated Card Section */}

        <div className="container">
          <div id="pop-title">
            <h3>Highest Safestance Rated Locations</h3>
            <hr></hr>
          </div>

          <div className="card-deck flex-nowrap hoverable " id="pop-cards">
            {this.state.business.map((business) => (
              <div
                className="card view overlay zoom "
                id="card"
                key={business._id}
              >
                <img
                  className="card-img-top img-fluid"
                  src={business.image}
                  alt="safestance-cards"
                  id="card-image"
                ></img>
                <div className="card-body">
                  <a href={`/business/${business._id}`}>
                    <h5 className="card-title">{business.bizname}</h5>
                  </a>

                  <p className="card-text">{business.address}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Currently in-store: {business.instore}
                  </small>
                </div>
              </div>
            ))}
          </div>
          {/* Map API Holder */}

          <div id="list-title">
            <h3>Explore stores in your area</h3>
            <hr></hr>
          </div>

         <div className="container">

          <div className="row">
            <div className="col-lg-12 hoverable " id="maps-holder">
              <Router>
                <App>
                  <Route exact path="/" component={MapWithMark}  />
                </App>
              </Router>
            </div>
          </div>
          </div>

          {/* Map List Holder */}

          <div id="list-box" className="hoverable">
            {this.state.business.map((business) => (
              <div className="card" id="list" key={business._id}>
                <h5 className="card-header">{business.bizname}</h5>
                <div className="card-body">
                  <div className = "row">
                  <div className="col-lg-3">
                    <img
                      className="card-img-top img-fluid"
                      src={business.image}
                      alt="safestance-cards"
                      id="list-image"
                    ></img>
                  </div>

                  <div className="col-lg-9">
                    <h5 className="card-title">
                      Current Customers In-Store: {business.instore}
                    </h5>
                    <p className="card-text">{business.address}</p>
                    <a href={`/business/${business._id}`} className="btn ">
                      Check it out
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
