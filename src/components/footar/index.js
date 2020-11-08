import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';


function Footar (){
    return(
        <div>
        <Container fluid className="footarContainer">
        <Row>
          <Col>
            <div className="footarDiv">
              <h5>POPULAR CATEGORIES</h5>
              <span>Cars</span>
              <span>Flats for rent</span>
              <span>Jobs</span>
              <span>Mobile Phones</span>
            </div>
          </Col>

          <Col>
            <div className="footarDiv">
              <h5>POPULAR CATEGORIES</h5>
              <span>Cars</span>
              <span>Flats for rent</span>
              <span>Jobs</span>
              <span>Mobile Phones</span>
            </div>
          </Col>

          <Col>
            <div className="footarDiv">
              <h5>POPULAR CATEGORIES</h5>
              <span>Cars</span>
              <span>Flats for rent</span>
              <span>Jobs</span>
              <span>Mobile Phones</span>
            </div>
          </Col>

          <Col>
            <div className="footarDiv">
              <h5>POPULAR CATEGORIES</h5>
              <span>Cars</span>
              <span>Flats for rent</span>
              <span>Jobs</span>
              <span>Mobile Phones</span>
            </div>
          </Col>
        </Row>
      </Container>

      {/* footar  */}

      <Container fluid>
        <Row>
          <div className="footar">

            <Col lg={6} md={6} sm={12}>
          <div>
              <span>Other Countries India - South Africa - Indonesia</span>
            </div>
            </Col> 
            <Col lg={6} md={6} sm={12}>
            <div>
              <span className="right">Free Classifieds in Pakistan. © 2006-2020 OLX</span>
          </div>
            </Col>
          </div>
        </Row>
      </Container>
      </div>
    )
}

export default Footar;