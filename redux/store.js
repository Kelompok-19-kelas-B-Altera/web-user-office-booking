import { configureStore } from "@reduxjs/toolkit";
import  MediaQueryReducer  from "./features/MediaQuerySlice";
import  ReviewQueryReducer  from "./features/ReviewQuerySlice";

export default configureStore({
  reducer: {
    mediaQuery: MediaQueryReducer,
    reviewQuery: ReviewQueryReducer
  }
})
