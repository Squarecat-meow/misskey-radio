import { configureStore } from "@reduxjs/toolkit";
import MisskeyReducer from "../slices/MisskeySlice";
import SpeakSettingReducer from "../slices/SpeakSettingSlice";
import readSettingReducer from "../slices/ReadSettingSlice";
import WebSocketReducer from "../slices/WebSocketSlice";

export const store = configureStore({
  reducer: {
    misskey: MisskeyReducer,
    setting: SpeakSettingReducer,
    readSetting: readSettingReducer,
    websocket: WebSocketReducer,
  },
});
