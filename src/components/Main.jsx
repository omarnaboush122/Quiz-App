import { useContext } from "react";
import { Context } from "../Context";
import Questions from "./Questions";

const Main = () => {
  const {
    loading,
    questionsData,
    isChecked,
    findCorrectAnswers,
    tryAgain,
    checkAnswersClick,
  } = useContext(Context);

  const allQuestions = questionsData.map((question) => (
    <Questions
      key={question.id}
      {...question}
    />
  ))

  return (
    <main>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="container">
          {allQuestions}
          <div className="btn-container">
            {isChecked ? (
              <>
                <p>
                  You scored {findCorrectAnswers()}/{questionsData.length}{" "}
                  correct answers
                </p>
                <button onClick={tryAgain}>Play again</button>
              </>
            ) : (
              <button onClick={checkAnswersClick}>Check answers</button>
            )}
          </div>
          <div className="top">
            <img src="./images/main-top.png" alt="main-top" />
          </div>
          <div className="bottom">
            <img src="./images/main-bottom.png" alt="main-bottom" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
