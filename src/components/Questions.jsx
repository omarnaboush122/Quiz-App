import Answers from "./Answers";

const Questions = ({ question, answers, handleAnswer, id,isChecked,setIsChecked }) => {
  return (
    <section className="questions">
      <article>
        <h3>{question}</h3>
        <div className="answers">
          {answers.map((answer) => (
            <Answers
              key={answer.id}
              {...answer}
              handleAnswer={handleAnswer}
              questionId={id}
              isChecked = {isChecked}
              setIsChecked={setIsChecked}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Questions;
