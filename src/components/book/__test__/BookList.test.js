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
