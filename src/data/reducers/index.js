import { combineReducers } from "redux";
import Books from "./books.reducer";

const rootReducer = combineReducers({
  Books,
});

export default rootReducer;
