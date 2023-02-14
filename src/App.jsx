import { useState } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";

function App() {
  const [isStarted,setIsStarted] = useState(false);

  const openQuiz = () => {
    setIsOpened(true);
  }
  return (
    <>
      {
        isStarted ? <Main/> : <Intro isStarted={isStarted} />
      }
      
    </>
  );
}

export default App;
