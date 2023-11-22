import { configureStore } from "@reduxjs/toolkit";
import MisskeyReducer from "../slices/MisskeySlice";
import SpeakSettingReducer from "../slices/SpeakSettingSlice";
import readSettingReducer from "../slices/ReadSettingSlice";

export const store = configureStore({
  reducer: {
    misskey: MisskeyReducer,
    setting: SpeakSettingReducer,
    readSetting: readSettingReducer,
  },
});
