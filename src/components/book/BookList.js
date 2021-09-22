import { books } from "../../api/BookApi";
import BookComponent from "./BookComponent";

const BookList = () => {
  return (
    <>
      {
        books.map((book) =>
          <BookComponent
            key={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
            variant="primary" />
        )
      }
    </>
  );
}

export default BookList;