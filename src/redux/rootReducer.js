import { combineReducers } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice.js";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
});

export default rootReducer;
