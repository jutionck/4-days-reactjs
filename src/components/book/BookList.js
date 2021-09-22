import BookComponent from "./BookComponent";

const BookList = ({ dataBooks }) => {

  console.log(dataBooks);
  return (
    <>
      {
        dataBooks.map((book) =>
          <BookComponent
            key={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
          />
        )
      }
    </>
  );
}

export default BookList;