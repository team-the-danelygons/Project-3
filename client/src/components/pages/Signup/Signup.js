import React, { Component } from "react";
import "./signup.css";
// import API from "../../../utils/API";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    // const newUser = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password,
    //   password2: this.state.password2
    // };
    console.log("You clicked the submit button");
  }

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center text-black">
            <div className="col-10 col-md-8 col-lg-6" id="form-bc">
              <form className="form-example" action="" method="post" id="form-title">
                <h1>Join Safestance Today</h1>
                <hr></hr>
                <p className="description">
                  Start your safe shopping experience today
                </p>
                <div className="form-group row" id="signup-form">
                  <div className="col-sm-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="col-sm-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      type="text"
                      className="form-control"
                      id="Email"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className="col-sm-12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                      type="text"
                      className="form-control"
                      id="password"
                      placeholder="Enter a password"
                    ></input>
                  </div>
                  <div className="col-sm-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      type="text"
                      className="form-control"
                      id="password2"
                      placeholder="Re-enter the password"
                    ></input>
                    <button type="button" className="btn btn-primary btn-md btn-block" id="help-btn" onClick={this.onSubmit}>Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
