import React, { useState } from 'react';
import olx from '../../images/bike/olx.jpg';
import { Button, Modal } from 'react-bootstrap';
import firebase from '../../db'
import SignupLog from './Signup';
import UserData from '../../containers/userDetail/Form'
const db = firebase.firestore();
function ModalLogin() {
    const [smShow, setSmShow] = useState(false);
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const getuser = () => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(function (succuss) {
                db.collection("user").doc(succuss.user.uid).get()
                    .then(function (doc) {
                        if (doc.exists) {
                            alert("data Match");
                        } else {
                            alert("No such document!");
                        }
                    }).catch(function (error) {
                        alert("Error getting document:", error);
                    });
            })
            .catch(function (error) {
                alert(error)

            });
    }

    return (
        <>
            <button
                style={{ border: 'none', outline: 'none', fontSize: '18px', fontWeight: 'bold' }}
                onClick={() => setSmShow(true)}>Login</button>

            <Modal
                size="md"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                        <img src={olx} style={{ width: '50px', height: '50px' }} />
                    </div>
                </Modal.Header>
                <span style={{ textAlign: 'center', color: '#002f34', fontSize: '20px', fontWeight: '700', padding: '10px 15px' }}>
                    Write a message to Ow Motorsports</span>
                <Modal.Body>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px', marginBottom: '20px' }}>
                        <span>Enter Email</span>
                        <input type="email"
                            onChange={event => setCredentials({ email: event.target.value, password: credentials.password })}
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px' }}>
                        <span>Enter Password</span>
                        <input type="password"
                            onChange={event => setCredentials({ email: credentials.email, password: event.target.value })}
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ paddingTop: '50px' }}>
                        <Button variant="outline-primary" size="lg"
                            onClick={() => getuser()}
                            style={{ border: ' primary', fontSize: '24px', fontWeight: 'bold' }} block>
                            Login
                                </Button>
                    </div>

                    <div style={{ textAlign: 'center', padding: '10px 0px 0px 0px ' }}>
                        <SignupLog />
                    </div>

                </Modal.Body>
            </Modal>

        </>
    );
}

export default ModalLogin;