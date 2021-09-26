import { render, fireEvent } from "@testing-library/react"
import Counter from "../hooks/Counter"

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