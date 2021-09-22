import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const BookDetail = ({ match }) => {

  console.log(match);
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h3>Book Detail Page By Id {match.params.id}</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default BookDetail;