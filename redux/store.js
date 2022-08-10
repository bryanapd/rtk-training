import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/features/counterSlice'
import postsSlice from "./features/postsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
  }
})