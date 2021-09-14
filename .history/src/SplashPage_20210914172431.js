import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import bull from "./images/bull.jpg";


function SplashPage() {
  return (
    <div class="overflow-hidden">
      <Container class='mx-none overflow-hidden'>
        
          <img src={bull} alt="bull" class="img-fluid" />
         
        
      </Container>
      
    </div>
  )
}

export default SplashPage