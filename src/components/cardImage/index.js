import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { HeartOutlined } from '@ant-design/icons';
import firebase from '../../db';
import { useHistory } from "react-router-dom";
import ModalLogin from '../../containers/header/modal';
import Chat from '../../containers/Chaat'


const db = firebase.firestore();

function CardImg() {
  const [chatOpen, setChatOpen] = useState(false);
  const [smShowLogin, setSmShowLogin] = useState(false);
  let History = useHistory();
  const [Post, setPost] = useState([]);

  useEffect(() => {
    let postArr = [];
    db.collection("data").get()
      .then(async (querySnapshot) => {
        let obj = {};
        await querySnapshot.forEach((doc) => {
          console.log('Postid', doc.id);
          obj = doc.data();
          let objData = {
            image: obj.URLs[0],
            price: "Rs: " + obj.price,
            city: obj.City,
            Country: obj.Country,
            images: obj.URLs,
            detail: {
              make: obj.Make,
              year: obj.SelectDate,
              condition: obj.Condition,
            },
            description: obj.Description.split(','),
            name: obj.categories,
            uid: obj.uid,
            postID: doc.id
          }
          postArr.push(objData)
          // console.log(doc.id, " => ", objData);
        });
        setPost(postArr)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [])

  const detail = (item) => {
    History.push("/bikeDetail", item);
  }

  const heartImg = () => {
    let uid = localStorage.getItem('uid');
    if (uid) {
      setChatOpen(true)
    } else {
      setSmShowLogin(true)
      
    }
  }

  return (
    <Container fluid className="cardDiv">
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {
          Post.map((item) => {
            return (
              <div>
                <Col lg={4} md={2} sm={1} className="colum">
                  <div
                    style={{ width: '300px', height: '300px', margin: '8px', border: '2px solid #ebeeef' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <span style={{ position: 'absolute', left: '35px', top: '10px', padding: '0px 5px', backgroundColor: '#ffce32' }}>Featured</span>

                      <img onClick={() => detail(item)}
                        style={{ width: '200px', height: '200px', }}
                        src={item.image} alt="card" className="CardImg" />

                      <HeartOutlined
                        onClick={() => heartImg()}
                        style={{ position: 'relative', right: '-25px', top: '10px', fontSize: '30px' }} />
               {
                 chatOpen ?
                 <Chat visible={chatOpen} setVisible={() => setChatOpen(false)} />
                 :
                <ModalLogin visible={smShowLogin} setVisible={() => setSmShowLogin(false)} />
               }
               
                    </div>

                    <div style={{ height: '97px', padding: '10px 15px 10px', borderLeft: '5px solid #ffce32' }}>
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