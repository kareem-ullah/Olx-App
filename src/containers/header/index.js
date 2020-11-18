import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, Button, Form } from 'react-bootstrap';
import ModalLogin from './modal';
import { useHistory } from "react-router-dom";
import olx from '../../images/image/olx.png';
import { Input } from 'antd';
import './index.css';
const { Search } = Input;


function Header() {
    const [smShow, setSmShow] = useState(false);
    let History = useHistory();

    const HomePage = () => {
        History.push("/");
    }

    const FormPage = () => {
        let uid = localStorage.getItem('uid');
        if (uid) {
            History.push("/AddPost");
        } else {
            setSmShow(true)
        }
        // console.log(uid)
    }
    const onSearch = value => console.log(value);
    return (
        <Container fluid className="headerRow">
            <Row>
                <Col lg={3} md={4} sm={12} style={{ padding: '0px' }}>
                    <div className="columImg">
                        <div onClick={() => HomePage()}>
                            <img className="olxImg" src={olx} alt="sarch" />
                        </div>
                        <div className="inputDiv">
                            <Form>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    </InputGroup.Prepend>


                                    <Search style={{}} placeholder="input search text" size="large" onSearch={onSearch} enterButton />


                                </InputGroup>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col lg={7} md={6} sm={12} style={{ padding: '0px' }}>
                    <div className="srchInput">
                        <InputGroup >
                            <Search placeholder="input search text" size="large" onSearch={onSearch} enterButton />

                        </InputGroup>
                    </div>
                </Col>

                <Col className="loginCol" lg={2} md={2} sm={12}>
                    <div className="loginBtn">
                        <button
                            style={{ border: 'none', outline: 'none', fontSize: '18px', fontWeight: 'bold' }}
                            onClick={() => setSmShow(true)}>Login</button>
                    </div>

                    <div>


                        <Button type="primary" onClick={() => FormPage()} style={{ padding: '0px 8px 5px 5px' }} >
                            <span style={{ fontSize: '20px' }}>+ </span>
                            Post
                        </Button>

                    </div>
                </Col>
            </Row>
            <ModalLogin visible={smShow} setVisible={() => setSmShow(false)} />
        </Container>
    )
}
export default Header;