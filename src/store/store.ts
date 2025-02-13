import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
