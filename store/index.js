import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./cart/userSlice";
import todoSliceReducer from "./cart/todoSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    todo: todoSliceReducer,
  },
});
