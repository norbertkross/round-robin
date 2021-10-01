import {setData } from "../storage-local/setANDgetStorage";

const appReducer = ( state = {isdark:false},action) =>{
    switch(action.type){
        case "CHANGE-THEME":
            return switchTheme(state);
        case "GET-THEME-FROM-LOCAL":
            return setThemeFromLocalStorage(state,action.payload);
        default: return state;    
    }
}


    function switchTheme(incomingState){
        var newState = incomingState.isdark === false? { ...incomingState, isdark: true } : { ...incomingState, isdark: false };
        setData("theme-value",`${newState.isdark}`)
        return newState;
    }

    function setThemeFromLocalStorage(incomingstate,newstate){
        console.log(`NEW sTate: ${newstate}`);
        // setData("theme-value",`${newState.isdark}`)
        return { ...incomingstate, isdark: newstate }
    }

export default appReducer