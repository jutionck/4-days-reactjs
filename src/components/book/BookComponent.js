import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './BookComponent.css'

const BookComponent = ({ bookId, title, description, image, variant }) => {
  return (
    <Col lg={3} md={6}>
      <Card className="book-card mb-3">
        <Card.Img variant="top" className="book-img" src={image} />
        <Card.Body className="book-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/books/${bookId}`} className="btn btn-primary">Detail</Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookComponent;