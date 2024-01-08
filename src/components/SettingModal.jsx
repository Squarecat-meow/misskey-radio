import React, { useState } from "react";

import { FaGear } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { cwStore, lengthStore } from "../slices/ReadSettingSlice";

import { useNavigate } from "react-router-dom";

import ToggleSwitch from "./ElementComponents/ToggleSwitch";

const SettingModal = () => {
  const [setting, setSetting] = useState(false);

  const navigate = useNavigate();

  const cw = useSelector((state) => state.readSetting.cw);
  const length = useSelector((state) => state.readSetting.length);

  const dispatch = useDispatch();

  const handleCWSetting = () => {
    dispatch(cwStore(!cw));
  };

  const handleLengthSetting = () => {
    dispatch(lengthStore(!length));
  };

  const handleLogoutSetting = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="ml-2">
      <FaGear style={{ fontSize: "48px" }} onClick={() => setSetting(true)} />
      {setting && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-20 backdrop-blur-sm">
          <div className="w-96 h-[18rem] bg-slate-200 backdrop-blur-sm rounded-lg shadow-lg">
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
              <div className="flex items-center p-2">
                <span>140자 이상 노트 읽기</span>
                <div className="ml-2" onClick={handleLengthSetting}>
                  <ToggleSwitch state={length} />
                </div>
              </div>
              <div className="p-2" onClick={handleLogoutSetting}>
                <FaDoorOpen style={{ fontSize: 48 }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingModal;
