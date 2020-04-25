import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< Updated upstream
=======

import logo from "./assets/images/ssfulllogo.png";
import headerimg from "./assets/images/headerSMl.png";
import {
  Col,
  Row,
  Container,
  Navbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
=======
      <>
        <Navbar bg="light navbar-light">
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt="SAVESTANCE"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <p>
              {(() => {
                switch ("this.state.login") {
                  case true:
                    return (
                      <Navbar.Text>
                        Signed in as: {"NamePlaceHolder"}
                      </Navbar.Text>
                    );
                  default:
                    return <Navbar.Text>Create Account | Sign In</Navbar.Text>;
                }
              })()}
            </p>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            <Col>
              <div>
                <br></br>
                <h6>Search Stores</h6>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </div>
            </Col>
            <Col xs={8} style={{backgroundColor: "#D3D3D3"}}>
              <img src={headerimg} width="100%" alt="decoration"></img>
            </Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>Footer</Col>
            
          </Row>
        </Container>
      </>
>>>>>>> Stashed changes
    );
  }
}

export default App;
