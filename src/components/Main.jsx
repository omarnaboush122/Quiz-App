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

  return (
    <main>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="container">
          {questionsData.map((question) => (
            <Questions
              key={question.id}
              {...question}
              handleAnswer={handleAnswer}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          ))}
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
              isFetched && (
                <button onClick={checkAnswersClick}>Check answers</button>
              )
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
