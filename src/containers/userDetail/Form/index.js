import React, { Component } from 'react';
import Avatar from '../uploadImg';
import firebase from '../../../db'
import './index.css';
import { Container } from 'react-bootstrap';
import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';



const db = firebase.firestore();

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: '',
      Detail: '',
      categories: '',
      Condition: '',
      Make: '',
      Description: '',
      City: '',
      Country: '',
      SelectDate: '',
      price: '',
      URLs: '',
      uid:''
    }
  }

  
  post = async () => {
    const uid = localStorage.getItem('uid')
    this.setState({uid:uid})
  
    await db.collection('data').add(this.state);
    this.props.history.push("/");
    console.log(this.props)
  }

  _getImages = (urls) => {
    this.setState({ URLs: urls })
  }

  onFinish = values => {
    if (values) {
      this.post();
      console.log('Success:', values);
    }
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:aaa', errorInfo);
  };

  homePage = () => {
    this.props.history.push("/");
  }

  render() {

    return (
      <Container style={{ width: '600px', border: 'px solid grey', fontWeight: 'bold', padding: '10px' }}>
        <Form lg={12} md={12} sm={12}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >


          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div > <ArrowLeftOutlined onClick={() => this.homePage()}
              style={{ width: '5%', fontSize: '24px', paddingTop: '10px' }} />
            </div>

            <div style={{ width: '94%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h2>Post Add In Pakistan</h2>
            </div>


          </div>


          <Form.Item label="Address" name="Address" rules={[{ required: true, message: 'Please input your Address!' }]}>
            <Input placeholder='Enter Address' onChange={(event) => this.setState({ Address: event.target.value })} />
          </Form.Item>


          <Form.Item label="Detail" name="Detail" rules={[{ required: true, message: 'Please input your Detail!' }]}>
            <Input placeholder='Enter Detail' onChange={(event) => this.setState({ Detail: event.target.value })} />
          </Form.Item>


          <Form.Item label="CATEGORIES" name="CATEGORIES" rules={[{ required: true, message: 'Please input your CATEGORIES!' }]}>
            <Select placeholder='Enter Categories' onSelect={(event) => this.setState({ categories: event })}>
              <Select.Option value="Bike">Bike</Select.Option>
              <Select.Option value="Car">Car</Select.Option>
              <Select.Option value="Mobile">Mobile</Select.Option>
              <Select.Option value="banglow">banglow</Select.Option>

            </Select>
          </Form.Item>


          <Form.Item label="CONDITION" name="Condition" rules={[{ required: true, message: 'Please input your Condition!' }]}>
            <Input placeholder='Enter Condition' onChange={(event) => this.setState({ Condition: event.target.value })} />
          </Form.Item>


          <Form.Item label="MAKE" name="Make" rules={[{ required: true, message: 'Please input your Make!' }]}>
            <Input placeholder='Enter Make' onChange={(event) => this.setState({ Make: event.target.value })} />
          </Form.Item>




          <Form.Item label="Description" name="Description" rules={[{ required: true, message: 'Please input your Description!' }]}>
            <Input placeholder='Enter Description' onChange={(event) => this.setState({ Description: event.target.value })} />
          </Form.Item>


          <Form.Item label="CITY" name="CITY" rules={[{ required: true, message: 'Please input your CITY!' }]}>
            <Select placeholder='Enter City' onSelect={(val) => this.setState({ City: val })}>
              <Select.Option value="Punjab">Punjab</Select.Option>
              <Select.Option value="Sindh">Sindh</Select.Option>
              <Select.Option value="Islamabad Capital Territory">Islamabad Capital Territory</Select.Option>
              <Select.Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Select.Option>
              <Select.Option value="Balochistan">Balochistan</Select.Option>
              <Select.Option value="Karachi">Karachi</Select.Option>

            </Select>
          </Form.Item>



          <Form.Item label="COUNTRY" name="COUNTRY" rules={[{ required: true, message: 'Please input your Country!' }]}>
            <Select placeholder='Enter Country' onSelect={(val) => this.setState({ Country: val })}>
              <Select.Option value="Pakistan">Pakistan</Select.Option>
              <Select.Option value="India">India</Select.Option>
              <Select.Option value="bangladesh">bangladesh</Select.Option>
            </Select>
          </Form.Item>







          <Form.Item label="SelectDate" name="SelectDate" rules={[{ required: true, message: 'Please input your SelectDate!' }]}>
            <DatePicker onChange={(string, date) => this.setState({ SelectDate: date })} />
          </Form.Item>


          <Form.Item label="EnterPrice" name="EnterPrice" rules={[{ required: true, message: 'Please input your EnterPrice!' }]}>
            <InputNumber placeholder="Enter Price" onChange={(num) => this.setState({ price: num })} />
          </Form.Item>


          <Form.Item label="ImageUpload"
          //  name="ImageUpload" rules={[{ required: true, message: 'Please input your ImageUpload!' }]}
          >
            <Avatar GetImages={this._getImages} />
          </Form.Item>


          <Form.Item style={{ padding: '0px 50px' }}>
            <Button type="primary" htmlType="submit" loading={false} block>
              Post Add
            </Button>
          </Form.Item>
        </Form>

      </Container>
    );
  }
}


export default UserData;