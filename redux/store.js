import { configureStore } from "@reduxjs/toolkit";
import MediaQueryReducer from "./features/MediaQuerySlice";
import ReviewQueryReducer from "./features/ReviewQuerySlice";
import LiveChatSlice from "./features/LiveChatSlice";
import FilterSlice from "./features/FilterSlice";

export default configureStore({
  reducer: {
    mediaQuery: MediaQueryReducer,
    reviewQuery: ReviewQueryReducer,
    liveChat: LiveChatSlice,
    filter: FilterSlice,
  },
});
