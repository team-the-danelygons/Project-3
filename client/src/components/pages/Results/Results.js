import React, { Component } from "react";
import "./results.css";





// import map from "../../../assets/images/map.png";
// import API from "../../../utils/API";

class Results extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          query: "",

          name: "",
    
          results: [],

          
        };
      }

      componentDidMount() {
        this.props.loadBiz();
       
      
      }



 
     // updateState = () => {
      //     this.setState({results: this.props.searchQuery})
      // }
 // update component with contstrugor for props
 // add componenentDidMount to load Businesses based on this.props.searchQuery
 // Render results by updating state

  render() {
   


    return (
      <>

<div className="col-lg-12" id="header-text">
              <h2>Search Results</h2>  <h5>
             {this.props.results.length} locations found:
              </h5>
              <hr></hr>
            
            </div>
   
   <div className="row" id="pop-row">
   {this.props.results.map((business) => (
      <div className="card-deck flex-nowrap hoverable " id="pop-cards">
        <div className="card view overlay zoom " id="card" key={business._id}>
          <img
            className="card-img-top img-fluid"
            src={
                business.image && business.image.length
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${business.image[0].photo_reference}&key=AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ`
                : "https://i.ibb.co/LJT0XW5/placeholder-001.jpg"
            }
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
    
      </div>
   ))}
    </div>
   </>
    );
  }
}

export default Results;