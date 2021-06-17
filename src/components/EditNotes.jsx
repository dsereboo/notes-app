import React from "react"
import { useState } from "react"
import {Form,Button} from "react-bootstrap"
import { editNote } from "../actions/noteActions"
import{connect} from "react-redux"

const EditNotes=(props)=>{

    const[notes,setNotes]=useState({
        id:props.noteData.id,
        date: props.noteData.date,
        body: props.noteData.body,
        title: props.noteData.title
    })

    const handleChange=(event)=>{
        setNotes({...notes, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.editNote(notes)
        props.handleClose()
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control name="date" type="text" value={notes.date}  readOnly/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="text" onChange={handleChange} value={notes.title} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Note</Form.Label>
                <Form.Control name="body" type="text" as="textarea" rows="7" onChange={handleChange} value={notes.body} />
            </Form.Group>
            <Button size="md" variant="primary custom" type="submit" block>Update</Button>
        </Form>
    )
}

const mapDispatchToProps={editNote:editNote}
export default connect(null, mapDispatchToProps)(EditNotes)