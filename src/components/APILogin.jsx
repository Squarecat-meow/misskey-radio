import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const APILogin = () => {
  const [server, setServer] = useState("");

  const sessionId = uuidv4();

  const authForm = `http://${server}/miauth/${sessionId}`;
  const hostname = window.location.host;
  const protocol = window.location.protocol;

  const handleServerChange = (e) => {
    setServer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("server", server);

    window.open(
      `${authForm}?name=Misskey-radio&callback=${protocol}//${hostname}/misskey-radio-pages/callbackpage&permission=read:account`,
      "_self"
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>미스키 서버: http://</span>
          <input
            name="server"
            onChange={handleServerChange}
            autoComplete="off"
            className="w-48"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 rounded-lg bg-slate-500 hover:bg-slate-400 w-20"
        >
          확인
        </button>
      </form>
    </div>
  );
};

export default APILogin;
