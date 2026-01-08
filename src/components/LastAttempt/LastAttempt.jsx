import { useContext, useEffect } from "react"
import { QuizContext } from "./../../store/quiz-context.jsx"
import QuizComplete from './../../assets/quiz-complete.png'
import QuizQuestion from "../QuizQuestion/QuizQuestion"
import QuizStats from "../QuizStats/QuizStats.jsx"
export default function LastAttempt() {
    const { lastQuiz, handleRecoverQuiz } = useContext(QuizContext)
    useEffect(() => {
        if (lastQuiz.length < 1) handleRecoverQuiz()
    }, [lastQuiz])
    const showLastAttempt = () => {
        let quizMap = null
        if (lastQuiz.length > 0) {
            quizMap = (<div>
                <QuizStats />
                <div>
                    <h2>These were your questions:</h2>
                    {lastQuiz.map(item => <QuizQuestion question={item} isLastAttempt={true} key={item.title} />)}
                </div>
            </div>
            )
        }
        return quizMap
    }
    return showLastAttempt()
}