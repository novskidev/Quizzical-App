import React from "react";
import IntroPage from "./component/Intropage";
import "./App.css";
import SecondPage from "./component/secondpage";
import { blob1 } from "../src/assets";
import { blob2 } from "../src/assets";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="w-screen h-screen bg-primary flex flex-col items-center justify-center">
      <img className="absolute top-0 right-0" src={blob1} alt="" />
      <IntroPage hidden={true} />
      <SecondPage hidden={true} />
      <img className="absolute bottom-0 left-0" src={blob2} alt="" />
    </div>
  );
}

export default App;
