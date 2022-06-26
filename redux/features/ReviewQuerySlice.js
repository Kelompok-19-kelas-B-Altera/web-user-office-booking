import { createSlice } from "@reduxjs/toolkit";

export const ReviewQuery = createSlice({
  name: "reviewQuery",
  initialState: {
    togglePopupReview: false,
    isSubmitSucces: false
  },
  reducers: {
    handleTogglePopupReview: (state) => {
      state.togglePopupReview = !state.togglePopupReview
      state.isSubmitSucces = false
    },
    handleIsSubmitSucces: (state) => {
      state.isSubmitSucces = true
    }
  },
});

export const { handleTogglePopupReview, handleIsSubmitSucces } = ReviewQuery.actions

export default ReviewQuery.reducer;
