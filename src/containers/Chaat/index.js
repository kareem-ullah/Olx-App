import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import firebase from '../../db';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { SendOutlined, CloseOutlined } from '@ant-design/icons';
import './index.css';


const db = firebase.firestore();
//  const uid = localStorage.getItem('uid')
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: '',
            recieverUID: '',
            senderUID: '',
            text: '',
            user: []
        }
    }
    componentWillMount() {
        const { recieverUID, postID } = this.props;
        // console.log('****', { recieverUID, postID })
        const senderUID = localStorage.getItem('uid')
        this.setState({ recieverUID, postID, senderUID }, () => {
            // console.log('data', { ad: this.state.recieverUID, postID, senderUID })
            this.getMessage();
        })

    }

    Send = async () => {
        const { text, recieverUID, postID, senderUID } = this.state;
        let uid;
        if (senderUID > recieverUID) {
            uid = senderUID + recieverUID;
        }
        else {
            uid = recieverUID + senderUID;
        }
        let msgObj = {
            recieverUID,
            senderUID,
            message: text,
            timeStamp: new Date().getTime(),
            messageUID: uid,
            postID
        }
        console.log('Message', uid)

        // await db.collection('message').doc(postID).collection(uid).add(msgObj);
        await db.collection('message').add(msgObj);
        this.setState({ text: '' })
    }

    getMessage = () => {
        let uid;
        const { postID, senderUID, recieverUID } = this.state;
        // console.log('run', { postID, senderUID, recieverUID })
        if (senderUID > recieverUID) {
            uid = senderUID + recieverUID;
        }
        else {
            uid = recieverUID + senderUID;
        }
        console.log('Message', uid)
        // db.collection("message").doc(postID).collection(uid).orderBy('timeStamp', 'asc')
        db.collection("message").where("postID", "==", postID).where("messageUID", "==", uid).orderBy('timeStamp', 'asc')
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
        this.props.setVisible()
    }

    render() {
        const { user, text, postID } = this.state;
        // console.log(user)
        return (

            <div className="mainDiv">
                <Container className="cont">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="h1" style={{ textAlign: 'center' }}>
                            <div className="headingDiv" >
                                <h1 className="heading">Chat </h1>
                                <CloseOutlined onClick={() => this.delete()} className="dltbtn" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} md={12} sm={12} className="colinput">

                            {
                                user.map((item, index) => {
                                    // console.log('item',item)
                                    return item.postID === postID ?
                                        <p key={index}>
                                            <div className="userDiv">
                                                {/* <span className="username">{item.name}</span> */}
                                                <span className="span-msg1">{item.message}</span>
                                                <span className="time">{new Date(item.timeStamp).toLocaleTimeString()}</span>
                                            </div>
                                        </p>
                                        :

                                        <p key={index}>
                                            <div className="UserDiv2nd">
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
                                <Input size="large" placeholder="Message" value={text}
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