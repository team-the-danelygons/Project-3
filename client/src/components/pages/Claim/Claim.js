import React, { Component } from "react";
import "./claim.css";

// import API from "../../../utils/API";

class Claim extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (

      <>
       <div className="container">
       <div className="row">
            <div className="col-lg-12" id="header-text">
              <h2>Claim Your Businss With a Click</h2>
              
              <h5>
                Simply navigate to your business page and select the "Claim Business" button to get started
              </h5>
              <hr></hr>
            </div>
          </div>
       
          <div className="jumbotron" id="jumbo-claim"></div>
        </div>
      </>
    );
  }
}

export default Claim;
