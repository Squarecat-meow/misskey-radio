import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import ModalWindow from "./components/ModalWindow";
import MainPage from "./pages/MainPage";
import PrivatePage from "./pages/PrivatePage";
import { AnimatePresence } from "framer-motion";
import CallbackPage from "./pages/CallbackPage";

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<ModalWindow />} />
          <Route path="/callbackpage" element={<CallbackPage />} />
          <Route element={<PrivatePage />}>
            <Route path="/mainpage" element={<MainPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <div className="fixed -z-10 top-96 -left-[18rem] rounded-full w-[60rem] h-[60rem] bg-gradient-to-b from-green-300/50 to-slate-400/50" />
      <div className="fixed -z-10 -top-[24rem] -right-12 rounded-full w-[60rem] h-[60rem] bg-gradient-to-b from-slate-400/50 to-green-300/50" />
    </div>
  );
}

export default App;
