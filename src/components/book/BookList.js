import BookComponent from "./BookComponent";

const BookList = ({ dataBooks }) => {
  return (
    <>
      {
        dataBooks.map((book) => (
          <BookComponent
            key={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
            variant="primary" />
        ))
      }
      {
        dataBooks && !dataBooks.length && <h4>No Book Display</h4>
      }
    </>
  );
}

export default BookList;