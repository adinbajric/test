import { combineReducers } from "redux";
import shoppingReducer from "./shopping/shopping-reducers";

console.log("test", "i jos nesto");
console.log("test", "i jos nesto");

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
