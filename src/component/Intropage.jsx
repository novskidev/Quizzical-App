import React from "react";

function IntroPage({ hidden, onClick, handleChange, difficulty }) {
  return (
    <div hidden={hidden}>
      <section>
        <h1 className="m-5 font-bold text-5xl">Quizzical App</h1>
        <form className="flex flex-col items-center gap-3">
          <label htmlFor="difficulty">Select Difficulty:</label>
          <select
            onChange={handleChange}
            className="w-1/2"
            id="difficulty"
            value={difficulty}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            onClick={onClick}
            className="bg-blue-900 mt-4 w-1/2 px-6 py-4 rounded-lg text-white hover:bg-secondary font-inter font-medium text-base "
            type="submit"
          >
            Start quiz
          </button>
        </form>
      </section>
    </div>
  );
}

export default IntroPage;
