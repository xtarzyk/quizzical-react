import { useNavigate } from "react-router-dom"

const Intro = () => {
    const navigate = useNavigate()

    return (
        <div className="intro">
            <h1 className="intro__title">Quizzical</h1>
            <p className="intro__text">Amazing quiz platform for all!</p>
            <button className="btn" onClick={() => navigate('/quiz')}>Start quiz</button>
        </div>
    )
}

export default Intro