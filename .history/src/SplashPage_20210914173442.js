import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import bull from "./images/bull.jpg";


function SplashPage() {
  return (
    <div>
      <Container>
          <figure class="position-relative"></figure>
          <img src={bull} alt="bull" className="img-fluid" />
      </Container>
      
    </div>
  )
}

export default SplashPage