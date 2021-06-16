const initialState={notes:[
    {id:"",title:"", body:"", date:""}
]}

const noteReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default noteReducer