import React from 'react'
import { useState } from 'react'
import CounterButtonHooks from './CounterButtonHooks';

const CounterComponentHook = () => {

  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1)

  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h3>{counter}</h3>
      <CounterButtonHooks incrementButton={increment} decrementButton={decrement} />
    </div>
  )
}

export default CounterComponentHook;
