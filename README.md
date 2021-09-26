# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BNI Internship x Enigma Camp


#### Unit Testing with React Testing Library

Open `package.json` and check 
```json
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^12.8.3",
```

#### PART Footer Component Test

> 1. Create a new directory `__test__` in `template` directory
> 2. Create a new file `Footer.test.js` in `__test__`

Open `Footer.test.js` and then adding script this
```js
import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

test('renders footer description', () => {

  render(<Footer />)
  const linkElement = screen.getByText('Book Shop © 2021, Happy Shopping :)');
  expect(linkElement).toBeInTheDocument();
})
```

Atau bisa seperti ini :
```js
test('renders footer description', () => {

  const { getByText } = render(<Footer />)
  expect(getByText('Book Shop © 2021, Happy Shopping :)').textContent).toBeTruthy();
```

#### PART NotFound Component

> 1. Create directory `__test__` in `404` directory
> 2. Create file `NotFound.test.js`

Open `NotFound.test.js` and adding script like this 
```js
test('renders NotFoundComponent', () => {

  const { getByTestId } = render(<NotFound />)
  expect(getByTestId('not-found').textContent).toBe('Hemmmm, sepertinya anda tersesat :p');
})
```

#### PART Counter Component Test

> 1. Create a new directory `__test__` in `counter` directory
> 2. Create a new file `Counter.test.js` in `__test__`

Open `Counter.test.js` and adding script like this

```js
import { render, fireEvent } from "@testing-library/react"
import Counter from "../Counter"

test('counter initally start with text of 0', () => {
  const { getByTestId } = render(<Counter />);
  const countEl = getByTestId('count');
  expect(countEl.textContent).toBe("0");
})

test('add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  const incrementBtn = getByTestId('increment');
  expect(incrementBtn.textContent).toBe('+');
})

test('subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const decrementBtn = getByTestId('decrement');
  expect(decrementBtn.textContent).toBe('-');
})

test('click on plus button adds 1 to counter', () => {
  const { getByTestId } = render(<Counter />);
  const btnEl = getByTestId('increment');
  const countEl = getByTestId('count');
  expect(countEl.textContent).toBe("0")

  fireEvent.click(btnEl);

  expect(countEl.textContent).toBe("1")

})

test('click on subtract button mins 1 to counter', () => {
  const { getByTestId } = render(<Counter />);
  const btnEl = getByTestId('decrement');
  const countEl = getByTestId('count');
  expect(countEl.textContent).toBe("0")

  fireEvent.click(btnEl);

  expect(countEl.textContent).toBe("-1")

})
```

> Penjelasan `fireEvent` disini adalah untuk aksi/event pada suatu atribut seperti change, click, hover and many more


#### PART Book Test

> 1. Create new directory `__test__`
> 2. Create new file `BookListComponent.test.js`

Open `BookListComponent.test.js`
```js
import React from "react";
import { render, cleanup, screen } from '@testing-library/react'
import BookList from "../BookList";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}

const axiosMock = {
  get: jest.fn().mockResolvedValue({
    data: {}
  })
}

const bookMock = {
  "id": 13,
  "title": "Asesmen Pembelajaran Berbasis Komputer Dan Android",
  "description": "Asesmen Pembelajaran Berbasis Komputer Dan Android",
  "year": 2020,
  "pages": 100,
  "language": "Indonesia",
  "publisher": "Kompas",
  "price": 10000,
  "stock": 1,
  "purchaseAmount": 15000
}

test('fetch and display data', () => {

  axiosMock.get.mockResolvedValueOnce({
    data: {
      "id": 13,
      "title": "Asesmen Pembelajaran Berbasis Komputer Dan Android",
      "description": "Asesmen Pembelajaran Berbasis Komputer Dan Android",
      "year": 2020,
      "pages": 100,
      "language": "Indonesia",
      "publisher": "Kompas",
      "price": 10000,
      "stock": 1,
      "purchaseAmount": 15000
    }
  })

  const match = '/books';
  renderWithRouter(<BookList match={match} />, { match })

  expect(screen.getByTestId('no-book-display')).toHaveTextContent('No Book Display');

})
```

#### PART Coverage Test

For see covarage test use this `npm run test -- --coverage`