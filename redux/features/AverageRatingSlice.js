import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const AverageRatingSlice = createSlice({
  name: "averageRating",
  initialState: {
    average: 0,
    fiveStarts: 0,
    fourStarts: 0,
    threeStarts: 0,
    twoStarts: 0,
    oneStarts: 0,
    amountAllReview: 0,
    },
    reducers: {
        setAverage: (state, action) => {
            
    },
    });
});

export default AverageRatingSlice.reducer;