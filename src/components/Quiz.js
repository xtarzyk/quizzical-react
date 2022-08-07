import { useState } from "react";
import AnswerBtn from "./AnswerBtn"
import CheckBtn from "./CheckBtn"

export default function Quiz({ quizData }) {
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
            { quizData.map(q => {

                return (
                    <div className="quiz__questions">
                        <h3></h3>
                        <div className="quiz__question-answers">
                            
                        </div>
                    </div>
                )
            })}
            <div className="quiz__check-answers">
                <CheckBtn onClick={() => checkAnswers()} />
            </div>
        </div>
    )
}

// const parsedAnswers = answers.map(answer => (
//     Object.values(answer)[0]
//         .replace(/&quot;/g,'"')
//         .replace(/&#039;/g,"'")
// ))