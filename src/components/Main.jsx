import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Questions from "./Questions";

const Main = () => {
  const [questionsData, setQuestionsData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      setQuestionsData(changeQuestionsArray(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeQuestionsArray = (array) => {
    return array.map((item) => ({
      question: item.question,
      id: nanoid(),
      answers: [
        ...item.incorrect_answers.map((incorrect_answer) => ({
          answer: incorrect_answer,
          isHeld: false,
          isCorrect: false,
          id: nanoid(),
        })),
        {
          answer: item.correct_answer,
          isHeld: false,
          isCorrect: true,
          id: nanoid(),
        },
      ],
    }));
  };

  const handleAnswer = (questionId, answerId) => {
    setQuestionsData((prevQuestionsData) =>
      prevQuestionsData.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: question.answers.map((answer) =>
                answer.id === answerId
                  ? { ...answer, isHeld: !answer.isHeld }
                  : { ...answer, isHeld: false }
              ),
            }
          : question
      )
    );
  };

  console.log(questionsData);

  return (
    <main>
      <div className="container">
        {questionsData.map((question) => (
          <Questions
            key={question.id}
            {...question}
            handleAnswer={handleAnswer}
          />
        ))}
        <div className="btn-container">
          <button>Check answers</button>
        </div>
        <div className="top">
          <img src="./images/main-top.png" alt="main-top" />
        </div>
        <div className="bottom">
          <img src="./images/main-bottom.png" alt="main-bottom" />
        </div>
      </div>
    </main>
  );
};

export default Main;
