const initialState={notes:[
    {id:"",title:"", body:"", date:""}
]}

const noteReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_NOTE":
            return{...state, notes:[...state.notes, action.payload]};
        default:
            return state;
    }
}
export default noteReducer