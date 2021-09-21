import React from 'react'
import { Card, Button } from 'react-bootstrap'

const BookComponent = (props) => {

  const imgUrl = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c07ac6332%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c07ac6332%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

  return (
    <>
      <div className="col-lg-3 col-md-6">
        <Card className="mt-5">
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant={props.variant}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BookComponent;