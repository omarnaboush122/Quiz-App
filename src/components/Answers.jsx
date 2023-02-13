

const Answers = ({ id, answer, isHeld, handleAnswer, questionId }) => {
  const style = {
    backgroundColor: isHeld ? "#D6DBF5" : "#F5F7FB",
  };

  return (
    <div
      className="answer"
      onClick={() => handleAnswer(questionId, id)}
      style={style}
    >
      {answer}
    </div>
  );
};

export default Answers;
