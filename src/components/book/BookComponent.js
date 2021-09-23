import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './BookComponent.css'

const BookComponent = ({ bookId, title, description, price, purchaseAmount, onDeleteBook }) => {
  return (
    <Col lg={4} md={6}>
      <Card className="book-card mb-3">
        <Card.Img variant="top" className="book-img" src="https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg" />
        <Card.Body className="book-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/books/${bookId}`} className="btn btn-sm btn-outline-info">Detail</Link>
              <Link to={`/books/edit/${bookId}`} className="btn btn-sm btn-outline-success">Update</Link>

              {purchaseAmount > 0 ? <button onClick={() => onDeleteBook(bookId)} className="btn btn-sm btn-outline-danger" disabled={true}>
                <span>Delete</span>
              </button> :
                <button onClick={() => onDeleteBook(bookId)} className="btn btn-sm btn-outline-danger" >
                  <span>Delete</span>
                </button>}
            </div>
            <small className="text-muted">Rp. {price}</small>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookComponent;