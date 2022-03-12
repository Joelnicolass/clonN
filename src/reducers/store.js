//create store

import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./actions/index";

export default createStore(reducer, applyMiddleware(thunk));
