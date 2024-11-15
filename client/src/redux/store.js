import { configureStore, combineReducers } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice.js";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  // Add other reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
