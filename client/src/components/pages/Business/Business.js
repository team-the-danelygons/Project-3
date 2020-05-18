import React, { Component } from "react";
import "./biz.css";
import mask from "../../../assets/images/mask.png";
import hand from "../../../assets/images/hygiene.png";
import distance from "../../../assets/images/distance.png";
import cash from "../../../assets/images/cash.png";
import like from "../../../assets/images/like.png";
import dislike from "../../../assets/images/dislike.png";
import owner from "../../../assets/images/claimed.png";
import claimed from "../../../assets/images/owned.png"
// import map from "../../../assets/images/map.png";
import API from "../../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authAcations";
import axios from "axios";

// Class Components

class Business extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      bizname: "",
      address: "",
      tin: "",
      message: "",
      business: {},
      inline: 0,
      instore: 0,
      image: "",
      btnColor: "greenyellow",
      checktext: "+ CHECK-IN",
    };
  }

  // Mount

  componentDidMount() {
    const { user } = this.props.auth;
    console.log(user);
    console.log("The userID is", user.id);
    this.loadPage();
    // this.props.updateOwnerID(user.id)
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      bizname: "",
      address: "",
      tin: "",
      message: "",
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        this.updateBizValidation();
        alert("Message Sent.");

        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onBizNameChange(event) {
    this.setState({ bizname: event.target.value });
  }

  onAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  onTinChange(event) {
    this.setState({ tin: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  // Load Page data

  loadPage = () => {
    API.getBiz(this.props.match.params.id)
      .then((res) => {
        this.setState({
          business: res.data,
          image:
            res.data.image && res.data.image.length
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${res.data.image[0].photo_reference}&key=AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ`
              : "https://i.ibb.co/6HygT0r/jumbohome.jpg",
        });
        console.log(this.state.loggedIn);
        // Getting the total number of thumbs
        let thumbs = res.data;
        console.log(thumbs);
        let totalMaskThumbs = thumbs.maskthumbsup + thumbs.maskthumbsdown;
        let totalSanThumbs = thumbs.santhumbsup + thumbs.santhumbsdown;
        let totalDisThumbs = thumbs.disthumbsup + thumbs.disthumbsdown;
        let totalCashThumbs = thumbs.cashthumbsup + thumbs.cashthumbsdown;
        let totalThumbs =
          totalMaskThumbs + totalSanThumbs + totalDisThumbs + totalCashThumbs;
        console.log("The total number of thumbs is", totalThumbs);

        // Get the total number of thumbs up
        let totalThumbsUp =
          thumbs.maskthumbsup +
          thumbs.santhumbsup +
          thumbs.disthumbsup +
          thumbs.cashthumbsup;
        console.log("The total number of thumbs up is", totalThumbsUp);

        // Get the grade
        let grade = Math.floor((totalThumbsUp / totalThumbs) * 100);
        console.log("The grade for this business is", grade);

        // grading system
        if (grade >= 90 && grade <= 100) {
          console.log("The grade is an A");
        } else if (grade >= 80 && grade <= 89) {
          console.log("The grade is a B");
        } else if (grade >= 70 && grade <= 79) {
          console.log("The grade is C");
        } else if (grade >= 60 && grade <= 69) {
          console.log("The grade is a D");
        } else {
          console.log("This business has not yet been graded.");
        }
      })
      .catch((err) => console.log(err));
  };

  //  Mask Clicks

  handleMaskThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();
      this.updateMaskThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleMaskThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();

      this.updateMaskThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  //  Sanitizer Clicks

  handleSanThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();

      this.updateSanThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleSanThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();

      this.updateSanThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  //  Distance Clicks

  handleDisThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();

      this.updateDisThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleDisThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();

      this.updateDisThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  //  Cash Clicks

  handleCashThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();

      this.updateCashThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleCashThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedIn) {
      this.loadPage();

      this.updateCashThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
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

  updateBizValidation = () => {
    const { user } = this.props.auth;
    console.log("The userID AGAIN", user.id);
    let bizClaim = {
      bizverified: true,
      bizownerID: user.id,
    };

    // run update API

    API.updateBiz(this.props.match.params.id, bizClaim).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

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
    // let image = this.state.business.image[0].photo_reference
    const { user } = this.props.auth;
    let ownerID = this.state.business.bizownerID;
    let verified;
    if (ownerID === user.id) {
      verified = <img src={owner} alt="claimed"></img>;
    } else {
      verified = null;
    }

    return (
      <div>
        <div className="container">
          {/* Jumbotron */}
          <div
            className="jumbotron"
            id="jumbo"
            style={{ backgroundImage: "url(" + this.state.image + ")" }}
          >
            {verified}
          </div>

          {/* Check-in button */}
          <div className="col-lg-12" id="btn-cont">
            <a
              className="btn  btn-lg btn-block"
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

                <div className="col-md-3 view overlay zoom">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="maskup"
                    onClick={this.handleMaskThumbUpClick}
                    className="img-fluid"
                  ></img>
                </div>
                <div className="col-md-3 view overlay zoom">
                  <img
                    src={dislike}
                    alt="mask"
                    width="29"
                    height="0"
                    id="maskdown"
                    onClick={this.handleMaskThumbDownClick}
                    className="img-fluid"
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

                <div className="col-md-3 view overlay zoom">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                    onClick={this.handleSanThumbUpClick}
                    className="img-fluid"
                  ></img>
                </div>
                <div className="col-md-3 view overlay zoom">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                    onClick={this.handleSanThumbDownClick}
                    className="img-fluid"
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

                <div className="col-md-3 view overlay zoom">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                    onClick={this.handleDisThumbUpClick}
                    className="img-fluid"
                  ></img>
                </div>
                <div className="col-md-3 view overlay zoom">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                    onClick={this.handleDisThumbDownClick}
                    className="img-fluid"
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

                <div className="col-md-3 view overlay zoom">
                  <img
                    src={like}
                    alt="mask"
                    width="30"
                    height="30"
                    id="up"
                    onClick={this.handleCashThumbUpClick}
                    className="img-fluid"
                  ></img>
                </div>
                <div className="col-md-3 view overlay zoom">
                  <img
                    src={dislike}
                    alt="mask"
                    width="30"
                    height="30"
                    id="down"
                    onClick={this.handleCashThumbDownClick}
                    className="img-fluid"
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
                frameBorder={0}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ&q=${this.state.business.address}`}
                allowFullScreen
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

                  {this.state.business.bizverified === false ? (

                  <div className="row">
                    <div className="col-lg-12" id="btn-claim">
                      <div className="text-center">
                        <button
                          className="btn  btn-lg btn-block"
                          data-toggle="modal"
                          data-target="#formModal"
                        >
                          Claim Business
                        </button>
                      </div>
                    </div>
                  </div>

                  ): (
                    <div className="row text-center">
                       <div className="col-lg-12" id="claimed">
<h5><img src={claimed} alt="owned"></img> Business Claimed</h5>
</div>

                    </div>
                  )
                
                
                }

                  {/* Claim Form Modal */}

                 

                  <div
                    className="modal fade"
                    id="formModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            Take control of your business
                          </h3>
                          <br></br>

                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form
                            className="form-example"
                            action=""
                            id="form-title"
                            onSubmit={this.handleSubmit.bind(this)}
                            method="POST"
                          >
                            <div className="form-group row" id="signup-form">
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  id="name"
                                  value={this.state.name}
                                  onChange={this.onNameChange.bind(this)}
                                  placeholder="Your Name"
                                ></input>
                              </div>
                              <div className="col-sm-12">
                                <input
                                  type="email"
                                  value={this.state.email}
                                  onChange={this.onEmailChange.bind(this)}
                                  id="email"
                                  placeholder="Email"
                                ></input>
                              </div>
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  value={this.state.bizname}
                                  onChange={this.onBizNameChange.bind(this)}
                                  id="bizname"
                                  placeholder="Enter you business name"
                                ></input>
                              </div>
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  value={this.state.address}
                                  onChange={this.onAddressChange.bind(this)}
                                  id="address"
                                  placeholder="Enter your business address"
                                ></input>
                              </div>
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  value={this.state.tin}
                                  onChange={this.onTinChange.bind(this)}
                                  id="tin"
                                  placeholder="Enter your tax identification number"
                                ></input>
                              </div>
                              <div className="col-sm-12">
                                <textarea
                                  value={this.state.message}
                                  onChange={this.onMessageChange.bind(this)}
                                  id="TITLE"
                                  placeholder="Describe the data discrepency you'd like to flag for review..."
                                  row="15"
                                ></textarea>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-md btn-block"
                            id="help-btn"
                            form="form-title"

                            //  onClick={this.handleSubmit}
                          >
                            Submit for review
                          </button>
                        </div>
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

Business.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Business);
