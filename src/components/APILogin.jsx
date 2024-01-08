import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { serverStore } from "../slices/MisskeySlice";

const APILogin = () => {
  const [server, setServer] = useState("");
  const [token, setToken] = useState("");

  const sessionId = uuidv4();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const server = localStorage.getItem("server");
      const token = localStorage.getItem("token");

      dispatch(serverStore({ server: server, token: token }));

      navigate("/mainpage");
    }
  }, []);

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
