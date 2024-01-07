import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  websocket: false,
};

export const webSocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    webSocketStore: (state, action) => {
      state.websocket = action.payload;
    },
  },
});

export const { webSocketStore } = webSocketSlice.actions;

export default webSocketSlice.reducer;
