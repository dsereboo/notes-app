export function addNote(newNote){
    return{
        type:"ADD_NOTE",
        payload:newNote,
    }
}

export function deleteNote(noteID){
    return{
        type:"DELETE_NOTE",
        payload:noteID,
    }
}

export function editNote(updatedNote){
    return{
        type:"EDIT_NOTE",
        payload:updatedNote,
    }
}