import React from "react";

import { useDispatch } from "react-redux";
import {
  pitchStore,
  speedStore,
  volumeStore,
} from "../slices/SpeakSettingSlice";

const RadioSettingComponents = () => {
  const dispatch = useDispatch();

  const speedChange = (e) => {
    dispatch(speedStore(e.target.value));
  };

  const pitchChange = (e) => {
    dispatch(pitchStore(e.target.value));
  };

  const volumeChange = (e) => {
    dispatch(volumeStore(e.target.value));
  };

  return (
    <div className="ml-2 flex flex-col">
      <label>
        속도:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.2"
          id="rate"
          defaultValue="1"
          onMouseUp={speedChange}
        />
      </label>
      <label>
        피치:
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          id="pitch"
          defaultValue="1"
          onMouseUp={pitchChange}
        />
      </label>
      <label>
        볼륨:
        <input
          type="range"
          min="0.5"
          max="1"
          step="0.1"
          id="pitch"
          defaultValue="1"
          onMouseUp={volumeChange}
        />
      </label>
    </div>
  );
};

export default RadioSettingComponents;
