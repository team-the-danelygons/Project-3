import React, { Component } from "react";
import "./results.css";




// import map from "../../../assets/images/map.png";
// import API from "../../../utils/API";

class Results extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
    
          results: [],
        };
      }

      componentDidMount() {
 
  this.updateState();
      }
    
updateState = () => {
    this.setState({results: this.props.searchQuery})
}
 // update component with contstrugor for props
 // add componenentDidMount to load Businesses based on this.props.searchQuery
 // Render results by updating state

  render() {

    return (
      <>
   
   <div className="row" id="pop-row">
      <div className="card-deck flex-nowrap hoverable " id="pop-cards">
        <div className="card view overlay zoom " id="card" key={this.state.results._id}>
          <img
            className="card-img-top img-fluid"
            src={
                this.state.results.image && this.state.results.image.length
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.state.results.image[0].photo_reference}&key=AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ`
                : "https://i.ibb.co/LJT0XW5/placeholder-001.jpg"
            }
            alt="safestance-cards"
            id="card-image"
          ></img>
          <div className="card-body">
            <a href={`/business/${this.state.results._id}`}>
              <h5 className="card-title">{this.state.results.bizname}</h5>
            </a>

            <p className="card-text">{this.state.results.address}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Currently in-store: {this.state.results.instore}
            </small>
          </div>
        </div>
    
      </div>
    </div>
   </>
    );
  }
}

export default Results;