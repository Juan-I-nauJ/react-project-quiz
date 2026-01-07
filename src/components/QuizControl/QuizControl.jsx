import QuizLanding from "./../QuizLanding/QuizLanding"
import QuizComponent from "./../QuizComponent/QuizComponent"
import { useContext, useEffect } from "react"
import { QuizContext } from "./../../store/quiz-context"

export default function QuizControl() {
    const { quizStatus } = useContext(QuizContext)
    console.log(quizStatus)
    const quizLength = quizStatus.length
    return (
        <main>
            {quizLength ? <QuizComponent quiz={quizStatus} /> : <QuizLanding />}
        </main>
    )
}