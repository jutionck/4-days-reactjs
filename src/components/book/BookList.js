import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteBook, getListBook } from "../../api/bookService";
import BookComponent from "./BookComponent";
import { tmpImage } from '../../api/BookApi'
import Popup from "../modal/Popup";

const BookList = ({ match }) => {

  const { path } = match;
  const [books, setBooks] = useState([]);
  const [popup, setPopup] = useState({
    show: false,
    id: null
  });

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    getListBook()
      .then((response) => {
        console.log(response.data);
        setBooks(response.data)
      })
  }

  const handleDelete = (id) => {
    setPopup({
      show: true,
      id
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

  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      bookDelete(popup.id)
      setPopup({
        show: false,
        id: null,
      });
    }
  };

  return (
    <>
      <h3>Book Page</h3>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-3 text-uppercase">Add Book </Link>
      <Row>
        {
          books.map((book) => (
            <BookComponent
              key={book.id}
              bookId={book.id}
              title={book.title}
              description={book.description}
              purchaseAmount={book.purchaseAmount}
              price={book.price}
              image={tmpImage}
              path={path}
              handleDelete={handleDelete}
            />
          ))
        }
        {
          books && !books.length && <h4>No Book Display</h4>
        }
      </Row>
      {popup.show && (
        <Popup
          show={popup}
          handleDeleteTrue={handleDeleteTrue}
          onHide={() => setPopup(false)}
        />
      )}
    </>
  );
}

export default BookList;