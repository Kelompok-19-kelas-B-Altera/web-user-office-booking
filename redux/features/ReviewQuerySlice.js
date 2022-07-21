import { createSlice } from "@reduxjs/toolkit";

export const ReviewQuery = createSlice({
  name: "reviewQuery",
  initialState: {
    togglePopupReview: false,
    isSubmitSucces: ""
  },
  reducers: {
    handleTogglePopupReview: (state) => {
      state.togglePopupReview = !state.togglePopupReview
      state.isSubmitSucces = false
    },
    handleIsSubmitSucces: (state, payload) => {
      state.isSubmitSucces = payload.payload
    }
  },
});

export const { handleTogglePopupReview, handleIsSubmitSucces } = ReviewQuery.actions

export default ReviewQuery.reducer;
