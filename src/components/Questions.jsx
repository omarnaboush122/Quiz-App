import Answers from "./Answers";

const Questions = ({ question, answers }) => {
  
  return (
    <section className="questions">
      <article>
        <h3>{question}</h3>
        <div className="answers">
          {answers.map((answer) => (
            <Answers key={answer.id} {...answer} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Questions;
