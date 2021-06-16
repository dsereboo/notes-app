import React from "react"
import {connect} from "react-redux"
import { deleteNote } from "../actions/noteActions"
import { Card,Col,Button} from "react-bootstrap"


const Note=(props)=>{

    const handleDelete=()=>{
        props.deleteNote(props.noteInfo.id)
    }

    return (
      <Col md={{ span: 3 }}>
        <Card>
                <Card.Body>
                    <Card.Title>{props.noteInfo.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {props.noteInfo.date}{" "}
                    </Card.Subtitle>
                    <Card.Text>{props.noteInfo.body}</Card.Text>
                    <Card.Link href="#">
                        <Button size="sm" variant="primary" onClick="">
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