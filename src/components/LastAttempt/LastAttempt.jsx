import { useContext, useEffect } from "react"
import { QuizContext } from "./../../store/quiz-context.jsx"
import QuizQuestion from "../QuizQuestion/QuizQuestion"
export default function LastAttempt() {
    const {lastQuiz, handleRecoverQuiz} = useContext(QuizContext)
    useEffect(() => {
        if (lastQuiz.length < 1) handleRecoverQuiz()
    }, [lastQuiz])
    const showLastAttempt = () => {
        let quizMap = null
        if(lastQuiz.length > 0) {
        const answerMap = lastQuiz.flatMap(item => item.answers)
        const correctMap = answerMap.filter(item => item.isTrue && item.selected)
        const wrongMap = answerMap.filter(item => !item.isTrue && item.selected)
            quizMap = (<div>
                <h2>Your last attempt</h2>
                <p>Your last attempt's score was: {(correctMap.length/lastQuiz.length)*100}</p>
                <p>Right answers: {correctMap.length}/{lastQuiz.length}</p>
                <p>Wrong answers: {wrongMap.length}/{lastQuiz.length}</p>
                <p>Skipped: {lastQuiz.length - (correctMap.length + wrongMap.length)}</p>
                <div>
                    {lastQuiz.map(item => <QuizQuestion question={item} isLastAttempt={true} key={item.title}/>)}
                </div>
            </div>)
        }
        return quizMap
    }
    return showLastAttempt()
}