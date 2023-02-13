const Answers = ({
  id,
  answer,
  isHeld,
  handleAnswer,
  questionId,
  isChecked,
  setIsChecked,
  isCorrect,
}) => {
  const style = () => {
    if (!isChecked) {
      return {
        backgroundColor: isHeld ? "#D6DBF5" : "#F5F7FB",
      };
    } else {
      if (isCorrect && isHeld) {
        return {
          backgroundColor: "#94D7A2",
        };
      } else if (!isCorrect && isHeld) {
        return {
          backgroundColor: "#F8BCBC",
        };
      }
    }
  };

  return (
    <div
      className="answer"
      onClick={() => handleAnswer(questionId, id)}
      style={style()}
    >
      {answer}
    </div>
  );
};

export default Answers;
