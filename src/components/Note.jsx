import React from "react"
import { Modal,Card,Col } from "react-bootstrap"

const Note=(props)=>{
    return(
        <Col md={{span:3}}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.noteInfo.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.noteInfo.date} </Card.Subtitle>
                    <Card.Text>{props.noteInfo.body}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Note