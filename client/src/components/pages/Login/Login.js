import React, { Component } from "react";
import "./login.css";
// import API from "../../../utils/API";

class Login extends Component {
  state = {
    business: [],
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center text-black">
            <div className="col-10 col-md-8 col-lg-6" id="form-bc">
              <form className="form-example" action="" method="post" id="form-title">
                <h1>Log In</h1>
                <hr></hr>
                <p className="description">
                  Welcome back!
                </p>
                <div className="form-group row" id="signup-form">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Your Name"
                    ></input>
                  </div>
              
              
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    ></input>
                    <button type="button" className="btn btn-primary btn-md btn-block" id="log-btn">Log In</button>
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

export default Login;
