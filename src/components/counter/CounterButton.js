import React, { Component } from 'react'

class CounterButton extends Component {

  handleChangeCounter = (newValue) => this.props.onHandleChange(newValue);

  render() {
    return (
      <div>
        <button onClick={() => this.handleChangeCounter(+1)} className="btn btn-outline-info mt-3">+</button>
        <button onClick={() => this.handleChangeCounter(-1)} className="btn btn-outline-danger mt-3 mx-1">-</button>
      </div>
    )
  }
}

export default CounterButton;
