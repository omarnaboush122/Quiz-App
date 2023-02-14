import Answers from "./Answer";

const Questions = ({ question, answers, questionId }) => {

  const allAnswers = answers.map((answer) => (
    <Answers key={answer.answerId} {...answer} questionId={questionId} />
  ))
  return (
    <section className="questions">
      <article>
        <h3>{question}</h3>
        <div className="answers">
          {allAnswers}
        </div>
      </article>
    </section>
  );
};

export default Questions;
