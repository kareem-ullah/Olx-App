import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import images from '../../components/cardDetail/image';
import Data from '../../data';
import dil from '../../images/phone/dil.png';
import { useHistory } from "react-router-dom";
// import deta from './components/footar';
// import './App.css';



function CardImg() {
  let history = useHistory();

  const detail = (item) => {
    history.push("/bikeDetail", item);

  }

  return (
    <Container fluid className="cardDiv">
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {
          Data.map((item) => {
            return (
              <div >  
                <Col lg={4} md={2} sm={1} className="colum">

                  <div onClick={() => detail(item)}
                    style={{ width: '300px', height: '300px', margin: '8px', border: '2px solid #ebeeef' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <span style={{ position: 'absolute', left: '35px', top: '10px', padding: '0px 5px', backgroundColor: '#ffce32' }}>Featured</span>

                      <img style={{ width: '200px', height: '200px' }}
                        src={item.image} alt="card" className="CardImg" />

                      <img src={dil} alt="dil"
                        style={{ width: '20px', height: '30px', position: 'relative', right: '-25px', top: '10px' }} />

                    </div>

                    <div style={{height:'97px', padding: '10px 15px 10px', borderLeft: '5px solid #ffce32' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '24px' }} >{item.price}</span>
                      <br />
                      <span >{item.name}</span>
                    </div>

                  </div>
                </Col>
              </div>
            )
          })
        }
      </Row>
    </Container>

  )
}

export default CardImg;