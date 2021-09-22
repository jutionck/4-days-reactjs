import { books } from "../../api/BookApi";
import BookComponent from "./BookComponent";

const BookList = ({ dataBooks }) => {
  return (
    <>
      {
        dataBooks.map((book) => (
          <BookComponent
            key={book.id}
            bookId={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
            variant="primary" />
        ))
      }
      {
        books && !books.length && <h4>No Book Display</h4>
      }
    </>
  );
}

export default BookList;