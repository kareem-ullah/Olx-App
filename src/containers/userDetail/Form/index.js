import React, {Component } from 'react';
import Avatar from '../uploadImg';
import './index.css';
import { Container} from 'react-bootstrap';
import { Form, Input, Button, Select, DatePicker, InputNumber} from 'antd';


class UserData extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      Description: '',
      categories: '',
      location:'',
      price:'',
      URLs:'',
      Detail:'',
    }
  }

  post = () => { 
    console.log('name',this.state.name);
    console.log('Detail',this.state.Detail)
    console.log('Description',this.state.Description);
    console.log('categories',this.state.categories)
    console.log('location',this.state.location)
    console.log('DatePicker',this.state.DatePicker)
    console.log('price',this.state.price)
    console.log('URLs',this.state.URLs)
  }

  _getImages = (urls) => {
    this.setState({URLs:urls})
    // console.log('URLs', urls);
    
  }

  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  render() {

    return (
      <Container style={{ border: '2px solid grey', fontWeight: 'bold' }}>
        <Form lg={12} md={12} sm={12} 
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        >

          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h2 style={{ textAlign: 'center',borderBottom:'3px solid grey',color:'gray' }}>Post Add In Pakistan</h2>

          </div>
          <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder='Enter Name'  onChange={(event) => this.setState({ name: event.target.value })} />
          </Form.Item>


          <Form.Item label="Detail">
            <Input placeholder='Enter Detail' onChange={(event) => this.setState({ Detail: event.target.value })} />
          </Form.Item>


          <Form.Item label="Description">
            <Input placeholder='Enter Description' onChange={(event) => this.setState({ Description: event.target.value })} />
          </Form.Item>


          <Form.Item label="CATEGORIES">
            <Select placeholder='Enter Categories' onSelect={(event) => this.setState({categories:event})}>
              <Select.Option value="Bike">Bike</Select.Option>
              <Select.Option value="Car">Car</Select.Option>
              <Select.Option value="Mobile">Mobile</Select.Option>
              <Select.Option value="banglow">banglow</Select.Option>

            </Select>
          </Form.Item>


          <Form.Item label="LOCATIONS">
            <Select placeholder='Enter Location' onSelect={(val) => this.setState({location:val})}>
              <Select.Option value="Punjab">Punjab</Select.Option>
              <Select.Option value="Sindh">Sindh</Select.Option>
              <Select.Option value="Islamabad Capital Territory">Islamabad Capital Territory</Select.Option>
              <Select.Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Select.Option>
              <Select.Option value="Balochistan">Balochistan</Select.Option>
              <Select.Option value="Karachi">Karachi</Select.Option>

            </Select>
          </Form.Item>


          <Form.Item label="DatePicker">
            <DatePicker onChange={(string, date) => this.setState({DatePicker:date})} />
          </Form.Item>


          <Form.Item label="EnterPrice">
            <InputNumber placeholder="Enter Price" onChange={(num) => this.setState({price:num})} />
          </Form.Item>


          <Form.Item label="ImageUpload">
            <Avatar GetImages={this._getImages} />
          </Form.Item>


          <Form.Item label="Post Add">
            <Button  htmlType="submit"
            //  onClick={()=> this.post()}
              loading={false}>
                Post Add
                </Button>
          </Form.Item>
        </Form>


      </Container>
    );
  }
}


export default UserData;