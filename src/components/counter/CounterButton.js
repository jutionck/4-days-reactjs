import React, { Component } from 'react'

export default class CounterButton extends Component {

  handleCounterChange = (newValue) => {
    this.props.onHandleChange(newValue)
  }

  incrementButton = () => {
    let number = 0;
    this.handleCounterChange(number += 1)
  }

  decremenetButton = () => {
    let number = 0;
    this.handleCounterChange(number -= 1)
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementButton} className="btn btn-warning">+</button>
        <button onClick={this.decremenetButton} className="btn btn-danger">-</button>
      </div>
    )
  }
}
