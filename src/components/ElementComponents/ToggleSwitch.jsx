import React from "react";

const ToggleSwitch = (props) => {
  return (
    <div
      className={`transition flex items-center w-10 h-5 bg-slate-400 rounded-full ${
        props.state && "bg-green-400"
      }`}
    >
      <div
        className={`transition w-3 h-3 m-1 bg-white rounded-full ${
          props.state && "translate-x-5"
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
