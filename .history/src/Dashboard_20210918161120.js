import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Button} from "react-bootstrap";

function Dashboard() {

  return (
    <Container>
      <Row>
        <h1 className="text-center">Hello, John</h1>
      </Row>
      <Row>
        <Button variant="secondary" size="sm">Trade</Button>
      </Row>

      
    </Container>
  )
}

export default Dashboard;