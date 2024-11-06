import React from "react";
import { blob1 } from "../assets";
import { blob2 } from "../assets";

function IntroPage() {
  return (
    <>
      <img className="absolute top-0 right-0" src={blob1} alt="" />
      <section>
        <h1 className="m-5 font-bold text-5xl">Quizzical App</h1>
        <form className="flex flex-col items-center gap-3">
          <label htmlFor="difficulty">Select Difficulty:</label>
          <select className="w-1/2" id="difficulty" value="">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            className="bg-blue-900 mt-4 w-1/2 px-6 py-4 rounded-lg text-white hover:bg-secondary font-inter font-medium text-base "
            type="submit"
          >
            Start quiz
          </button>
        </form>
      </section>
      <img className="absolute bottom-0 left-0" src={blob2} alt="" />
    </>
  );
}

export default IntroPage;
