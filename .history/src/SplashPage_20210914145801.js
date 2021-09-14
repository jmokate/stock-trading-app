import React from "react";
import './App.css';
import {Container} from 'react-bootstrap';
import bull from "./images/bull.jpg";


function SplashPage() {
  return (
    <div>
      <Container>
        <figure className="position-relative">
          <img src={bull} alt="bull" className="img-fluid img-size" />
          <figcaption>
            <h1 className="landing-text fig-caption">BullTrade</h1>
          </figcaption>
        </figure>
      
      
      </Container>
      
    </div>
  )
}

export default SplashPage