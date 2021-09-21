import { Container, Row } from "react-bootstrap";
import CounterComponent from "./components/counter/CounterComponent";

function App() {
  return (
    <Container>
      <Row>
        {/* <BookList /> */}
        <CounterComponent />
      </Row>
    </Container>
  );
}

export default App;