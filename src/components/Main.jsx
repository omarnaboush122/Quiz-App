import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Questions from "./Questions";

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
      id: nanoid(),
      answers: [
        ...item.incorrect_answers.map((incorrect_answer) => ({
          answer: incorrect_answer,
          isHeld: false,
          isTrue: false,
          id: nanoid(),
        })),
        {
          answer: item.correct_answer,
          isHeld: false,
          isTrue: true,
          id: nanoid(),
        },
      ],
    }));
  };

  return <main>
    {
      questionsData.map(question => (
        <Questions key={question.id} {...question}/>
      ))
    }
  </main>;
};

export default Main;
