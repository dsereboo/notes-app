export function addNote(newNote){
    return{
        type:"ADD_NOTE",
        payload:newNote,
    }
}