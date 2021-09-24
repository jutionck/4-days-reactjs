import { useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteBook, getListBook } from "../../api/bookService";
import BookComponent from "./BookComponent";
import { tmpImage } from '../../api/BookApi'
import ModalComponent from "../modal/ModalComponent";

const BookList = ({ match }) => {

  const { path } = match;
  const [books, setBooks] = useState([]);
  const [modalShow, setModalShow] = useState({
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
    setModalShow({
      show: true,
      id
    })
  }

  const handleDeleteTrue = () => {
    if (modalShow.show && modalShow.id) {
      bookDelete(modalShow.id)
      setModalShow({
        show: false,
        id: null
      })
    }
  }

  const bookDelete = (id) => {
    return deleteBook(id)
      .then(response => {
        loadData();
      })
  }

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
      {
        modalShow.show && (
          <ModalComponent
            show={modalShow}
            handleDeleteTrue={handleDeleteTrue}
            onHide={() => setModalShow(false)}
          />
        )
      }
    </>
  );
}

export default BookList;