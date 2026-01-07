import QuizQuestion from "../QuizQuestion/QuizQuestion"
import { useContext } from "react"
import { QuizContext } from "./../../store/quiz-context.jsx"
export default function QuizComponent() {
    const { quizStatus, currentQuestionIdx } = useContext(QuizContext)
    return (
        <article id="quiz">
            <QuizQuestion question={quizStatus[currentQuestionIdx]} />
        </article>
    )
}