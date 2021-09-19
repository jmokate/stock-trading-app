import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Button, Form, Table} from "react-bootstrap";

function Dashboard() {

  const [userInput, setUserInput] = useState({ticker: "", amount: 0})
  const [buy, setBuy] = useState([])

  const handleUserInput = (event) => {
    const {name, value} = event.target;
    setUserInput(prevInputData => ({...prevInputData, [name]: value}))
  }
  const buyStock = (event) => {
    event.preventDefault();
    setBuy(prevBuy => [...prevBuy, userInput])}

    const stocks = buy.map(stock =>  )

  //click Buy button
  //enter ticker name
  //hit enter
  //stock appears below
  

  return (
    <Container className="user-info">
      <Row>
        <h1 className="text-center">Hello, John</h1>
        <h3 className="text-center">Your Available Balance: $10,000</h3>
        <h3 className="text-center">Your Current Holdings: $0</h3>
        <Form.Group onSubmit={buyStock}>
          <Form.Label>
            Stock Ticker: 
          </Form.Label>
          <Form.Control type="text" placeholder="ex. AAPL" name="ticker" value={userInput.ticker} onChange={handleUserInput}></Form.Control>
          <Form.Label>
            Shares Amount:
          </Form.Label>
          <Form.Control type="number" placeholder="ex. 1" name="amount" value={userInput.amount} onChange={handleUserInput}></Form.Control>
        </Form.Group>
      </Row>
      <Row>
        <Button variant="secondary" size="sm" onClick={buyStock}>Trade</Button>
      </Row>
      {stocks}
      <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Shares</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{stock.ticker}</td>
          <td>{stock.amount}</td>
        </tr>
      </tbody>
    </Table>
      
    </Container>
  )
}

export default Dashboard;