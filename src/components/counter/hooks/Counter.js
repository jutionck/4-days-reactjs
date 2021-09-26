import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'

const Counter = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // logic code
    console.log('useEffect called');
  });

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <Col>
      <h1 data-testid="count">{count}</h1>
      <button onClick={increment} className="btn btn-outline-info mt-3" data-testid="increment">+</button>
      <button onClick={decrement} className="btn btn-outline-danger mt-3 mx-1" data-testid="decrement">-</button>
    </Col>
  )
}

export default Counter;
