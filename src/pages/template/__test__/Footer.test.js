import { render } from "@testing-library/react"
import Footer from '../Footer'

test('renders footer description', () => {

  const { getByText } = render(<Footer />)
  expect(getByText('Book Shop © 2021, Happy Shopping :)').textContent).toBeTruthy();
})