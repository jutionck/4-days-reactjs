import { Container, Row } from "react-bootstrap";
import CounterComponentHook from "./components/counter/hooks/CounterComponentHook";

function App() {
  return (
    <Container>
      <Row>
        {/* <BookList /> */}
        <CounterComponentHook />
      </Row>
    </Container>
  );
}

export default App;