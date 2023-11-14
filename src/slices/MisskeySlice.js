import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  server: "",
  token: "",
  note: [],
};

export const misskeySlice = createSlice({
  name: "misskey",
  initialState,
  reducers: {
    serverStore: (state, action) => {
      state.server = action.payload.server;
      state.token = action.payload.token;
    },
    noteStore: (state, action) => {
      state.note = [...state.note, action.payload];
    },
  },
});

export const { serverStore, noteStore } = misskeySlice.actions;

export default misskeySlice.reducer;
