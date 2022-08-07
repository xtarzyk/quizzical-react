export default function AnswerBtn({ answer, selectAnswer}) {
    return (
        <button className="quiz__question-answers-btn" onClick={() => selectAnswer(answer)}>{ Object.values(answer) }</button>
    )
}