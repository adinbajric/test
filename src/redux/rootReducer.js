import { combineReducers } from "redux";
import shoppingReducer from "./shopping/shopping-reducers";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
