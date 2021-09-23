import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteBook, getListBook } from "../../api/bookService";
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
        console.log(response.data);
        setBooks(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const bookDelete = id => {
    console.log("called", id)
    deleteBook(id)
      .then((res) => {
        console.log('res', res)
        loadData()
      })
  };

  return (
    <>
      <h3>Book Page</h3>
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
              purchaseAmount={book.purchaseAmount}
              onDeleteBook={bookDelete}
              variant="primary" />
          ))
        }
        {
          books && !books.length && <h4>No Book Display</h4>
        }
      </Row>
    </>
  );
}

export default BookList;