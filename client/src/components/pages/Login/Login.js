import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authAcations";
import classnames from "classnames"; 
import "./login.css";
// import API from "../../../utils/API";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user nagivates to Login page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/") // push user to the homepage
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); 
  }

  render() {
    const { errors } = this.state;

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
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      type="email"
                      className={classnames("form-control", {invalid: errors.email || errors.emailnotfound})}
                      id="email"
                      placeholder="Your Email"
                    ></input>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>


                  <div className="col-sm-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      type="password"
                      className={classnames("form-control", {invalid: errors.password || errors.passwordincorrect})}
                      id="password"
                      placeholder="Enter your password"
                    ></input>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <button type="button" className="btn btn-primary btn-md btn-block" id="log-btn" onClick={this.onSubmit}>Login</button>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);