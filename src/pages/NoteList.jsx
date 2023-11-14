import React, { useEffect } from "react";
import NoteComponent from "../components/NoteComponent";

import { useDispatch, useSelector } from "react-redux";
import { noteStore } from "../slices/MisskeySlice";

import { processingJSON } from "../functions/ProcessingJSON";

const NoteList = () => {
  const dispatch = useDispatch();
  const noteData = useSelector((state) => state.misskey.note);

  const server = localStorage.getItem("server");
  const token = localStorage.getItem("token");

  const webSocketUrl = `wss://${server}/streaming?i=${token}`;
  const ws = new WebSocket(webSocketUrl);

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected to " + webSocketUrl);
      ws.send(
        JSON.stringify({
          type: "connect",
          body: {
            channel: "homeTimeline",
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
  }, []);

  return (
    <div className="w-2/4 flex flex-col-reverse">
      {noteData.map((data) => (
        <NoteComponent key={data.id} data={data} />
      ))}
    </div>
  );
};

export default NoteList;
