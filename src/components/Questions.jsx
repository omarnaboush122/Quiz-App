import Answers from "./Answer";
import { unEscape } from "../Utility";

const Questions = ({ question, answers, questionId }) => {

  const allAnswers = answers.map((answer) => (
    <Answers key={answer.answerId} {...answer} questionId={questionId} />
  ))
  return (
    <section className="questions">
      <article>
        <h3>{unEscape(question)}</h3>
        <div className="answers">
          {allAnswers}
        </div>
      </article>
    </section>
  );
};

export default Questions;
