import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useNavigate } from "react-router-dom";

const APILogin = () => {
  const navigate = useNavigate();
  const [server, setServer] = useState("");

  const sessionId = uuidv4();

  const authForm = `http://${server}/miauth/${sessionId}`;

  const handleServerChange = (e) => {
    setServer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*     window.open(
      `${authForm}?name=Misskey-radio&callback=http://localhost:3000/misskey-radio-pages`,
      "_self"
    ); */

    const token = await fetch(`/api/miauth/${sessionId}/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      //localStorage.setItem("server", res.server);
      //localStorage.setItem("token", res.token);
    });

    //navigate("/mainpage");
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
