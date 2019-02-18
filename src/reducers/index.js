import { combineReducers } from "redux";
import skillReducer from "./skillReducer";
// Reducers
export default combineReducers({
  skills: skillReducer
});
