import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import RadioSettingComponents from "./RadioSettingComponents";

const RadioComponent = () => {
  const [playPause, setPlayPause] = useState(false);
  const note = useSelector((state) => state.misskey.note);

  const rate = useSelector((state) => state.setting.rate);
  const pitch = useSelector((state) => state.setting.pitch);
  const volume = useSelector((state) => state.setting.volume);

  let noteText;

  if (note[note.length - 1]?.renote[0]) {
    noteText = "리노트입니다. " + note[note.length - 1].renote[0]?.renoteText;
  } else {
    noteText = note[note.length - 1]?.text;
  }

  if (typeof noteText !== "undefined" && noteText.indexOf("https:") >= 0) {
    const httpIndex = noteText.indexOf("http");
    const httpSpaceIndex = noteText.indexOf(" ", httpIndex + 1);
    const urlInNote = noteText.slice(httpIndex, httpSpaceIndex);
    noteText = noteText.replace(urlInNote, ". 링크");
  }

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(noteText);

  utterThis.rate = rate;
  utterThis.pitch = pitch;
  utterThis.volume = volume;

  const startRead = () => {
    synth.speak(utterThis);

    let r = setInterval(() => {
      if (!synth.speaking) {
        clearInterval(r);
      } else {
        synth.pause();
        synth.resume();
      }
    }, 14000);
  };

  const stopRead = () => {
    synth.cancel();
  };

  const toggleRead = () => {
    setPlayPause(!playPause);
    switch (playPause) {
      case true:
        startRead();
        break;

      default:
        stopRead();
        break;
    }
  };

  utterThis.onerror = (e) => {
    console.log(e.error);
  };

  useEffect(() => {
    startRead(noteText);
  });
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
      </div>
    </div>
  );
};

export default RadioComponent;
