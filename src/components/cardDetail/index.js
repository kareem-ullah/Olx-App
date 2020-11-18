import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import largImg from '../../images/image/largImg.jpg';
import '../../App.css';

function LargeImg() {
    return (
        <Container fluid>
            <Row>
                <Col style={{ padding: '0px' }}>
                    <img src={largImg} className="largeImg" alt="img" />
                </Col>
            </Row>
            <Row>
                <Col style={{ marginTop: '80px' }}>
                    <h1 >Fresh recommendations</h1>

                </Col>
            </Row>

        </Container>
    )
}

export default LargeImg;