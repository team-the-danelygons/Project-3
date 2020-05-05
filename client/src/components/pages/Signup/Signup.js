import React, { Component } from "react";
import { withRouter  } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser  } from "../../../actions/authAcations";
import classnames from "classnames";
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

  componentDidMount() {
    // If logged in and user navigates to Signup page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
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
                      className={classnames("form-control", {invalid: errors.name})}
                      id="name"
                      placeholder="Your Name"
                    ></input>
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <div className="col-sm-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      type="email"
                      className={classnames("form-control", {invalid: errors.email})}
                      id="email"
                      placeholder="Email"
                    ></input>
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div className="col-sm-12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                      type="password"
                      className={classnames("form-control", {invalid: errors.password})}
                      id="password"
                      placeholder="Enter a password"
                    ></input>
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="col-sm-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      type="password"
                      className={classnames("form-control", {invalid: errors.password2})}
                      id="password2"
                      placeholder="Re-enter the password"
                    ></input>
                    <span className="red-text">{errors.password2}</span>
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

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
