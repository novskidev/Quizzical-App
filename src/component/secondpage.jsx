import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function SecondPage() {
  const [question, setQuestion] = useState([]);

  const api = "https://opentdb.com/api.php?amount=5&type=multiple";

  useEffect(() => {
    const fetchData = async () => {
      const responses = await axios.get(api);
      const data = responses.data.results;
      setQuestion(data.map((item) => item.question));
    };
    fetchData();
  });

  console.log(question);
  return (
    <div className="w-2/5 h-4/5 flex flex-col">
      {question.map((item, i) => (
        <p className="text-left mt-11" key={i}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default SecondPage;
