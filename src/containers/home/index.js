import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../containers/header';
import SecHeader from '../../containers/navbar';
import LargeImg from '../../components/cardDetail';
import CardImg from '../../components/cardImage';
import Footar from '../../components/footar';
import '../../App.css';



function Home() {

  return (
    <div >
      
      <Header />

      <SecHeader />

      <LargeImg />

      <CardImg />

      <Footar />

    </div>
  )
}



export default Home;
