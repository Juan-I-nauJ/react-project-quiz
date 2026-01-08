import QuizComplete from './../../assets/quiz-complete.png'
import { useContext } from 'react'
import { QuizContext } from "./../../store/quiz-context.jsx"
export default function QuizStats() {
    const { lastQuiz } = useContext(QuizContext)
    const maxLength = lastQuiz.length
    const answerMap = lastQuiz.flatMap(item => item.answers)
    const correct = answerMap.filter(item => item.isTrue && item.selected).length
    const wrong = answerMap.filter(item => !item.isTrue && item.selected).length
    return (
        <div id="summary">
            <img src={QuizComplete} />
            <h2>Your last attempt</h2>
            <p>Your last attempt's score was: {(correct / maxLength) * 100}</p>
            <p>Right answers: {correct}/{ maxLength }</p>
            <p>Wrong answers: {wrong}/{maxLength}</p>
            <p>Skipped: {maxLength - (correct + wrong)}</p>
        </div>
    )
}