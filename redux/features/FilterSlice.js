import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
	name: "filter",
	initialState: {
		complex: [],
    periodDate: []
	},
	reducers: {
    addPeriodDate: (state, payload) => {
      state.periodDate = payload.payload.split(",")
    }
	},
});

export const { addPeriodDate } = FilterSlice.actions

export default FilterSlice.reducer;
