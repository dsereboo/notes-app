import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row, Col} from "react-bootstrap"
import FloatButton from './components/FloatButton';

function App() {
  return (
    <Container>
      <Row className="no-flex">
        <h1 className="text-center">Notes</h1>
      </Row>
      <Row>
        <Col>
          <p>Notes come here</p>
        </Col>
      </Row>
      <FloatButton/>
    </Container>
  );
}

export default App;
