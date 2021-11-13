import { combineReducers } from "redux";
import shoppingReducer from "./shopping/shopping-reducers";

console.log("lejla");
console.log("lejla");

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
