import { configureStore } from "@reduxjs/toolkit";
import  MediaQueryReducer  from "./features/MediaQuerySlice";

export default configureStore({
  reducer: {
    mediaQuery: MediaQueryReducer
  }
})
