const initialState={notes:[
    {id:"bsjshj",title:"Sample1 ", body:"Always try new", date:"yy/dd/mm"}
]}

const noteReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_NOTE":
            return{...state, notes:[...state.notes, action.payload]};
        case "DELETE_NOTE":
            let id=action.payload
            let undeletedNotes=state.notes.filter((note)=>note.id!==id)
            return{notes: undeletedNotes};
        case "EDIT_NOTE":
            let editID=action.payload.id
            let updatedNotes= state.notes.map((note)=> note.id===editID? action.payload:note)
            return{notes:updatedNotes};
        default:
            return state;
    }
}
export default noteReducer