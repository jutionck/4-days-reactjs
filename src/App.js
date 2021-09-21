import { Container, Row } from "react-bootstrap";
import BookList from "./components/book/BookList";

function App() {
  return (
    <Container>
      <Row>
        <BookList />
      </Row>
    </Container>
  );
}

export default App;