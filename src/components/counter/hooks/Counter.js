import React, { useState } from 'react'
import { Col } from 'react-bootstrap'

const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <Col className="mt-5">
      <h1 data-testid="counter">{count}</h1>
      <button data-testid="increment" onClick={increment} className="btn btn-outline-info mt-3">+</button>
      <button data-testid="decrement" onClick={decrement} className="btn btn-outline-danger mt-3 mx-1">-</button>
    </Col>
  )
}

export default Counter;
