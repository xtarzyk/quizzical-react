import { Link } from 'react-router-dom';

const Intro = (props) {
    return (
        <div className="intro">
            <h1 className="intro__title">Quizzical</h1>
            <p className="intro__text">Amazing quiz platform for all!</p>
            <button className="btn" onClick={props.startGame}>Start quiz</button>
        </div>
    )
}
