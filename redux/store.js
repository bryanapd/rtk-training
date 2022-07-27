import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/features/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})