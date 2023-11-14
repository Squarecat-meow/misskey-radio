import React from "react";

import RadioComponent from "../components/RadioComponent";
import NoteList from "./NoteList";

const MainPage = () => {
  return (
    <div className="flex flex-col w-screen items-center">
      <h1 className="text-4xl font-bold mb-2">📻 미스키-라디오</h1>
      <RadioComponent />
      <NoteList />
    </div>
  );
};

export default MainPage;
