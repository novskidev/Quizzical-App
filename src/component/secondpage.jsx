import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [question, setQuestion] = useState([]);
  const api = "https://opentdb.com/api.php?amount=5&type=multiple";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get(api);
        const data = responses.data.results;

        setQuestion(
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

    fetchData();
  }, []);

  return (
    <div>
      {question.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          <div className="flex flex-row">
            {q.shuffledAnswer.map((answer, i) => (
              <p className="gap-2 m-3 p-5 rounded-md border-2" key={i}>
                {answer}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-row justify-center items-center gap-6">
        <p>{`You scored 0 of ${question.length}`} </p>
        <button className="bg-blue-400 rounded p-2">Submit</button>
      </div>
    </div>
  );
};

export default App;
