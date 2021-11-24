import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "../Reducers/index";
const store = createStore(rootreducer, applyMiddleware(thunk));
export default store;
