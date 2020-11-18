import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import firebase from '../../db';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { SendOutlined, CloseOutlined } from '@ant-design/icons';
import './index.css';


const db = firebase.firestore();

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            user: []
        }
    }

    Send = () => {
        const { text, name } = this.state;
        let object = {
            name: name,
            message: text,
            timeStamp: new Date().getTime()
        }
        db.collection('message').add(object);
        this.setState({ name: name, text: '' })
        // console.log('okkk', object)
    }

    getMessage = () => {

        db.collection("message").where("name", "in", ["wasi", "ali"]).orderBy('timeStamp', 'asc')
            .get()
            .then((querySnapshot) => {
                var message = [];
                querySnapshot.forEach(function (doc) {
                    message.push(doc.data());
                    console.log(doc.id, " => ", doc.data());
                });
                this.setState({ user: message, })
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    delete = () => {
        this.setState({ user: [] })
    }


    render() {
        const { user, name } = this.state;
        // console.log(user)
        return (

            <div className="mainDiv">
                <Container className="cont">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="h1" style={{ textAlign: 'center' }}>
                            <div className="headingDiv" >
                                <h1 className="heading">Chat App </h1>
                                <CloseOutlined onClick={() => this.delete()} className="dltbtn" />
                            </div>
                            <h5>Simple Chat App</h5>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} md={12} sm={12} className="colinput">

                            {
                                user.map((item, index) => {
                                    return item.name === name ?
                                        <p key={index}>
                                            <div className="userDiv">
                                                <span className="username">{item.name}</span>
                                                <span className="span-msg1">{item.message}</span>
                                                <span className="time">{new Date(item.timeStamp).toLocaleTimeString()}</span>
                                            </div>
                                        </p>
                                        :

                                        <p key={index}>
                                            <div className="input1">
                                                <span className="name">{item.name}</span>
                                                <span className="span-msg2">{item.message}</span>
                                                <span className="date">{new Date(item.timeStamp).toLocaleTimeString()}</span>
                                            </div>
                                        </p>
                                })

                            }

                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} md={12} sm={12} style={{ padding: '0px' }}>
                            <div className="inputDiv">
                                <Input size="large" placeholder="Message"
                                    onChange={(event) => this.setState({ text: event.target.value })}
                                    addonAfter={<SendOutlined onClick={() => this.Send()}
                                        style={{ fontSize: '30px' }} />} />

                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Chat;