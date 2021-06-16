import React from "react"
import {Container, Row} from "react-bootstrap"
import {connect} from "react-redux"
import Note from "./Note"

const Notes=(props)=>{
    return(
        <Container>
            <Row>
                {props.notes.map(note=>(
                    <Note noteInfo={note}/>
                ))}
            </Row>
        </Container>
    )
}


const mapStateToProps=(state)=>{
    return{
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {})(Notes)
