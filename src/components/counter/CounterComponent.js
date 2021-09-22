import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import CounterButton from './CounterButton';

class CounterComponent extends Component {

  constructor(props) {
    super(props);
    console.log('Constructor called');
  }

  state = {
    count: 0
  }

  handleChange = (newValue) => {
    this.setState({
      count: this.state.count + newValue
    })
  }

  componentDidMount() {
    console.log('ComponentDidMount called');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate Called');
  }

  render() {
    console.log('Render called');
    return (
      <Col className="mt-5">
        <h1>{this.state.count}</h1>
        <CounterButton onHandleChange={(value) => this.handleChange(value)} />
      </Col>
    )
  }
}

export default CounterComponent;
