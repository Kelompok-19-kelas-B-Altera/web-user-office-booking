import { configureStore } from "@reduxjs/toolkit";
import  MediaQueryReducer  from "./features/MediaQuerySlice";
import LiveChatSlice from "./features/LiveChatSlice";

export default configureStore({
  reducer: {
    mediaQuery: MediaQueryReducer,
    liveChat: LiveChatSlice
  }
})
