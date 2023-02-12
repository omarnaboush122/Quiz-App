

const Questions = ({question,answers}) => {
  return (
    <section>
          <article>
          <h3>{question}</h3>
          <div>
            {
              answers.map(answer => (
                <div key={answer.id}>{answer.answer}</div>
              ))
            }
          </div>
        </article>
        </section>
  );
}

export default Questions;
