# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BNI Internship x Enigma Camp

#### PART Component

> 1. Create a new directory `counter`
> 2. Create a file `CounterComponent.js` in `counter` directory
> 3. Create a file `CounterButton.js` in `counter` directory


#### PART State

Open `CounterComponent.js` and then adding script this
```js
export default class CounterComponent extends Component {

  state = {
    counter: 4
  }

  handleChange = () => {
    this.setState({
      counter: 10
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleChange} className="btn btn-warning">Change</button>
      </div >
    )
  }
}
```

##### Passing Data From Child to Parent Component

Modify `CounterComponent.js`

```js
state = {
    counter: 4
  }

  handleChange = (newValue) => {
    this.setState({
      counter: newValue
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <CounterButton onHandleChange={(value) => this.handleChange(value)} />
      </div >
    )
  }
```

Open `CounterButton.js` and then adding script this
```js
export default class CounterButton extends Component {

  handleCounterChange = (newValue) => {
    this.props.onHandleChange(newValue)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleCounterChange(5)} className="btn btn-warning">Change</button>
      </div>
    )
  }
}
```

##### Hands On

> 1. Buat 2 (dua) buah button `incrementButton` dan `decrementButton` pada `CounterButton` component
> 2. Sesuai nama fungsi nya, ketika kita mengklik tombol `+` maka value counter akan bertambah `+1` dan jika mengklik tombol `-` maka value counter akan berkurang `-1`
> 3. Bagus jika diberikan validasi agar counter value tidak minus


##### Passing Data From Child to Parent Component using Hooks

> 1. Create a new directory `hooks` in `counter` directory
> 2. Create file `CounterComponentHooks.js` and `CounterButtonHooks.js`

Open `CounterComponentHooks.js` and then adding script this
```js
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
```

Open `CounterButtonHooks.js` and adding script this
```js
const CounterButtonHooks = ({ incrementButton, decrementButton }) => {

  return (
    <div>
      <button onClick={incrementButton} className="btn btn-warning">+</button>
      <button onClick={decrementButton} className="btn btn-danger">-</button>
    </div>
  )
}

export default CounterButtonHooks;
```