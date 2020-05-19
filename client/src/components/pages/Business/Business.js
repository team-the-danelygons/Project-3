import React, { Component } from "react";
import "./biz.css";
import mask from "../../../assets/images/mask.png";
import hand from "../../../assets/images/hygiene.png";
import distance from "../../../assets/images/distance.png";
import cash from "../../../assets/images/cash.png";
import like from "../../../assets/images/like.png";
import dislike from "../../../assets/images/dislike.png";
import gold from "../../../assets/images/gold.png";
import silver from "../../../assets/images/silver.png";
import bronze from "../../../assets/images/bronze.png";
import claimed from "../../../assets/images/owned.png";
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
      loggedin: false,
    };
  }

  // Mount

  componentDidMount() {
    const { user } = this.props.auth;
    console.log(user);
    console.log("The userID is", user.id);
    this.loadPage();
    if (user.id) {
      this.setState({ loggedin: true });
    }
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
        let totalMaskThumbs =
          thumbs.maskthumbsup.length + thumbs.maskthumbsdown.length;
        let totalSanThumbs =
          thumbs.santhumbsup.length + thumbs.santhumbsdown.length;
        let totalDisThumbs =
          thumbs.disthumbsup.length + thumbs.disthumbsdown.length;
        let totalCashThumbs =
          thumbs.cashthumbsup.length + thumbs.cashthumbsdown.length;
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
          this.updateGoldRating();
          console.log("The grade is an A");
        } else if (grade >= 80 && grade <= 89) {
          this.updateSilverRating();
          console.log("The grade is a B");
        } else if (grade >= 70 && grade <= 79) {
          this.updateBronzeRating();
          console.log("The grade is C");
        } else if (grade >= 60 && grade <= 69) {
          console.log("The grade is a D");
        } else {
          console.log("This business has not yet been graded.");
        }
      })
      .catch((err) => console.log(err));
  };

  updateGoldRating = () => {
    let rating = {
      saferating: "gold",
    };

    // run update API

    API.updateBiz(this.props.match.params.id, rating).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  updateSilverRating = () => {
    let rating = {
      saferating: "silver",
    };

    // run update API

    API.updateBiz(this.props.match.params.id, rating).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  updateBronzeRating = () => {
    let rating = {
      saferating: "bronze",
    };

    // run update API

    API.updateBiz(this.props.match.params.id, rating).then((res) => {
      console.log("Res Data:", res.data);
      this.setState({ business: res.data });
      console.log("Data saved!", res);
    });
  };

  //  Mask Clicks

  handleMaskThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();
      this.updateMaskThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleMaskThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();

      this.updateMaskThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  //  Sanitizer Clicks

  handleSanThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();

      this.updateSanThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleSanThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();

      this.updateSanThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  //  Distance Clicks

  handleDisThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();

      this.updateDisThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleDisThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();

      this.updateDisThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  //  Cash Clicks

  handleCashThumbUpClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();

      this.updateCashThumbsUp();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  handleCashThumbDownClick = (event) => {
    event.preventDefault();
    if (this.state.loggedin === true) {
      this.loadPage();

      this.updateCashThumbsDown();
    } else {
      alert("You must be logged in order to use the thumbs up or down button.");
    }
  };

  //Mask db update

  updateMaskThumbsUp = () => {
    const { user } = this.props.auth;

    if (this.state.business.maskthumbsup.indexOf(user.id) >= 0) {
      return;
    } else {
      let maskUp = {
        maskthumbsup: this.state.business.maskthumbsup.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, maskUp).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }

    // run update API
  };

  updateMaskThumbsDown = () => {
    const { user } = this.props.auth;

    if (this.state.business.maskthumbsdown.indexOf(user.id) >= 0) {
      return;
    } else {
      let maskDown = {
        maskthumbsdown: this.state.business.maskthumbsdown.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, maskDown).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }
  };

  //Sanitizer db update

  updateSanThumbsUp = () => {
    const { user } = this.props.auth;

    if (this.state.business.santhumbsup.indexOf(user.id) >= 0) {
      return;
    } else {
      let sanUp = {
        santhumbsup: this.state.business.santhumbsup.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, sanUp).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }
  };

  updateSanThumbsDown = () => {
    const { user } = this.props.auth;

    if (this.state.business.santhumbsdown.indexOf(user.id) >= 0) {
      return;
    } else {
      let sanDown = {
        santhumbsdown: this.state.business.santhumbsdown.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, sanDown).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }
  };

  //Distance db update

  updateDisThumbsDown = () => {
    const { user } = this.props.auth;

    if (this.state.business.disthumbsdown.indexOf(user.id) >= 0) {
      return;
    } else {
      let disDown = {
        disthumbsdown: this.state.business.disthumbsdown.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, disDown).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }
  };

  updateDisThumbsUp = () => {
    const { user } = this.props.auth;

    if (this.state.business.disthumbsup.indexOf(user.id) >= 0) {
      return;
    } else {
      let disUp = {
        disthumbsup: this.state.business.disthumbsup.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, disUp).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }
  };

  //Cash db update

  updateCashThumbsUp = () => {
    const { user } = this.props.auth;

    if (this.state.business.cashthumbsup.indexOf(user.id) >= 0) {
      return;
    } else {
      let cashUp = {
        cashthumbsup: this.state.business.cashthumbsup.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, cashUp).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }
  };

  updateCashThumbsDown = () => {
    const { user } = this.props.auth;

    if (this.state.business.cashthumbsdown.indexOf(user.id) >= 0) {
      return;
    } else {
      let cashDown = {
        cashthumbsdown: this.state.business.cashthumbsdown.push(user.id),
      };

      API.updateBiz(this.props.match.params.id, cashDown).then((res) => {
        console.log("Res Data:", res.data);
        this.setState({ business: res.data });
        console.log("Data saved!", res);
      });
    }
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
    let star;
    if (ownerID === user.id) {
      // verified = <img src={owner} alt="claimed"></img>;
      verified = (
        <div className="row" id="owner-title">
          <div className="col-lg-12 text center" id="biz-view">
            <h3>Business Management View</h3>
          </div>
        </div>
      );
    } else {
      verified = null;
    }

    if (this.state.business.saferating === "gold") {
      star = <img src={gold} alt="claimed" id="star"></img>;
    }

    if (this.state.business.saferating === "silver") {
      star = <img src={silver} alt="claimed" id="star"></img>;
    }

    if (this.state.business.saferating === "bronze") {
      star = <img src={bronze} alt="claimed" id="star"></img>;
    }

    return (
      <div>
        <div className="container">
          {verified}
          {/* Jumbotron */}
          <div
            className="jumbotron"
            id="jumbo"
            style={{ backgroundImage: "url(" + this.state.image + ")" }}
          >
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">{star}</div>
            </div>
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
            <div className="col-sm-3 col-md-3 col-lg-3 text-center" id="voters1">
              <img src={mask} alt="mask" width="60" height="60" id="mask"></img>
              <div className="row">
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>

                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-up-col">
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
                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-down-col">
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
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
              </div>

              <div className="row">
              <div className="col-md-3 col-sm-3" id="t-up-col"></div>
                <div className="col-md-3 col-sm-3 text-center" id="t-up-col">
                  <small>
                    {this.state.business.maskthumbsup
                      ? this.state.business.maskthumbsup.length
                      : 0}
                  </small>
                </div>
                <div className="col-md-3 col-sm-3 text-center" id="t-down-col">
                  <small>
                    {this.state.business.maskthumbsdown
                      ? this.state.business.maskthumbsdown.length
                      : 0}
                  </small>
                </div>
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
              </div>
            </div>

            {/* Sanitizer render */}

            <div className="col-lg-3 col-md-3 col-sm-3  text-center" id="voters2">
              <img src={hand} alt="mask" width="60" height="60" id="hand"></img>
              <div className="row">
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>

                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-up-col">
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
                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-down-col">
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

                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
              </div>
              <div className="row">
              <div className="col-md-3 col-sm-3" id="t-up-col"></div>
                <div className="col-md-3 col-sm-3 text-center" id="t-up-col">
                  <small>
                    {this.state.business.santhumbsup
                      ? this.state.business.santhumbsup.length
                      : 0}
                  </small>
                </div>
                <div className="col-md-3 col-sm-3 text-center" id="t-down-col">
                  <small>
                    {this.state.business.santhumbsdown
                      ? this.state.business.santhumbsdown.length
                      : 0}
                  </small>
                </div>
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
              </div>
            </div>

            {/* Distance render */}

            <div className="col-md-3 col-sm-3 col-lg-3  text-center" id="voters3" >
              <img
                src={distance}
                alt="mask"
                width="60"
                height="60"
                id="distance"
              ></img>
              <div className="row">
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>

                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-up-col">
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
                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-down-col">
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

                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
              </div>

              <div className="row">
              <div className="col-md-3 col-sm-3" id="t-up-col"></div>
                <div className="col-md-3 col-sm-3 text-center" id="t-up-col">
                  <small>
                    {this.state.business.disthumbsup
                      ? this.state.business.disthumbsup.length
                      : 0}
                  </small>
                </div>
               
                <div className="col-md-3 col-sm-3 text-center" id="t-down-col">
                  <small>
                    {this.state.business.disthumbsdown
                      ? this.state.business.disthumbsdown.length
                      : 0}
                  </small>
                </div>
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
                <div className="col-md-3 col-sm-3 text-center"></div>
              </div>
            </div>

            {/* Cash render */}

            <div className="col-md-3 col-sm-3  text-center" id="voters4">
              <img src={cash} alt="mask" width="60" height="60" id="cash"></img>
              <div className="row">
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>

                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-up-col">
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
                <div className="col-md-3 col-sm-3 view overlay zoom" id="t-down-col">
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

                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
              </div>

              <div className="row">
              <div className="col-md-3 col-sm-3" id="t-up-col"></div>
                <div className="col-md-3 col-sm-3 text-center" id="t-up-col">
                  <small>
                    {this.state.business.cashthumbsup
                      ? this.state.business.cashthumbsup.length
                      : 0}
                  </small>
                </div>
                <div className="col-md-3 col-sm-3 text-center" id="t-down-col">
                  <small>
                    {this.state.business.cashthumbsdown
                      ? this.state.business.cashthumbsdown.length
                      : 0}
                  </small>
                </div>
                <div className="col-md-3 col-sm-3" id="t-up-col"></div>
              </div>
            </div>
          </div>

          {/* Business Name and Map Holder */}

          <div className="row" id="info-holder">
            <div className="col-md-8 col-lg-8" id="info-row">
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

            <div className="col-md-4 col-lg-4" id="hours-info">
              <div className="row">
                <div className="col-lg-12 text-center" id="store-header">
                  <h3>Store Traffic</h3>
                  <small>Max Capacity: 12</small>

                  <hr />

                  <div className="row" >
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
                  ) : (
                    <div className="row text-center">
                      <div className="col-lg-12" id="claimed">
                        <h5>
                          <img src={claimed} alt="owned"></img> Business Claimed
                        </h5>
                      </div>
                    </div>
                  )}

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
