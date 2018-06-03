import { createStore, combineReducers } from "redux";
import reducer from "./reducer/reducer";
// tao ra store
const store = createStore(reducer);

export default store;

// tich hop provider: co 1 props chinh la store ta tao ra
