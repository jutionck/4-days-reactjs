import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookComponent from "./BookComponent";

const BookList = ({ match }) => {

  const { path } = match

  const [getBooks, setBooks] = useState([
    {
      id: 1,
      title: 'Asesmen Pembelajaran Berbasis Komputer Dan Android',
      description: 'Implementasi Teknologi Informasi dan Komunikasi (TIK) pada lembaga pendidikan saat ini sudah menjadi keharusan, karena penerapan TIK dapat menjadi salah satu indikator keberhasilan suatu institusi pendidikan. Tidak sedikit dosen yang memanfaatkan kemajuan teknologi tersebut.',
      image: 'https://cdn.gramedia.com/uploads/items/Asesmen_Pembelajaran_Berbasis_Komputer_dan_Android.jpg'
    }
  ]);

  return (
    <Container>
      <h3 className="mt-5">Book Page</h3>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-3 text-uppercase">Add Book</Link>
      <Row>
        {
          getBooks.map((book) => (
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
          getBooks && !getBooks.length && <h4>No Book Display</h4>
        }
      </Row>
    </Container>
  );
}

export default BookList;