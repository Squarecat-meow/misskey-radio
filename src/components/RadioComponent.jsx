import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import RadioSettingComponents from "./RadioSettingComponents";
import { ProcessingRadio } from "../functions/ProcessingRadio";
import RadioSampleComponent from "./ElementComponents/RadioSampleComponent";

const RadioComponent = () => {
  const [playPause, setPlayPause] = useState(false);
  const note = useSelector((state) => state.misskey.note);
  const websocket = useSelector((state) => state.websocket);

  const rate = useSelector((state) => state.setting.rate);
  const pitch = useSelector((state) => state.setting.pitch);
  const volume = useSelector((state) => state.setting.volume);

  const noteText = ProcessingRadio(note);

  const synth = window.speechSynthesis;

  const startRead = (text) => {
    const utterThis = new SpeechSynthesisUtterance(text);

    utterThis.rate = rate;
    utterThis.pitch = pitch;
    utterThis.volume = volume;

    synth.speak(utterThis);

    let r = setInterval(() => {
      if (!synth.speaking) {
        clearInterval(r);
      } else {
        synth.pause();
        synth.resume();
      }
    }, 14000);

    utterThis.onerror = (e) => {
      console.log(e.error);
    };
  };

  const stopRead = () => {
    synth.cancel();
  };

  const toggleRead = () => {
    setPlayPause(!playPause);
    if (playPause === true) {
      startRead();
    } else {
      stopRead();
    }
  };

  useEffect(() => {
    startRead(noteText);
  }, [noteText]);

  return (
    <div className="flex items-center">
      <div onClick={toggleRead}>
        {playPause ? (
          <FaPauseCircle style={{ fontSize: "48px" }} />
        ) : (
          <FaPlayCircle style={{ fontSize: "48px" }} />
        )}
      </div>
      <div>
        <RadioSettingComponents />
        <RadioSampleComponent />
      </div>
    </div>
  );
};

export default RadioComponent;
