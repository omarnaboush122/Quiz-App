import Answers from "./Answers";

const Questions = ({ question, answers }) => {
  
  return (
    <section className="question">
      <article>
        <h3>{question}</h3>
        <div>
          {answers.map((answer) => (
            <Answers key={answer.id} {...answer} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Questions;
