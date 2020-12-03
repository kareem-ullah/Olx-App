import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import firebase from '../../db';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { CloseOutlined } from '@ant-design/icons';
import './index.css';

const db = firebase.firestore();

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: '',
            recieverUID: '',
            senderUID: '',
            chatList: []
        }
    }

    componentWillMount() {
        const { recieverUID, postID } = this.props;
        const senderUID = localStorage.getItem('uid')
        this.setState({ recieverUID, postID, senderUID }, () => {
            this.getUserList();
        })

    }

    getUserList = () => {
        let uid;
        const { postID, senderUID, recieverUID } = this.state;
        if (senderUID > recieverUID) {
            uid = senderUID + recieverUID;
        }
        else {
            uid = recieverUID + senderUID;
        }

        db.collection("message").where('postID', '==', postID)
            .onSnapshot((querySnapshot) => {
                let chatList = [];
                let duplict = [];
                querySnapshot.forEach(function (doc) {

                    if (duplict.indexOf(doc.data().messageUID) == -1) {
                        chatList.push(doc.data())
                        duplict.push(doc.data().messageUID)
                    }
                });
                this.setState({ chatList: chatList })
            }); 
    }

    delete = () => {
        this.props.setVisible()
    }

    render() {
        const { chatList, } = this.state;
        return (

            <div className="MainDiv">
                <Container className="containerDiv">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="headColum" style={{ textAlign: 'center' }}>
                            <div className="headDiv" >
                                <h1 className="headingChat">Chat List </h1>
                                <CloseOutlined onClick={() => this.delete()} className="dltBtn" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} md={12} sm={12} className="columId">
                            {
                                chatList.map((item, index) => {
                                    return item ?
                                        <p key={index}>
                                            <div className="userDivId">
                                                <span>{item.senderUID}</span>
                                            </div>
                                        </p>
                                        :
                                        null
                                })
                            }

                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default ChatList;