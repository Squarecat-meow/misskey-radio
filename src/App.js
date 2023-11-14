import React, { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import ModalWindow from "./components/ModalWindow";
import MainPage from "./pages/MainPage";
import PrivatePage from "./pages/PrivatePage";

function App() {
  const location = useLocation();

  return (
    <div>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<ModalWindow />} />
        <Route element={<PrivatePage />}>
          <Route path="/mainpage" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
