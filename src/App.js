import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row, Col,Modal} from "react-bootstrap"
import FloatButton from './components/FloatButton';
import AddNotes from './components/AddNotes';

function App() {
  //State and methods to hide/show modal
  const[show,setShow]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">New entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNotes handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      <Row className="no-flex">
        <h1 className="text-center">Notes</h1>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <FloatButton handleShow={handleShow} />
    </Container>
  );
}

export default App;
