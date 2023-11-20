import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const APITokenForm = () => {
  const [server, setServer] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleServerChange = (e) => {
    setServer(e.target.value);
  };

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("server", server);
    localStorage.setItem("token", token);

    navigate("/mainpage");
  };

  return (
    <div>
      <form onSubmit={formSubmit} className="flex flex-col">
        <div className="mb-3 w-[18rem]">
          <span className="mr-9">Misskey Server</span>
          <input
            name="server"
            onChange={handleServerChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-3 w-[18rem]">
          <span className="mr-3">Misskey API Token</span>
          <input name="token" onChange={handleTokenChange} autoComplete="off" />
        </div>
        <button
          type="submit"
          className="px-3 py-2 rounded-lg bg-slate-500 hover:bg-slate-400 w-24"
        >
          확인
        </button>
      </form>
    </div>
  );
};

export default APITokenForm;
