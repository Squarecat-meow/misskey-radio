import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rate: "1",
  pitch: "1",
  volume: "1",
};

export const speakSettingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    speedStore: (state, action) => {
      state.rate = action.payload;
    },
    pitchStore: (state, action) => {
      state.pitch = action.payload;
    },
    volumeStore: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const { speedStore, pitchStore, volumeStore } =
  speakSettingSlice.actions;

export default speakSettingSlice.reducer;
