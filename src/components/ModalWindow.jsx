import React from "react";

import APITokenForm from "./APITokenForm";
import { motion } from "framer-motion";
import APILogin from "./APILogin";

const ModalWindow = () => {
  return (
    <motion.div
      className="flex h-screen justify-center items-center"
      initial={{ y: 0 }}
      transition={{ duration: 0.3, ease: "anticipate" }}
      exit={{ y: -window.innerHeight }}
    >
      <div className="flex items-center justify-center w-96 h-[18rem] rounded-md shadow-xl bg-slate-500/30 backdrop-blur-md ">
        <APILogin />
      </div>
    </motion.div>
  );
};

export default ModalWindow;
