import React, { Component } from "react";
//import logo from "./logo.svg";
//import ReactDOM from 'react-dom'
import "./App.css";
import logo from "./assets/images/logo_side.png";
import headerimg from "./assets/images/headerSMl.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faUserTimes, faHeadSideMask, faHeadSideCough, faHandsWash, faTimesCircle, faThumbsDown, faThumbsUp, faFlag, faThumbtack, faShare, faSave, faSearch
 } from '@fortawesome/free-solid-svg-icons'

import {
  Col,
  Row,
  Container,
  Navbar,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
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
            <Col border="success" style={{ backgroundColor: "#D3D3D3" }}>
              <div>
                <br></br>
                <h6 className="controlPanel">Search Stores</h6>
                <InputGroup size="sm" className="mb-3"><Button className="toTheRight" variant="secondary">
                  <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    
                  /><FontAwesomeIcon icon={faSearch} /></Button>
                <br/>
                </InputGroup>
                
                <h6 className="controlPanel">Popular Stores</h6>
                
                <p>King Soopers</p>
                <p>Walmart</p>
                <p>Home Depot</p>
                <p>Safeway</p>
              </div>
            </Col>
            <Col xs={8} className="noPadding">
              <img
                src={headerimg}
                className="noPadding"
                width="100%"
                alt="decoration"
                border="secondary"
              ></img>
              <p>Temporary Script. Search Results List (Map to select store?) or Business Stats Page will go here </p>
            </Col>
            <Col style={{ backgroundColor: "#D3D3D3" }}>
              <div>
                <br></br>
                <h6 className="controlPanel">Control Panel</h6>
                <div className="controlPanel">
                  <Col >
                    <Row className="spacing">
                      <Button className="toTheLeft" variant="success" ><FontAwesomeIcon icon={faUserCheck} /></Button>
                      <Button className="toTheRight" variant="danger"><FontAwesomeIcon icon={faUserTimes} /></Button>
                    </Row>
                    <Row className="spacing">
                      <Button className="toTheLeft" variant="success"><FontAwesomeIcon icon={faHeadSideMask} /></Button>
                      <Button className="toTheRight"variant="danger"><FontAwesomeIcon icon={faHeadSideCough} /></Button>
                    </Row>
                    <Row className="spacing">
                      <Button className="toTheLeft" variant="success"><FontAwesomeIcon icon={faHandsWash} /></Button>
                      <Button className="toTheRight"variant="danger"><FontAwesomeIcon icon={faTimesCircle} /></Button>
                    </Row>
                    <Row className="spacing">
                      <Button className="toTheLeft" variant="success"><FontAwesomeIcon icon={faThumbsUp} /></Button>
                      <Button className="toTheRight" variant="danger"><FontAwesomeIcon icon={faThumbsDown} /></Button>
                    </Row>
                    <Row className="spacing">
                      <Button className="toTheLeft" variant="secondary"><FontAwesomeIcon icon={faThumbtack} /></Button>
                      <Button className="toTheRight" variant="secondary"><FontAwesomeIcon icon={faFlag} /></Button>
                    </Row>
                    <Row className="spacing">
                      <Button className="toTheLeft" variant="secondary"><FontAwesomeIcon icon={faSave} /></Button>
                      <Button className="toTheRight" variant="secondary"><FontAwesomeIcon icon={faShare} /></Button>
                    </Row>
                  </Col>
                  <Col ></Col>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "white" }}>
              The Danelygons - Copyright 2020
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
