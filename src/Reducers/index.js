import { combineReducers } from "redux";
import userreducer from "./userreducer";

const rootreducer = combineReducers({
  userState: userreducer,
});
export default rootreducer;
