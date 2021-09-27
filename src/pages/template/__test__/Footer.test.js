import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Renders footer component', () => {

  it('#1 Test by query with byText', () => {
    render(<Footer />);
    const footerEl = screen.getByText('Book Shop © 2021, Happy Shopping :)');
    expect(footerEl).toBeInTheDocument();
  })

  it('#2 Test by query with byText', () => {

    const { getByText } = render(<Footer />);
    expect(getByText('Book Shop © 2021, Happy Shopping :)').textContent).toBeTruthy()
  })

  it('#3 Test by query with byTestId', () => {

    const { getByTestId } = render(<Footer />)
    expect(getByTestId('footer-component').textContent).toBe('Book Shop © 2021, Happy Shopping :)');
  })
})