import React from 'react'

const CounterButtonHooks = ({ incrementButton, decrementButton }) => {

  return (
    <div>
      <button onClick={incrementButton} className="btn btn-warning">+</button>
      <button onClick={decrementButton} className="btn btn-danger">-</button>
    </div>
  )
}

export default CounterButtonHooks;
