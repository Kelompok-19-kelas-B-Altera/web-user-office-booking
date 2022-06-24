import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const LiveChatSlice = createSlice({
	name: "liveChat",
	initialState: {
		toggleChat: false,
	},
	reducers: {
		handleToggleChat: (state) => {
			state.toggleChat = !state.toggleChat;
		},
	},
});

export const { handleToggleChat } = LiveChatSlice.actions

export default LiveChatSlice.reducer;
