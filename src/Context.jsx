import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      setQuestionsData(changeQuestionsArray(data.results));
      setLoading(false);
      setIsChecked(false);
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
      answers: shuffleArray([
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
      ]),
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

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const checkAnswersClick = () => {
    setIsChecked(true);
  };

  const findCorrectAnswers = () => {
    let count = 0;
    for (let i = 0; i < questionsData.length; i++) {
      for (let j = 0; j < questionsData[i].answers.length; j++) {
        const answer = questionsData[i].answers[j];
        if (answer.isCorrect && answer.isHeld) {
          count++;
        }
      }
    }
    return count;
  };

  const tryAgain = () => {
    fetchData();
  };

  return (
    <Context.Provider
      value={{
        questionsData,
        setQuestionsData,
        loading,
        isChecked,
        handleAnswer,
        findCorrectAnswers,
        checkAnswersClick,
        tryAgain,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
