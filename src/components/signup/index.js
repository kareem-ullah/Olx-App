import React, { useState } from 'react';
import olx from '../../images/bike/olx.jpg';
import { Button, Modal } from 'react-bootstrap';


function Signup() {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <span
                 style={{borderBottom:'3px solid red',padding:'5px',color:"green"}}
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
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px', marginBottom: '15px' }}>
                        <span>Enter Email</span>
                        <input type="email"
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px',marginBottom: '15px' }}>
                        <span>Enter Password</span>
                        <input type="password"
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px',marginBottom: '15px' }}>
                        <span>Enter Contact</span>
                        <input type="text"
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ background: 'rgb(235, 238, 239)', borderBottom: '2px solid black', padding: '5px 8px 0px',marginBottom: '15px' }}>
                        <span>Enter City</span>
                        <input type="text"
                            style={{ width: '100%', background: 'rgb(235, 238, 239)', border: 'none', outline: 'none' }} />
                    </div>

                    <div style={{ paddingTop: '50px' }}>
                        <Button variant="outline-primary" size="lg" style={{ border: ' primary', fontSize: '24px', fontWeight: 'bold' }} block>
                            Signup
                                </Button>
                    </div>

                </Modal.Body>
            </Modal>

        </>
    );
}

export default Signup;