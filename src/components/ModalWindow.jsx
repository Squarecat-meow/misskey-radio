import React from "react";

import APITokenForm from "./APITokenForm";

const ModalWindow = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex items-center justify-center w-96 h-[18rem] rounded-md shadow-xl bg-slate-300">
        <APITokenForm />
      </div>
    </div>
  );
};

export default ModalWindow;
