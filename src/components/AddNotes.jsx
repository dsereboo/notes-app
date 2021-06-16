import React,{useState,useEffect} from "react"
import {Form,Button} from "react-bootstrap"

const AddNotes=(props)=>{
    const [date,setDate]=useState("")
    const [note, setNote]=useState({
        id:"", date:"", title:"", body:"",
    })


    useEffect(
        ()=>{
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            const finalDate = today.toUTCString();
            setDate(finalDate);
        },[]
    )

    const handleChange=(event)=>{
        setNote({...note, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        note.id=Math.random().toString(36).slice(2)
        props.handleClose()
    }

    return(
       <Form onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label>Date</Form.Label>
               <Form.Control type="text" name="date" value={date} readOnly/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Title</Form.Label>
               <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Notes</Form.Label>
               <Form.Control type="text" name="body" placeholder="Note" as="textarea" rows="7" onChange={handleChange}/>
           </Form.Group>
           <Button size="md" variant="primary custom" type="submit" block>Create</Button>
       </Form>
    )
}
export default AddNotes