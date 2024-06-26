import { combineReducers } from "redux";

import CartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  cart: CartReducer,
  user: userReducer,
});