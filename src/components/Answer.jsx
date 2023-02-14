import { useContext } from "react";
import { Context } from "../Context";

const Answers = ({ id, answer, isHeld, questionId, isCorrect }) => {
  const { isChecked, handleAnswer } = useContext(Context);

  let style;

  if (!isChecked) {
    style = {
      backgroundColor: isHeld ? "#D6DBF5" : "#F5F7FB",
      border: isHeld ? "1px solid #F5F7FB" : "1px solid #D6DBF5",
    };
  } else {
    if (isCorrect && isHeld) {
      style = {
        backgroundColor: "#94D7A2",
        border: isHeld && "1px solid #94D7A2",
      };
    } else if (!isCorrect && isHeld) {
      style = {
        backgroundColor: "#F8BCBC",
        border: isHeld && "1px solid #F8BCBC",
      };
    }
  }

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
