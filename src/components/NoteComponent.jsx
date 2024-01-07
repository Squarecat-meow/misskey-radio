import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FaRetweet } from "react-icons/fa";

const NoteComponent = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="border my-2 p-2 rounded-3xl shadow-lg flex items-center backdrop-blur-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
        exit={{ x: 50, opacity: 0 }}
      >
        {props.data.renote[0] ? (
          <div>
            <div className="relative w-16 h-16 z-10 flex justify-center items-center object-cover">
              <img
                src={props.data.avatarUrl}
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <img
                src={props.data.renote[0].renoteUser.avatarUrl}
                alt="avatar"
                className="w-8 h-8 rounded-full left-8 top-8 absolute border-4 border-white border-solid object-cover"
              />
            </div>
          </div>
        ) : (
          <img
            src={props.data.avatarUrl}
            alt="avatar"
            className="w-16 h-16 rounded-full  object-cover"
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
                  {props.data.renote[0].renoteUser.name}
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
          {props.data.cw !== "" ? (
            <div>
              <span className="break-all font-bold">{props.data.cw}</span>
            </div>
          ) : (
            <span className=" break-all">{props.data.text}</span>
          )}
          {props.data.renote[0] && (
            <div>
              <span className="w-[500px] text-cyan-700 break-all">
                {props.data.renote[0].renoteText}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NoteComponent;
