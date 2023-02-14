import { useState } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const startQuiz = () => {
    setIsStarted(true);
  };
  return <>{isStarted ? <Quiz /> : <Intro startQuiz={startQuiz} />}</>;
}

export default App;
