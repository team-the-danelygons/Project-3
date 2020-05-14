import React, { Component } from "react";
import "./owner.css";

// import API from "../../../utils/API";

class Owner extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      bizname: "",
      address: "",
      tin: "",
      message: "",
    };
  }

  componentDidMount() {}

  resetForm(){
    
    this.setState({name: "", email: "", bizname:"", address: "", tin: "", message: ""})
 }

  handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
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

  render() {
    return (
      <div id="form-back">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center text-black">
            <div className="col-10 col-md-8 col-lg-6" id="form-bc">
              <form
                className="form-example"
                action=""
                id="form-title"
                onSubmit={this.handleSubmit.bind(this)} 
                method="POST"

              >
                <h1>Take control of your business</h1>
                <hr></hr>
                <p className="description">
                  Provide your business info and flag discrepencies for review
                </p>
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

                    <button
                      type="button"
                      className="btn btn-md btn-block"
                      id="help-btn"
                      onClick={this.onSubmit}
                    >
                      Submit for review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Owner;
