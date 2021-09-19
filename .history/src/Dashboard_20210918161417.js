import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Button} from "react-bootstrap";

function Dashboard() {

  return (
    <Container className="user-info">
      <Row>
        <h1 className="text-center">Hello, John</h1>
        <h3 className="text-center">Your Available Balance: $10,000</h3>
        <h3 className="text-center">Your Current Holdings: $0</h3>
      </Row>
      <Row>
        <Button variant="secondary" size="sm">Trade</Button>
      </Row>

      
    </Container>
  )
}

export default Dashboard;