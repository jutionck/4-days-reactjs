import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getListBook } from "../../api/bookService";
import BookComponent from "./BookComponent";

const BookList = ({ match }) => {

  const { path } = match;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getListBook()
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Container>
      <h3 className="mt-5">Book Page</h3>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-3 text-uppercase">Add Book</Link>
      <Row>
        {
          books && books.map((book) => (
            <BookComponent
              key={book.id}
              bookId={book.id}
              title={book.title}
              description={book.description}
              price={book.price}
              variant="primary" />
          ))
        }
        {
          books && !books.length && <h4>No Book Display</h4>
        }
      </Row>
    </Container>
  );
}

export default BookList;