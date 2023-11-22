import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cw: false,
};

export const readSettingSlice = createSlice({
  name: "readSetting",
  initialState,
  reducers: {
    cwStore: (state, action) => {
      state.cw = !state.cw;
    },
  },
});

export const { cwStore } = readSettingSlice.actions;

export default readSettingSlice.reducer;
