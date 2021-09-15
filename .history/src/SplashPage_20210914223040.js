import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';



function SplashPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 class="display-3 text-end">Welcome To</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 class="display-1 text-end">Bull Trader</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p class="text-end text-wrap" >Trade stocks from the safety of your fake bank account.
               Work on your skills as an investor / trader before entering the market with real money.
               Sign up now or login to get started!</p>
          </Col>
        </Row>
        <Row>
          <Button>Sign Up</Button>
          <Button>Login</Button>
        </Row>
          
         
      </Container>
      
    </div>
  )
}

export default SplashPage