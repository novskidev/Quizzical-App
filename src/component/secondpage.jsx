import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const api = "https://opentdb.com/api.php?amount=5&type=multiple";

  const fetchQuestions = async () => {
    try {
      const responses = await axios.get(api);
      const data = responses.data.results;

      setQuestions(
        data.map((item) => {
          const allAnswers = [
            item.correct_answer,
            ...item.incorrect_answers,
          ].sort(() => Math.random() - 0.5);

          return {
            ...item,
            shuffledAnswer: allAnswers,
          };
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerSelect = (questionIndex, answer) => {
    if (!submitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answer,
      });
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        correctCount += 1;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handlePlayAgain = () => {
    setSelectedAnswers({});
    setScore(0);
    setSubmitted(false);
    fetchQuestions(); // Fetch a new set of questions
  };

  const allQuestionsAnswered =
    questions.length > 0 &&
    Object.keys(selectedAnswers).length === questions.length;

  return (
    <div>
      {questions.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          <div className="flex flex-row">
            {q.shuffledAnswer.map((answer, i) => {
              const isSelected = selectedAnswers[index] === answer;
              const isCorrect = submitted && answer === q.correct_answer;
              const isWrong =
                submitted && isSelected && answer !== q.correct_answer;

              return (
                <p
                  className={`gap-2 m-3 p-5 rounded-md border-2 cursor-pointer ${
                    isCorrect
                      ? "bg-green-300"
                      : isWrong
                      ? "bg-red-300"
                      : isSelected
                      ? "bg-blue-300"
                      : "bg-white"
                  }`}
                  key={i}
                  onClick={() => handleAnswerSelect(index, answer)}
                >
                  {answer}
                </p>
              );
            })}
          </div>
        </div>
      ))}
      <div className="flex flex-row justify-center items-center gap-6">
        {submitted ? (
          <p>{`You scored ${score} out of ${questions.length}`}</p>
        ) : (
          <p>{`You scored 0 of ${questions.length}`}</p>
        )}
        {submitted ? (
          <button className="bg-blue-400 rounded p-2" onClick={handlePlayAgain}>
            Play Again
          </button>
        ) : (
          <button
            className={`bg-blue-400 rounded p-2 ${
              allQuestionsAnswered ? "" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
