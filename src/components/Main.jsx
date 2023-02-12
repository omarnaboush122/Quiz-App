import { useEffect, useState } from "react";


const Main = () => {
  const [questionsData,setQuestionsData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple");
    const data = await res.json();
    setQuestionsData(data.results);
  }


  useEffect(() => {
    fetchData();
  },[])

  console.log(questionsData);

  return (
    <div className="main">
      main
    </div>
  );
}

export default Main;
