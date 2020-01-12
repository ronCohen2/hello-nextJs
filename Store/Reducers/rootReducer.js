import { combineReducers } from "redux";
import reducer from "./Reducer";

const rootReducer = combineReducers({
  main: reducer
});

export default rootReducer;
