import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';

function Signin(props){

  const [show, setShow] = useState(false);
  handleClose = () => useState(false);

  return (
            <Modal show={props.show} onHide={props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
               <Modal.Body>
                 <Form.Group>
                   <Form.Label>Username: </Form.Label>
                   <Form.Control type="text" placeholder="user input"/>
                   <Form.Label>Password: </Form.Label>
                   <Form.Control type="password" placeholder="password"/>
                 </Form.Group>
               </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={props.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
            </Modal>
  )
}

export default Signin;