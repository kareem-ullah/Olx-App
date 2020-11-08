import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';


function SecHeader() {
  return (

    <Container fluid>
      <Row>
        <Col style={{ padding: '0px',borderBottom:'2px solid  #ebeeef',fontWeight:'bold' }}>
          <Navbar collapseOnSelect expand="lg" >
            <Navbar href="#home">ALL CATEGORIES</Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="https://www.olx.com.pk/mobile-phones_c1453">Mobile Phones</Nav.Link>
                <Nav.Link href="https://www.olx.com.pk/cars_c84">Cars</Nav.Link>
                <Nav.Link href="https://www.olx.com.pk/motorcycles_c81">Motorcycles</Nav.Link>
                <Nav.Link href="https://www.olx.com.pk/houses_c1721">Houses</Nav.Link>
                <Nav.Link href="https://www.olx.com.pk/tv-video-audio_c729">TV-Video-Audio</Nav.Link>
                <Nav.Link href="https://www.olx.com.pk/tablets_c1455">Tablets</Nav.Link>
                <Nav.Link href="https://www.olx.com.pk/land-plots_c40">Land & Plots</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default SecHeader;