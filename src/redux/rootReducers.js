import { combineReducers } from "redux";
import formReducer from "./reducers/formReducer";

const rootReducers = combineReducers({
    form: formReducer
})

export default rootReducers;