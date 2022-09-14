import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/features/counterSlice'
import postsSlice from "./features/postsSlice";
import usersSlice from "./features/usersSlice";
import { apiSlice } from "./features/apiSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    users: usersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})