import React, { useState, useEffect } from "react";
import IntroPage from "./component/Intropage";
import "./App.css";
import SecondPage from "./component/secondpage";
import { blob1 } from "../src/assets";
import { blob2 } from "../src/assets";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [showIntro, setShowintro] = useState(false);
  const [showQuiz, setShowquiz] = useState(true);

  const handleShow = (e) => {
    e.preventDefault();
    setShowintro((prev) => !prev);
    setShowquiz((prev) => !prev);
  };

  const handleChange = (e) => {
    setDifficulty(e.target.value);
    console.log(difficulty)
    console.log(e.target.value)
  };

  return (
    <div className="w-screen h-screen bg-primary flex flex-col items-center justify-center">
      <img className="absolute top-0 right-0" src={blob1} alt="" />
      <IntroPage
        hidden={showIntro}
        onClick={handleShow}
        handleChange={handleChange}
        difficulty={difficulty}
      />
      <SecondPage hidden={showQuiz} difficulty={difficulty} />
      <img className="absolute bottom-0 left-0" src={blob2} alt="" />
    </div>
  );
}

export default App;
