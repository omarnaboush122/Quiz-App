import { useState } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";

function App() {
  const [isOpened,setIsOpened] = useState(true);

  const openQuiz = () => {
    setIsOpened(true);
  }
  return (
    <>
      {
        isOpened ? <Main/> : <Intro openQuiz={openQuiz} />
      }
      
    </>
  );
}

export default App;
