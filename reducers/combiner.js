import countReducer from "./countReducer";
import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: countReducer,
    logged: loggedReducer
})

export default allReducers