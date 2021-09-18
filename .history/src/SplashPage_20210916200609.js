import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';



function SplashPage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid className="welcome-div">
        
          <Row className="mt-5">
            <Col sm={{span: 5, offset: 6}}>
              <h1 class="display-4 text-center">Welcome To</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 4, offset: 7}}>
              <h1 class="display-1 text-center"><span style={{color: "darkgreen"}}>Bull</span><span style={{color: "darkred"}}>Trader</span></h1>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 4, offset: 8}}>
            <section className="mw=5rem"><p class="text-left text-end" >Trade real stocks from the safety of your very own fake bank account.
                Work on your skills as an investor / trader before entering the market with real money.
                Sign up now or login to get started!</p></section>
              
            </Col>
          </Row>
          <Row>
            <Col md={{offset: 9}} className="text-end">
            <Button variant="secondary" onclick={handleShow}>Sign Up</Button>
            <span> </span>
            <Button variant="secondary">Login</Button>
            </Col>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>Sign up and password here</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>

          </Modal>
            
            
            
          </Row>
          
         
      </Container>
      
    </div>
  )
}

export default SplashPage