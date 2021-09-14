import React from "react";
import './App.css';
import {Container} from 'react-bootstrap';
import bull from "./images/bull.jpg";


function SplashPage() {
  return (
    <div>
      <Container>
      <h1 className="landing-text">BullTrade</h1>
      <img src={bull} alt="bull" className="img-fluid" />
      </Container>
      
    </div>
  )
}

export default SplashPage