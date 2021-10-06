import appReducer from "./app-reducer";
import secondReducer from "./other-reducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const allReducer = (history) =>combineReducers({
    router: connectRouter(history),
    appReducer,
    secondReducer,
})

export default allReducer 