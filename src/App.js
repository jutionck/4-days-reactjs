import { Container, Row } from "react-bootstrap";
import BookComponent from "./components/book/BookComponent";

function App() {

  return (
    <Container>
      <Row>
        <BookComponent title="Warkop DKI Reborn" description="Warkop DKI Reborn Description" variant="primary" />
        <BookComponent title="Warkop DKI Reborn 2" description="Warkop DKI Reborn Description" variant="primary" />
        <BookComponent title="Warkop DKI Reborn 3" description="Warkop DKI Reborn Description" variant="primary" />
        <BookComponent title="Warkop DKI Reborn 4" description="Warkop DKI Reborn Description" variant="primary" />
      </Row>
    </Container>
  );
}

export default App;

/**
 * Component ada 2 (dua) jenis
 * 1. stateLess Component -> functional component
 * 2. stateFul Component -> class componnet
 */