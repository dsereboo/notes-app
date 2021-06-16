import React,{useState} from "react"
import {Form} from "react-bootstrap"

const AddNotes=(props)=>{
    const [date,setDate]=useState("")
    const [note, setNote]=useState({
        id:"", date:"", title:"", body:"",
    })

    const findDate=()=>{
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const finalDate=today.toDateString();
        setDate(finalDate)
    }

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
               <Form.Label></Form.Label>
               <Form.Control type="text" name="date" value={date} readOnly/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Title</Form.Label>
               <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Notes</Form.Label>
               <Form.Control type="text" name="" placeholder="" onChange={handleChange}/>
           </Form.Group>
       </Form>
    )
}
export default AddNotes