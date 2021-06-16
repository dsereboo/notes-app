const initialState={notes:[
    {id:"bsjshj",title:"Sample1 ", body:"Always try new", date:"yy/dd/mm"}
]}

const noteReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_NOTE":
            return{...state, notes:[...state.notes, action.payload]};
        case "DELETE_NOTE":
            console.log(action.payload)
            let id=action.payload
            let undeletedNotes=state.notes.filter((note)=>note.id!==id)
            return{notes: undeletedNotes};
        default:
            return state;
    }
}
export default noteReducer