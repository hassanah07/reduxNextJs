// reducers/index.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
// Import other reducers as needed

const rootReducer = combineReducers({
  cart: cartReducer
  // Add other reducers here
});

export default rootReducer;
