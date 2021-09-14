import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import bull from "./images/bull.jpg";


function SplashPage() {
  return (
    <div>
      <Container>
          <figure className="position-relative">
           <img src={bull} alt="bull" className="img-fluid" />
           <figcaption className="fs-1">
             bull trader
           </figcaption>
          </figure>
         
      </Container>
      
    </div>
  )
}

export default SplashPage