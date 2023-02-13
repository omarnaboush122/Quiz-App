import React from 'react';

const Answers = ({id,answer,handleAnswer}) => {
  return (
    <div className='answer' onClick={() => handleAnswer(id)}>{answer}</div>
  );
}

export default Answers;
