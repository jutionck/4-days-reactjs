import React from 'react'
import { Row } from 'react-bootstrap'

const BookDetail = ({ match }) => {

  // Destructuring
  const { id } = match.params;

  return (
    <Row>
      <h3>Book Detail By ID {id}</h3>
    </Row>
  )
}

export default BookDetail
