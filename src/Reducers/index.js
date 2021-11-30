import { combineReducers } from "redux";
import userreducer from "./userreducer";
import articleReducer from "./articlereducer";

const rootreducer = combineReducers({
  userState: userreducer,
  articlereducer: articleReducer,
});
export default rootreducer;
