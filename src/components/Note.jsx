import React,{useState} from "react"
import {connect} from "react-redux"
import { deleteNote } from "../actions/noteActions"
import { Card,Col,Button,Modal} from "react-bootstrap"
import EditNotes from "./EditNotes"


const Note=(props)=>{

    const handleDelete=()=>{
        props.deleteNote(props.noteInfo.id)
    }

     //State and methods to hide/show modal
     const[show,setShow]=useState(false)
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    return (
      <Col md={{ span: 3 }}>
         <Modal show={show} onHide={handleClose}>
             <Modal.Header>
                 <Modal.Title>Update Entry</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <EditNotes handleClose={handleClose} noteData={props.noteInfo}/>
             </Modal.Body>
        </Modal> 
        <Card>
                <Card.Body>
                    <Card.Title>{props.noteInfo.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {props.noteInfo.date}{" "}
                    </Card.Subtitle>
                    <Card.Text>{props.noteInfo.body}</Card.Text>
                    <Card.Link href="#">
                        <Button size="sm" variant="primary" onClick={handleShow}>
                            Edit
                        </Button>
                    </Card.Link>
                    <Card.Link href="#">
                        <Button size="sm" variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Card.Link>
                </Card.Body>
            </Card>
      </Col>
    );
}

const mapDispatchToProps={deleteNote: deleteNote}
export default connect(null, mapDispatchToProps)(Note)