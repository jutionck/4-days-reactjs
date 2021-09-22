import { Container, Row } from "react-bootstrap";
import BookList from "./components/book/BookList";
import CounterComponent from "./components/counter/CounterComponent";
import Counter from "./components/counter/hooks/Counter";

const App = () => {
  return (
    <Container>
      <Row>
        {/* <BookList /> */}
        {/* <CounterComponent /> */}
        <Counter />
      </Row>
    </Container>
  );
}

export default App;