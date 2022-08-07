import Intro from "./components/Intro"
import Quiz from "./components/Quiz"
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  
  return (
      <div className="App">
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/" element={<Intro />} />
        </Routes>
      </div>
  )
}

export default App;
