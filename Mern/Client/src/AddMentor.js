import React,{useState} from 'react';
import axios from "axios";
import {
    Row,
    Container,
    Card,
    Col,
    Button,Form
} from "react-bootstrap";
import {
  useHistory
} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";


const AddMentorDetails = () => {
let history = useHistory();
let userData = {};
let StoreUserData = (key,value)=>{
  userData[key] = value;
}
let RestAddUser = async()=>{
  let postParam = {}
  postParam =userData;
  let resultObj = await axios.post("http://localhost:8080/addUser",postParam);
}
  return(
<Card style={{ width:'50rem'}}>
  < Card.Body >
      <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" value="test" input={"firstName"}  onInput={e=>{StoreUserData("firstName",e.target.value)}} placeholder="Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" input={"emailId"} onInput={e=>{StoreUserData("emailId",e.target.value)}} placeholder="Enter email" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
      <Form.Control type="text" input={"address"} onInput={e=>{StoreUserData("address",e.target.value)}} placeholder="Enter Address" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridRole">
    <Form.Label>Role</Form.Label>
      <Form.Control type="text" input={"roleName"} onInput={e=>{StoreUserData("roleName",e.target.value)}} placeholder="Enter Role" />
    </Form.Group>
  </Form.Row>
  
  <Button variant="primary" type="submit" onClick={()=>{RestAddUser()}}>
    Add Mentor
  </Button>
  </Card.Body>
</Card>    
)
};

export default AddMentorDetails;