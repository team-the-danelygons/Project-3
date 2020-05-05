import React, { Component } from "react";
import "./biz.css";
import mask from "../../../assets/images/mask.png";
import hand from "../../../assets/images/hygiene.png";
import distance from "../../../assets/images/distance.png";
import cash from "../../../assets/images/cash.png";
import like from "../../../assets/images/like.png";
import dislike from "../../../assets/images/dislike.png";
// import map from "../../../assets/images/map.png";
import API from "../../../utils/API";



// Class Components

class Business extends Component {
  state = {
    business: {},
    inline: 0,
    instore: 0,
    btnColor: "greenyellow",
    checktext: "+ CHECK-IN",
  };

  // Mount

  componentDidMount() {
    this.loadPage();
  }

  // Load Page data

  loadPage = () => {
    API.getBiz(this.props.match.params.id)
      .then((res) => this.setState({ business: res.data }))
      .catch((err) => console.log(err));
  };

  //  Mask Clicks

  handleMaskThumbUpClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateMaskThumbsUp();
  };

  handleMaskThumbDownClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateMaskThumbsDown();
  };

  //  Sanitizer Clicks

  handleSanThumbUpClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateSanThumbsUp();
  };

  handleSanThumbDownClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateSanThumbsDown();
  };

  //  Distance Clicks

  handleDisThumbUpClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateDisThumbsUp();
  };

  handleDisThumbDownClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateDisThumbsDown();
  };

  //  Cash Clicks

  handleCashThumbUpClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateCashThumbsUp();
  };

  handleCashThumbDownClick = (event) => {
    event.preventDefault();
    this.loadPage();

    this.updateCashThumbsDown();
  };

  //Mask db update

  updateMaskThumbsUp = () => {
    let maskUp = {
      maskthumbsup: this.state.business.maskthumbsup + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, maskUp).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  updateMaskThumbsDown = () => {
    let maskDown = {
      maskthumbsdown: this.state.business.maskthumbsdown + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, maskDown).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  //Sanitizer db update

  updateSanThumbsUp = () => {
    let sanUp = {
      santhumbsup: this.state.business.santhumbsup + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, sanUp).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  updateSanThumbsDown = () => {
    let sanDown = {
      santhumbsdown: this.state.business.santhumbsdown + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, sanDown).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  //Distance db update

  updateDisThumbsDown = () => {
    let disDown = {
      disthumbsdown: this.state.business.disthumbsdown + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, disDown).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  updateDisThumbsUp = () => {
    let disUp = {
      disthumbsup: this.state.business.disthumbsup + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, disUp).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  //Cash db update

  updateCashThumbsDown = () => {
    let cashDown = {
      cashthumbsdown: this.state.business.cashthumbsdown + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, cashDown).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  updateCashThumbsUp = () => {
    let cashUp = {
      cashthumbsup: this.state.business.cashthumbsup + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, cashUp).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  handleBtnClick = (event) => {
    event.preventDefault();
    this.loadPage();

    if (
      this.state.business.instore >= 12 &&
      this.state.btnColor === "greenyellow"
    ) {
      this.updateLine();
      console.log("Line Updated!");
      this.setState({
        btnColor: "red",
        checktext: "- CHECK-OUT",
      });
      // if (this.state.btnColor === "greenyellow") {
      //   this.setState({
      //     btnColor: "red",
      //     checktext: "- CHECK-OUT",
      //   });
      // } else {
      //   this.setState({
      //     btnColor: "greenyellow",
      //     checktext: "+ CHECK-IN",
      //   });
      // }
    } else {
      if (this.state.btnColor === "red") {
        this.setState({
          btnColor: "greenyellow",
          checktext: "+ CHECK-IN",
        });
        // this.updateStore();
        this.checkoutStore();
        console.log("In Store Updated!");
      } else {
        this.setState({
          btnColor: "red",
          checktext: "- CHECK-OUT",
        });
        // this.updateStore();
        this.updateStore();
        console.log("In Store Updated!");
      }
    }
  };

  // Create check-in click variable

  updateLine = () => {
    let checkinline = {
      inline: this.state.business.inline + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, checkinline).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  updateStore = () => {
    let checkinstore = {
      instore: this.state.business.instore + 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, checkinstore).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  checkoutStore = () => {
    let checkinstore = {
      instore: this.state.business.instore - 1,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, checkinstore).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
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
              style={{ backgroundColor: this.state.btnColor }}
            >
              {this.state.checktext}
            </a>
          </div>

          {/* Mask Distance Thumbs */}

          <div className="row" id="like-holder">
            <div className="col-md-3 text-center" id="voters1">
              <img src={mask} alt="mask" width="70" height="70" id="mask"></img>
              <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="maskup"
                    onClick={this.handleMaskThumbUpClick}
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="maskdown"
                    onClick={this.handleMaskThumbDownClick}
                  ></img>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3 text-center"></div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.maskthumbsup}</small>
                </div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.maskthumbsdown}</small>
                </div>
                <div className="col-md-3 text-center"></div>
              </div>
            </div>

            {/* Sanitizer render */}

            <div className="col-md-3 text-center" id="voters2">
              <img src={hand} alt="mask" width="60" height="60" id="hand"></img>
              <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                    onClick={this.handleSanThumbUpClick}
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                    onClick={this.handleSanThumbDownClick}
                  ></img>
                </div>

                <div className="col-md-3"></div>
              </div>
              <div className="row">
                <div className="col-md-3 text-center"></div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.santhumbsup}</small>
                </div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.santhumbsdown}</small>
                </div>
                <div className="col-md-3 text-center"></div>
              </div>
            </div>

            {/* Distance render */}

            <div className="col-md-3 text-center" id="voters3">
              <img
                src={distance}
                alt="mask"
                width="60"
                height="60"
                id="distance"
              ></img>
              <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                    onClick={this.handleDisThumbUpClick}
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                    onClick={this.handleDisThumbDownClick}
                  ></img>
                </div>

                <div className="col-md-3"></div>
              </div>

              <div className="row">
                <div className="col-md-3 text-center"></div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.disthumbsup}</small>
                </div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.disthumbsdown}</small>
                </div>
                <div className="col-md-3 text-center"></div>
              </div>
            </div>

            <div className="col-md-3 text-center" id="voters4">
              <img src={cash} alt="mask" width="60" height="60" id="cash"></img>
              <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-3">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                    onClick={this.handleCashThumbUpClick}
                  ></img>
                </div>
                <div className="col-md-3">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                    onClick={this.handleCashThumbDownClick}
                  ></img>
                </div>

                <div className="col-md-3"></div>
              </div>

              <div className="row">
                <div className="col-md-3 text-center"></div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.cashthumbsup}</small>
                </div>
                <div className="col-md-3 text-center">
                  <small>{this.state.business.cashthumbsdown}</small>
                </div>
                <div className="col-md-3 text-center"></div>
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

              <iframe
                id="map"
                width={900}
                height={600}
                title="myFrame"
                frameborder={0}
                src= {`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ&q=${this.state.business.address}`}
                allowfullscreen
              ></iframe>
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
                        In-Store: <span>{this.state.business.instore}</span>
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
                              <td>
                                {this.state.business.storeopen}am -{" "}
                                {this.state.business.storeclose}pm
                              </td>
                            </tr>
                            <tr>
                              <th>Tuesday: </th>
                              <td>
                                {this.state.business.storeopen}am -{" "}
                                {this.state.business.storeclose}pm
                              </td>
                            </tr>
                            <tr>
                              <th>Wednesday: </th>
                              <td>
                                {this.state.business.storeopen}am -{" "}
                                {this.state.business.storeclose}pm
                              </td>
                            </tr>
                            <tr>
                              <th>Thursday: </th>
                              <td>
                                {this.state.business.storeopen}am -{" "}
                                {this.state.business.storeclose}pm
                              </td>
                            </tr>
                            <tr>
                              <th>Friday: </th>
                              <td>
                                {this.state.business.storeopen}am -{" "}
                                {this.state.business.storeclose}pm
                              </td>
                            </tr>
                            <tr>
                              <th>Saturday: </th>
                              <td>
                                {this.state.business.storeopen}am -{" "}
                                {this.state.business.storeclose}pm
                              </td>
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
