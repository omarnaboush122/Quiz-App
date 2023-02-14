

const Intro = ({ isStarted }) => {
  return (
    <div className="intro">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={isStarted}>Start quiz</button>
      <div className="top">
        <img src="./images/intro-top.png" alt="blob-top" />
      </div>
      <div className="bottom">
        <img src="./images/intro-bottom.png" alt="blob-bottom" />
      </div>
    </div>
  );
};

export default Intro;
