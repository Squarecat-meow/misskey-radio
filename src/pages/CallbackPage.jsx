import React, { useEffect } from "react";

const CallbackPage = () => {
  const server = localStorage.getItem("server");

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const sessionId = params.get("session");

  useEffect(() => {
    fetchToken();

    async function fetchToken() {
      const response = await fetch(
        `https://${server}/api/miauth/${sessionId}/check`,
        {
          method: "POST",
        }
      );

      const jsondata = await response.json();
      const hostname = window.location.host;
      const protocol = window.location.protocol;
      localStorage.setItem("token", jsondata.token);
      window.location.replace(
        `${protocol}//${hostname}/misskey-radio-pages/mainpage`
      );
    }
  });

  return <div />;
};

export default CallbackPage;
