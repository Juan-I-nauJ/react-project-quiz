import MainHeader from "./components/MainHeader/MainHeader"
import QuizLanding from "./components/QuizLanding/QuizLanding"
import { useState } from "react"
import { quiz } from "./assets/questions"
function App() {
    const [quizStatus, setQuizStatus] = useState([])

    const handleStartQuiz = () => {
        let quizQuestions = [...quiz]
        for (let i = quizQuestions.length -1; i > 0; i--) {
            const shuffledValue = Math.floor(Math.random()*(i + 1));
            [quizQuestions[i], quizQuestions[shuffledValue]] = [quizQuestions[shuffledValue], quizQuestions[i]]
        }
        setQuizStatus(quizQuestions.slice(0, 10))
    }

    return (
        <>
            <MainHeader />
            <main>
                <QuizLanding onStartQuiz={handleStartQuiz} />
            </main>
        </>
    )
}

export default App;
