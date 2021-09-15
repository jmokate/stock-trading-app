import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';



function SplashPage() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={{span: 4, offset: 8}}>
            <h1 class="display-3">Welcome To</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 4, offset: 8}}>
            <h1 class="display-1"><span style={{color: "darkgreen"}}>Bull</span><span style={{color: "darkred"}}>Trader</span></h1>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 4, offset: 8}}>
          <section className="mw=5rem"><p class="text-left" >Trade stocks from the safety of your very own fake bank account.
               Work on your skills as an investor / trader before entering the market with real money.
               Sign up now or login to get started!</p></section>
            
          </Col>
        </Row>
        <Row>
          <Col md={{offset: 9}}>
          <Button variant="secondary">Sign Up</Button>
          <span> </span>
          <Button variant="secondary">Login</Button>
          </Col>
          
          
        </Row>
          
         
      </Container>
      
    </div>
  )
}

export default SplashPage