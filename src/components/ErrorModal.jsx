import React from "react";
import { useNavigate } from "react-router-dom";

import { FaExclamationCircle } from "react-icons/fa";

const ErrorModal = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen top-0 left-0 bg-slate-500/50 backdrop-blur-md absolute flex justify-center items-center">
      <div className="flex flex-col items-center">
        <FaExclamationCircle style={{ fontSize: "48px", color: "#a63333" }} />
        <span className="my-2">연결에 실패했습니다.</span>
        <button
          className="px-3 py-2 rounded-lg bg-slate-500 hover:bg-slate-400 w-24 flex justify-center"
          onClick={() => navigate("/")}
        >
          다시시도
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
