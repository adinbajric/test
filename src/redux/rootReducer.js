import { combineReducers } from "redux";
import shoppingReducer from "./shopping/shopping-reducers";

console.log("test");

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
