import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../containers/header';
import SecHeader from '../../containers/navbar';
import LargeImg from '../../components/cardDetail';
import CardImg from '../../components/cardImage';
import Footar from '../../components/footar';
import '../../App.css';
import Chat from '../Chaat';




function Home() {

  return (
    <>

    {/* <Chat /> */}

      <Header />

      <SecHeader />

      <LargeImg />

      <CardImg />

      <Footar />
    </>
  )
}



export default Home;
