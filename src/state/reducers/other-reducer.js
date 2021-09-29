const secondReducer = ( state = {name:"Norbert"},action) =>{
    switch(action.type){
        case"CHANGE-NAME":
            return switchTheme(state,action);
        default: return state;    

    }
}

    function switchTheme(incomingState,action){
        console.log("UPDATING STATE 2222..../");
        return incomingState.name = action.payload;
    }

export default secondReducer