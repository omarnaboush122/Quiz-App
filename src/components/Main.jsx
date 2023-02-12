import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Main = () => {
  const [questionsData, setQuestionsData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    );
    const data = await res.json();
    setQuestionsData(changeQuestionsArray(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(questionsData);

  const changeQuestionsArray = (array) => {
    return array.map((item) => ({
      question: item.question,
      answers: [
        {
          incorrect_answer: item.incorrect_answers[0],
          isHeld: false,
          isTrue: false,
          id: nanoid(),
        },
        {
          incorrect_answer: item.incorrect_answers[1],
          isHeld: false,
          isTrue: false,
          id: nanoid(),
        },
        {
          incorrect_answer: item.incorrect_answers[2],
          isHeld: false,
          isTrue: false,
          id: nanoid(),
        },
        {
          correct_answer: item.correct_answer,
          isHeld: false,
          isTrue: true,
          id: nanoid(),
        },
      ],
    }));
  };

  return <div className="main">main</div>;
};

export default Main;
