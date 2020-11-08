import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,InputGroup, FormControl, Form } from 'react-bootstrap';
import sarch from './images/image/sarch.png';
import olx from './images/image/olx.png';
import './header.css';


function Header() {
    return (
        <Container fluid>
            <Row className="headerRow">
                <Col  lg={3} md={4} sm={12} style={{padding:'0px'}}>
                    <div className="columImg">
                    <div>
                        <img className="olxImg" src={olx} alt="sarch" />
                    </div>
                    <Form  >
                        <InputGroup>
                            <InputGroup.Prepend>
                            </InputGroup.Prepend>
                            <img className="sarchImg" src={sarch} alt="sarch" />
                            <FormControl className="input1"
                                placeholder="Pakistan"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                    </div>
                </Col>
                <Col lg={7}md={6} sm={12} style={{padding:'0px'}}>
                    <div className="srchInput">
                    <InputGroup >
                        <FormControl
                            placeholder="Find Cars,Mobile and more..."
                        />
                        <InputGroup.Append>
                        <img style={{width:'80px',height:'37px'}} src={sarch} alt="sarch" />
                        </InputGroup.Append>
                    </InputGroup>
                    </div>
                </Col>

                <Col className="loginCol" lg={2} md={2} sm={12}>
                <div className="loginBtn">
                    <span >Login</span>
                </div>

                <div className="login2">
                    <span >+ SELL</span>
                </div>
                </Col>
            </Row>
            {/* </Navbar> */}
        </Container>


    )
}
export default Header;