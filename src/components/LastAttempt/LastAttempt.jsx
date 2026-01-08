import { useContext } from "react"
import { QuizContext } from "./../../store/quiz-context.jsx"
import QuizQuestion from "../QuizQuestion/QuizQuestion"
export default function LastAttempt() {
    const {lastQuiz} = useContext(QuizContext)
    const showLastAttempt = () => {
        let quizMap = null
        if(lastQuiz.length > 0) {
            console.log(lastQuiz)
            quizMap = (<div>
                <p>Your last attempt was:</p>
                <div>
                    {lastQuiz.map(item => <QuizQuestion question={item} />)}
                </div>
            </div>)
        }
        return quizMap
    }
    return showLastAttempt()
}