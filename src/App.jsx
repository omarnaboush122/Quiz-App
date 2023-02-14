import { useState } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";

function App() {
  const [isStarted,setIsStarted] = useState(false);

  const startQuiz = () => {
    setIsStarted(true);
  }
  return (
    <>
      {
        isStarted ? <Main/> : <Intro startQuiz={startQuiz} />
      }
      
    </>
  );
}

export default App;
