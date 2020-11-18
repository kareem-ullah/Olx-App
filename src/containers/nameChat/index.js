// import React, { Component } from 'react';
// import History from '../history';
// import { Container, Row, Col, Button, InputGroup, Form } from 'react-bootstrap'
// import './index.css';

// class ChatName extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""

//     }
//   }

//   homeToChat = () => {
//     const { text } = this.state

//     if (!text) {
//       alert('required your name')
//     } else if (text.indexOf(" ") >= 0) {
//       alert('Space not allow!')
//     } else {
//       this.props.history.push('/Chat', text);

//     }

//   }
//   render() {
//     const { text } = this.state
//     return (
//       <Container fluid style={{padding:'10px'}} >
//         <div className="container">
//         <Row className="mainhead">
//           <Col lg={12} md={12} sm={12} xs={12} className="head">
//             <h1>Olx  Chat</h1>
//           </Col>
//         </Row>

//         <Row className="main-row">
//           <Col lg={12} md={12} sm={12} xs={12} className="colum">
//             <div className="divin">
//               <div className="formdiv">

//                 <Form>  
//                   <input type="text" name="userName" className="inputname" placeholder="Enter Your Name" value={text}
//                     onChange={(e) => this.setState({ text: e.target.value })} />

//                   <button className="namebtn" onClick={this.homeToChat.bind(this)}>Next</button>
//                 </Form>

//               </div>
//             </div>
//           </Col>
//         </Row>
//         </div>
//       </Container >
//     );
//   }
// }

// export default ChatName;