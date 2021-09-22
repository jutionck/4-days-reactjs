import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import './BookComponent.css'

const BookComponent = ({ title, description, image, variant }) => {
  return (
    <Col lg={3} md={6}>
      <Card className="book-card mt-5 mb-3">
        <Card.Img variant="top" className="book-img" src={image} />
        <Card.Body className="book-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant={variant}>Detail</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookComponent;