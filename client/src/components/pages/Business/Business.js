import React, { Component } from "react";
import "./biz.css";
import mask from "../../../assets/images/mask.png";
import hand from "../../../assets/images/hygiene.png";
import distance from "../../../assets/images/distance.png";
import cash from "../../../assets/images/cash.png";
import like from "../../../assets/images/like.png";
import dislike from "../../../assets/images/dislike.png";
import map from "../../../assets/images/map.png";
import API from "../../../utils/API";

// Class Components

class Business extends Component {
  state = {
    business: {},
    inline: 0,
    instore: 0,
 
  };

  // Mount

  componentDidMount() {
    API.getBiz(this.props.match.params.id)
      .then((res) => this.setState({ business: res.data }))
      .catch((err) => console.log(err));
   
  }

//  Click event listener

  handleBtnClick = event => {
    event.preventDefault();
    console.log("Clicked!")
    this.updateBiz();
    
  };

  // Create check-in click variable

  updateBiz= () => {
    let checkin = {
      
      inline: this.state.business.inline +1
      
    
    };

    console.log("Checkin value:", checkin)
    // run update API

    
    API.updateBiz(this.props.match.params.id, checkin).then((res) => {
      console.log("Res Data:", res.data)
this.setState({business: res.data})
      console.log("Data saved!", res)
    });
  };

  // Render page

  render() {
    return (
      <div>
        <div className="container">

          {/* Jumbotron */}
          <div className="jumbotron" id="jumbo"></div>


{/* Check-in button */}
          <div className="col-lg-12" id="btn-cont">
            <a
              className="btn btn-primary btn-lg btn-block"
              href="null"
              role="button"
              onClick={this.handleBtnClick}
            >
              + CHECK-IN!
            </a>
          </div>

          {/* Social Distance Thumbs */}

          <div className="row" id="like-holder">
            <div className="col-md-3 text-center" id="voters1">
              <img src={mask} alt="mask" width="70" height="70" id="mask"></img>
              <div className="row">
                <div className="col-md-3">{/* <small>1000</small> */}</div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                  ></img>
                </div>

                <div className="col-md-3">{/* <small>1000</small> */}</div>
              </div>
            </div>
            <div className="col-md-3 text-center" id="voters2">
              <img src={hand} alt="mask" width="60" height="60" id="hand"></img>
              <div className="row">
                <div className="col-md-3">{/* <small>1000</small> */}</div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                  ></img>
                </div>

                <div className="col-md-3">{/* <small>1000</small> */}</div>
              </div>
            </div>
            <div className="col-md-3 text-center" id="voters3">
              <img
                src={distance}
                alt="mask"
                width="60"
                height="60"
                id="distance"
              ></img>
              <div className="row">
                <div className="col-md-3">{/* <small>1000</small> */}</div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                  ></img>
                </div>

                <div className="col-md-3">{/* <small>1000</small> */}</div>
              </div>
            </div>

            <div className="col-md-3 text-center" id="voters4">
              <img src={cash} alt="mask" width="60" height="60" id="cash"></img>
              <div className="row">
                <div className="col-md-3">{/* <small>1000</small> */}</div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                  ></img>
                </div>

                <div className="col-md-3">{/* <small>1000</small> */}</div>
              </div>
            </div>
          </div>

          {/* Business Name and Map Holder */}

          <div className="row" id="info-holder">
            <div className="col-lg-8">
              <div className="col-lg-12" id="store-title">
                <h3>{this.state.business.bizname}</h3>

                <hr />
              </div>


              <img src={map} alt="map" id="map"></img>
            </div>

            {/* Business and Line Info */}

            <div className="col-lg-4" id="hours-info">
              <div className="row">
                <div className="col-lg-12 text-center" id="store-header">
                  <h3>Store Traffic</h3>
                  <small>Max Capacity: 12</small>

                  <hr />

                  <div className="row">
                    <div className="col-lg-6 text-center traffic">
                      <h4>
                        In-Store: <span>{this.state.instore}</span>
                      </h4>
                    </div>

                    <div className="col-lg-6 text-center traffic">
                      <h4>
                        In-Line: <span>{this.state.business.inline}</span>
                      </h4>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h3>Store Hours</h3>
                      <hr />

                      <div className="text-center" id="hours-table">
                        <table>
                          <tbody>
                          <tr>
                            <th>Sunday: </th>
                            <td>Closed</td>
                          </tr>
                          <tr>
                            <th>Monday: </th>
                            <td>{this.state.business.storeopen}am - {this.state.business.storeclose}pm</td>
                          </tr>
                          <tr>
                            <th>Tuesday: </th>
                            <td>{this.state.business.storeopen}am - {this.state.business.storeclose}pm</td>
                          </tr>
                          <tr>
                            <th>Wednesday: </th>
                            <td>{this.state.business.storeopen}am - {this.state.business.storeclose}pm</td>
                          </tr>
                          <tr>
                            <th>Thursday: </th>
                            <td>{this.state.business.storeopen}am - {this.state.business.storeclose}pm</td>
                          </tr>
                          <tr>
                            <th>Friday: </th>
                            <td>{this.state.business.storeopen}am - {this.state.business.storeclose}pm</td>
                          </tr>
                          <tr>
                            <th>Saturday: </th>
                            <td>{this.state.business.storeopen}am - {this.state.business.storeclose}pm</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
