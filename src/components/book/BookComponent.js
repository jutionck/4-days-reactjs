import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

const BookComponent = (props) => {

  return (
    <Col lg={3} md={6}>
      <Card className="mt-5">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant={props.variant}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookComponent;