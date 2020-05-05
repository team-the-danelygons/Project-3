import React, { Component } from "react";
import "./home.css";
import API from "../../../utils/API";
import MapWithMark from "./MapWithMark"
import { Route, BrowserRouter as Router } from 'react-router-dom';
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
          <div className="text-center" id="pop-title">
            <h3>Highest Safestance Rated Locations</h3>
          </div>

          <div className="card-deck flex-nowrap hoverable " id="pop-cards">
           
{this.state.business.map(business => (

              <div className="card view overlay zoom " id="card" key={business._id}>
                <img
                  className="card-img-top img-fluid"
                  src={business.image}
                  alt="safestance-cards"
                  id="card-image"
                ></img>
                <div className="card-body">
                  <a href={`/business/${business._id}`}>
                    <h5 className="card-title">{business.bizname}</h5></a>

                  <p className="card-text">{business.address}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Currently in-store: {business.instore}</small>
                </div>
              </div>
            ))}

          </div>
          {/* Map API Holder */}

          <div id="map"></div>

          <div className="row">
            <div className="col-lg-6" id="map-holder">
              <Router>
                <App>
                  <Route exact path="/" component={MapWithMark} />
                </App>
              </Router>
            </div>
          </div>

          {/* Map List Holder */}


          <div id="list-title">
            <h3>Explore stores in your area</h3>
            <hr></hr>
          </div>


          <div id="list-box" className="hoverable">
            <div className="card" id="list">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/business" className="btn ">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card " id="list">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/business" className="btn ">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card" id="list">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/business" className="btn ">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
