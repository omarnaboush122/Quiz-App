import Answers from "./Answer";

const Questions = ({ question, answers, id }) => {

  const allAnswers = answers.map((answer) => (
    <Answers key={answer.id} {...answer} questionId={id} />
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
