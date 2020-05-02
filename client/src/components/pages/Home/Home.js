import React, { Component } from "react";
import "./home.css";
// import API from "../../../utils/API";

class Home extends Component {
  state = {

    
  };




render() {
  return (
    <>
    {/* Jumbotron */}
      <div className="jumbotron" id="jumbohome">
        <h1 class="display-4">Healthy Shopping Together</h1>
        <p class="lead">
          Safestance - Your guide to a clean shopping experience
        </p>
      </div>

      {/* Rated Card Section */}

      <div className="container">
        <div className="text-center" id="pop-title">
          <h3>Highest Safestance Rated Locations</h3>
        </div>

        <div class="card-deck flex-nowrap" id="pop-cards">
          <div class="card" id="card">
            <img class="card-img-top" src="..." alt="safestance-cards"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card" id="card">
            <img class="card-img-top" src="..." alt="safestance-cards"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card" id="card">
            <img class="card-img-top" src="..." alt="safestance-cards"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card" id="card">
            <img class="card-img-top" src="..." alt="safestance-cards"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card" id="card">
            <img class="card-img-top" src="..." alt="safestance-cards"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card" id="card">
            <img class="card-img-top" src="..." alt="safestance-cards"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        {/* Map API Holder */}

        <div id="map"></div>

        <div className="row">
          <div className="col-lg-12" id="map-holder">
            <h1>Map API Holder</h1>
          </div>
        </div>

        <div id="list-title">
          <h3>Explore stores in your area</h3>
          <hr></hr>
        </div>

        {/* Map Location List */}

<div id="list-box">
        <div class="card" id="list">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/business" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" id="list">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/business" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" id="list">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/business" class="btn btn-primary">
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
