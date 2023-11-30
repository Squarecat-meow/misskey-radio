import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cw: false,
  length: false,
};

export const readSettingSlice = createSlice({
  name: "readSetting",
  initialState,
  reducers: {
    cwStore: (state, action) => {
      state.cw = !state.cw;
    },
    lengthStore: (state, action) => {
      state.length = !state.length;
    },
  },
});

export const { cwStore, lengthStore } = readSettingSlice.actions;

export default readSettingSlice.reducer;
