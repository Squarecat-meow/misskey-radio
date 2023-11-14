import { configureStore } from "@reduxjs/toolkit";
import MisskeyReducer from "../slices/MisskeySlice";
import SpeakSettingReducer from "../slices/SpeakSettingSlice";

export const store = configureStore({
  reducer: {
    misskey: MisskeyReducer,
    setting: SpeakSettingReducer,
  },
});
