import { useState } from "react";
import AnswerBtn from "./AnswerBtn"
import CheckBtn from "./CheckBtn"
import useFetch from "./useFetch";

const Quiz = () => {
    const { data, error, isPending } = useFetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const [selectedAnswers, setSelectedAnswers] = useState([])
    
    const selectAnswer = answer => {
        setSelectedAnswers(prevAnswer => prevAnswer.concat(answer))
        console.log("selectedAnswers", selectedAnswers)
    }

    const checkAnswers = () => {
        // selectedAnswers.every()
    }

    return (
        <div className="quiz">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            
                    <div className="quiz__questions">
                        <h3></h3>
                        <div className="quiz__question-answers">
                            
                        </div>
                    </div>
        
            <div className="quiz__check-answers">
                <CheckBtn onClick={() => checkAnswers()} />
            </div>
        </div>
    )
}

export default Quiz
// const parsedAnswers = answers.map(answer => (
//     Object.values(answer)[0]
//         .replace(/&quot;/g,'"')
//         .replace(/&#039;/g,"'")
// ))