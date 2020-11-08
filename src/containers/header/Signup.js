import React, { useState } from 'react';
import firebase from '../../db'
import olx from '../../images/bike/olx.jpg';
import { Button, Modal } from 'react-bootstrap';

const db = firebase.firestore();

function SignupLog() {
    const [smShow, setSmShow] = useState(false);
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", contact: "", city: "" });

    const signup = () => {
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(function (succuss) {
                console.log('succuss', succuss)
                const obj = {
                    ...credentials,
                }
                delete obj.password;
                console.log(succuss.user.uid, 'Object', obj);
                db.collection('user').doc(succuss.user.uid).set(obj);
            })
            .catch(function (error) {
                alert(error.message)
            });

    }

    return (
        <>
            <span
                style={{ borderBottom: '3px solid red', padding: '5px', color: "green" }}
                onClick={() => setSmShow(true)}>Signup</span>

            <Modal
                size="md"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '0px' }}>
                        <img src={olx} style={{ width: '50px', height: '50px' }} />
                    </div>
                </Modal.Header>
                <span style={{ textAlign: 'center', color: '#002f34', fontSize: '20px', fontWeight: '700', padding: '10px 15px' }}>
                    Welcome To Signup</span>
                <Modal.Body>
                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px', marginBottom: '15px' }}>
                        <span>Enter Name</span>
                        <input type="name"
                            onChange={event => setCredentials({ ...credentials, name: event.target.value })}
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px', marginBottom: '15px' }}>
                        <span>Enter Email</span>
                        <input type="email"
                            onChange={event => setCredentials({ ...credentials, email: event.target.value })}
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px', marginBottom: '15px' }}>
                        <span>Enter Password</span>
                        <input type="password"
                            onChange={event => setCredentials({ ...credentials, password: event.target.value })}
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px', marginBottom: '15px' }}>
                        <span>Enter Contact</span>
                        <input type="text"
                            onChange={event => setCredentials({ ...credentials, contact: event.target.value })}
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px', marginBottom: '15px' }}>
                        <span>Enter City</span>
                        <input type="text"
                            onChange={event => setCredentials({ ...credentials, city: event.target.value })}
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ paddingTop: '50px' }}>
                        <Button variant="outline-primary" size="lg"
                            onClick={() => signup()}
                            style={{ border: ' primary', fontSize: '24px', fontWeight: 'bold' }} block>
                            Signup
                                </Button>
                    </div>

                </Modal.Body>
            </Modal>

        </>
    );
}

export default SignupLog;