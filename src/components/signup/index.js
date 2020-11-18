import React, { useState } from 'react';
import olx from '../../images/bike/olx.jpg';
import { Button, Modal } from 'react-bootstrap';
import firebase from '../../db'
import { Input } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';



const db = firebase.firestore();


function Signup() {
    const [smShow, setSmShow] = useState(false);
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", contact: "", city: "" });

    const signup = () => {
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(function (succuss) {
                localStorage.setItem("uid", succuss.user.uid)
                // console.log('succuss', succuss.user.uid)
                const obj = {
                    ...credentials,
                }
                delete obj.password;
                // console.log(succuss.user.uid, 'Object', obj);
                db.collection('user').doc(succuss.user.uid).set(obj);
            })
            .catch(function (error) {
                alert(error.message)
            });
    }

    return (
        <>

            <span
                style={{ padding: '5px', color: "#007bff", fontWeight: 'bold', fontSize: '20px' }}
                onClick={() => setSmShow(true)}>Create Account !!</span>

            <Modal
                size="md"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '0px' }}>
                        <img src={olx} style={{ width: '50px', height: '50px' }} alt="olx" />
                    </div>
                </Modal.Header>
                <span style={{ textAlign: 'center', color: '#002f34', fontSize: '20px', fontWeight: '700', padding: '10px 15px' }}>
                    Welcome To Signup</span>
                <Modal.Body>
                    <div style={{ paddingBottom: '15px' }}>
                        <span>Enter Name</span>
                        <Input placeholder="Enter Name" style={{padding:'8px'}}
                            onChange={event => setCredentials({ ...credentials, name: event.target.value })}
                            prefix={<UserOutlined style={{ fontSize: '20px' }} />}
                        />
                    </div>

                    <div style={{ paddingBottom: '15px' }}>
                        <span>Enter Email</span>
                        <Input placeholder="Enter Email" style={{padding:'8px'}}
                            onChange={event => setCredentials({ ...credentials, email: event.target.value })}
                            prefix={<MailOutlined style={{ fontSize: '20px' }} />} />

                    </div>

                    <div style={{ paddingBottom: '15px' }}>
                        <span>Enter Password</span>
                        <Input.Password placeholder="Enter Password" style={{padding:'8px'}}
                        prefix={<LockOutlined style={{ fontSize: '20px' }} />}
                            onChange={event => setCredentials({ ...credentials, password: event.target.value })}
                        />
                    </div>

                    <div style={{ paddingBottom: '15px' }}>
                        <span>Enter Contact</span>
                        <Input placeholder="default size" style={{padding:'8px'}}
                            onChange={event => setCredentials({ ...credentials, contact: event.target.value })}
                            prefix={<PhoneOutlined style={{ fontSize: '20px' }} />}
                        />
                    </div>

                    <div>
                        <span>Enter City</span>
                        <Input placeholder="default size" style={{padding:'8px'}}
                            onChange={event => setCredentials({ ...credentials, city: event.target.value })}
                            prefix={<HomeOutlined style={{ fontSize: '20px' }} />}
                        />
                    </div>

                    <div style={{ paddingTop: '50px' }}>
                        <Button type="primary" style={{ fontWeight: 'bold' }} onClick={() => signup()} block>Signup</Button>
                    </div>

                </Modal.Body>
            </Modal>

        </>
    );
}

export default Signup;