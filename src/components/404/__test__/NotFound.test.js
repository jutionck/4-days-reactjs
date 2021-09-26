import { render } from "@testing-library/react"
import NotFound from "../NotFound"

test('renders NotFoundComponent', () => {

  const { getByTestId } = render(<NotFound />)
  expect(getByTestId('not-found').textContent).toBe('Hemmmm, sepertinya anda tersesat :p');
})