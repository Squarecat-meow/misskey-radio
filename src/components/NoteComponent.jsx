import React from "react";

import { FaRetweet } from "react-icons/fa";

const NoteComponent = (props) => {
  return (
    <div className="border my-2 flex items-center">
      {props.data.renote[0] ? (
        <div>
          <div className="relative w-16 h-16 flex justify-center items-center">
            <img
              src={props.data.avatarUrl}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <img
              src={props.data.renote[0].renoteUser.avatarUrl}
              alt="avatar"
              className="w-8 h-8 rounded-full left-8 top-8 absolute border-4 border-white border-solid"
            />
          </div>
        </div>
      ) : (
        <img
          src={props.data.avatarUrl}
          alt="avatar"
          className="w-16 h-16 rounded-full "
        />
      )}
      <div className="flex flex-col ml-2">
        <div>
          {props.data.renote[0] ? (
            <div className="flex">
              <span className="font-bold text-xs mb-2">
                {props.data.username}
              </span>
              <FaRetweet className="mx-2" />
              <span className="font-bold text-xs mb-2">
                {props.data.renote[0].renoteUser.username}
              </span>
            </div>
          ) : (
            <div className="flex">
              <span className="font-bold text-xs mb-2">
                {props.data.username}
              </span>
            </div>
          )}
        </div>
        <span className=" break-all">{props.data.text}</span>
        {props.data.renote[0] && (
          <div>
            <span className="w-[500px] text-cyan-700 break-all">
              {props.data.renote[0].renoteText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteComponent;
