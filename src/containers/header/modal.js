import React, { useState } from 'react';
import olx from '../../images/bike/olx.jpg';
import { Button, Modal } from 'react-bootstrap';
import firebase from '../../db'
import SignupLog from './Signup';
import { Input } from 'antd';
import { MailOutlined,LockOutlined } from '@ant-design/icons';


const db = firebase.firestore();

function ModalLogin({visible, setVisible}) {
    // const [smShow, setSmShow] = useState(false);
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const getuser = () => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(function (succuss) {
                console.log('uid',succuss.user.uid)
                localStorage.setItem("uid",succuss.user.uid)
                db.collection("user").doc(succuss.user.uid).get()

                    .then(function (doc) {
                        if (doc.exists) {
                            setVisible()
                            // alert("WelCome Login");
                        } else {
                            alert("No such document!");
                        }
                        setVisible();
                    }).catch(function (error) {
                        alert("Error getting document:", error);
                    });
            })
            .catch(function (error) {
                alert('plz SignUp')

            });
    }

    return (
        <>
            <Modal
                size="md"
                show={visible}
                onHide={() => setVisible()}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                        <img src={olx} style={{ width: '50px', height: '50px' }} alt="olx" />
                    </div>
                </Modal.Header>
                <span style={{ textAlign: 'center', color: '#002f34', fontSize: '20px', fontWeight: '700', padding: '10px 15px' }}>
                    Write a message to Ow Motorsports</span>
                <Modal.Body>

                    <div style={{ paddingBottom: '15px' }}>
                        <span>Enter Email</span>
                        <Input placeholder="Enter Email"
                            onChange={event => setCredentials({ email: event.target.value, password: credentials.password })}
                            prefix={<MailOutlined style={{ fontSize: '20px' }} />} />
                    </div>

                    <div>
                        <span>Enter Password</span>
                        <Input.Password placeholder="input password"  prefix={<LockOutlined style={{ fontSize: '20px' }} />}
                            onChange={event => setCredentials({ email: credentials.email, password: event.target.value })}
                        />
                    </div>

                    <div style={{ paddingTop: '30px' }}>
                        <Button type="primary" style={{fontWeight:'bold'}}  onClick={() => getuser()} block>Login </Button>
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