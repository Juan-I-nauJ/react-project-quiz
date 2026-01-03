import QuizLogo from './../../assets/quiz-logo.png'

export default function MainHeader() {
    return (
        <header>
            <img src={QuizLogo}/>
            <h1>REACT QUIZ</h1>
        </header>
    )
}