import React, { Component } from 'react'
import CounterButton from './CounterButton'

export default class CounterComponent extends Component {

  state = {
    counter: 4
  }

  handleChange = (newValue) => {
    this.setState((prevState) => ({ counter: prevState.counter + newValue }));
  }

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <CounterButton onHandleChange={(value) => this.handleChange(value)} />
      </div >
    )
  }
}
