import React from "react";
import IntroPage from "./component/Intropage";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-primary flex flex-col items-center justify-center">
      <IntroPage hidden={true} />
    </div>
  );
}

export default App;
