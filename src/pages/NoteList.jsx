import React, { useEffect, useState } from "react";
import NoteComponent from "../components/NoteComponent";

import { useDispatch, useSelector } from "react-redux";
import { noteStore } from "../slices/MisskeySlice";

import { processingJSON } from "../functions/ProcessingJSON";
import ErrorModal from "../components/ErrorModal";

const NoteList = () => {
  const dispatch = useDispatch();
  const noteData = useSelector((state) => state.misskey.note);

  const [timeline, setTimeline] = useState("homeTimeline");
  const [error, setError] = useState(false);

  const server = localStorage.getItem("server");
  const token = localStorage.getItem("token");

  const webSocketUrl = `wss://${server}/streaming?i=${token}`;
  const ws = new WebSocket(webSocketUrl);

  const handleTLSelector = (e) => {
    setTimeline(e.target.value);
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected to " + webSocketUrl + "in " + timeline);
      ws.send(
        JSON.stringify({
          type: "connect",
          body: {
            channel: timeline,
            id: "3",
          },
        })
      );
    };
    ws.onclose = () => {
      console.log("disconnected from " + webSocketUrl);
    };
    ws.onerror = (error) => {
      console.log("connection failed with: " + error);
      setError(true);
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const finalData = processingJSON(data);
      dispatch(noteStore(finalData));
    };

    return () => {
      console.log("clean up");
      ws.close();
    };
  }, [webSocketUrl, timeline]);

  return (
    <div className="flex flex-col mt-2 items-center justify-center w-full">
      <select name="timeline" id="timeline" onChange={handleTLSelector}>
        <option value="homeTimeline">홈</option>
        <option value="globalTimeline">연합</option>
        <option value="hybridTimeline">소셜</option>
      </select>
      {error ? (
        <ErrorModal />
      ) : (
        <div className="w-3/4 flex flex-col-reverse">
          {noteData.map((data) => (
            <NoteComponent key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
