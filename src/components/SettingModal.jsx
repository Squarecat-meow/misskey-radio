import React, { useState } from "react";

import { FaGear } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cwStore } from "../slices/ReadSettingSlice";
import ToggleSwitch from "./ElementComponents/ToggleSwitch";

const SettingModal = () => {
  const [setting, setSetting] = useState(false);
  const cw = useSelector((state) => state.readSetting.cw);

  const dispatch = useDispatch();

  const handleCWSetting = () => {
    dispatch(cwStore(!cw));
  };

  return (
    <div className="ml-2">
      <FaGear style={{ fontSize: "48px" }} onClick={() => setSetting(true)} />
      {setting && (
        <div className="absolute top-0 left-0 z-20 w-screen h-screen flex items-center justify-center backdrop-blur-sm">
          <div className="w-96 h-[18rem] bg-slate-200 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col">
              <div>
                <FaTimes
                  style={{
                    fontSize: "42px",
                    float: "right",
                    padding: "0.5rem",
                  }}
                  onClick={() => setSetting(false)}
                />
              </div>
              <div className="flex items-center p-2">
                <span>CW 읽기</span>
                <div className="ml-2" onClick={handleCWSetting}>
                  <ToggleSwitch state={cw} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingModal;
