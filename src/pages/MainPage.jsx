import React from "react";

import RadioComponent from "../components/RadioComponent";
import NoteList from "./NoteList";
import SettingModal from "../components/SettingModal";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MainPage = () => {
  const websocket = useSelector((state) => state.websocket);

  return (
    <motion.div
      initial={{ x: window.innerWidth }}
      transition={{ ease: "anticipate", duration: 0.5 }}
      animate={{ x: 0 }}
      exit={{ x: -window.innerWidth }}
    >
      <h1 className="text-center text-7xl font-extrabold text-green-600">
        미스키 라디오
      </h1>
      <div className="flex">
        <div className="flex flex-col items-center basis-1/3">
          <div className="flex items-center">
            <RadioComponent />
            <SettingModal />
          </div>
          <div>
            {websocket ? (
              <h1>WebSocket Connected</h1>
            ) : (
              <h1>WebSocket Disconnected</h1>
            )}
          </div>
        </div>
        <div className="basis-2/3">
          <NoteList />
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
