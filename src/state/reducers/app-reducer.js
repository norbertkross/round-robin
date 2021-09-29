const appReducer = ( state = {isdark:false},action) =>{
    switch(action.type){
        case "CHANGE-THEME":
            return switchTheme(state);
        default: return state;    
    }
}

    function switchTheme(incomingState){
        var newState = incomingState.isdark === false? { ...incomingState, isdark: true } : { ...incomingState, isdark: false };
        console.log(` new State: ${JSON.stringify(incomingState)}.....`);
        return newState
    }

export default appReducer