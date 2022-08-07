import { useState, useEffect } from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"

function App() {
  const [quizData, setQuizData] = useState(null)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
  }, []);

  console.log(quizData)

  return (
    <div className="App">
      <Intro />
    </div>
  )
}

export default App;
