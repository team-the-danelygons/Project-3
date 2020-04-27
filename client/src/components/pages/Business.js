import React from "react";
import "./biz.css";
import mask from "../../assets/images/mask.png";
import hand from "../../assets/images/hygiene.png";
import distance from "../../assets/images/distance.png";
import cash from "../../assets/images/cash.png";
import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike.png";
import map from "../../assets/images/map.png";

function Business() {
  return (
    <div>
      <div className="container">
        <div className="jumbotron" id="jumbo"></div>

        <div className="col-lg-12" id="btn-cont">
          <a
            className="btn btn-primary btn-lg btn-block"
            href="/"
            role="button"
          >
            + CHECK-IN!
          </a>
        </div>

        <div className="row" id="like-holder">
          <div className="col-md-3 text-center" id="voters1">
            <img src={mask} alt="mask" width="70" height="70" id="mask"></img>
            <div className="row">
              <div className="col-md-3">{/* <small>1000</small> */}</div>

              <div className="col-md-3">
                <img src={like} alt="mask" width="30" height="30" id="up"></img>
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
                <img src={like} alt="mask" width="30" height="30" id="up"></img>
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
                <img src={like} alt="mask" width="30" height="30" id="up"></img>
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
                <img src={like} alt="mask" width="30" height="30" id="up"></img>
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

        <div className="row" id="info-holder">
      
          <div className="col-lg-8">
            <div className="col-lg-12" id="store-title">
            <h3>Safeway - Superior, CO</h3>
           
            <hr/>
          
            </div>
           
            <img src={map} alt="map" id="map"></img>
          </div>

          <div className="col-lg-4" id="hours-info">
            <div className="row">
              <div className="col-lg-12 text-center" id="store-header">
                <h3>Store Traffic</h3>
                <small>Max Capacity: 12</small>

                <hr />

                <div className="row">
                  <div className="col-lg-6 text-center traffic">
                    <h4>
                      In-Store: <span>12</span>
                    </h4>
                  </div>

                  <div className="col-lg-6 text-center traffic">
                    <h4>
                      In-Line: <span>4</span>
                    </h4>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h3>Store Hours</h3>
                    <hr/>

                    <div className="text-center" id="hours-table">
                      <table >
                        <tr>
                          <th>Sunday: </th>
                          <td>Closed</td>
                        </tr>
                        <tr>
                          <th>Monday: </th>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr>
                          <th>Tuesday: </th>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr>
                          <th>Wednesday: </th>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr>
                          <th>Thursday: </th>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr>
                          <th>Friday: </th>
                          <td>9am - 5pm</td>
                        </tr>
                        <tr>
                          <th>Saturday: </th>
                          <td>9am - 5pm</td>
                        </tr>
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

export default Business;
