import { useEffect, useContext } from "react";
import QuizAnswer from "../QuizAnswer/QuizAnswer";
import ProgressBar from "../ProgressBar/ProgressBar";
import { QuizContext } from "../../store/quiz-context";
const MAX_TIME = 5000
export default function QuizQuestion({ question, isLastAttempt }) {
    const { handleAnswer, currentQuestionIdx } = useContext(QuizContext)
    useEffect(() => {
        if (!isLastAttempt) {
            const timer = setTimeout(() => {
                handleAnswer(currentQuestionIdx, null)
            }, MAX_TIME)
            return () => clearTimeout(timer)
        }
    }, [handleAnswer, currentQuestionIdx])
    return (
        <article id="question">
            <div>
                <h2>
                    {question.title}
                </h2>
                {!isLastAttempt && <ProgressBar key={currentQuestionIdx} timer={MAX_TIME} />}
            </div>
            <ol id="answers">
                {question.answers.map((item, idx) => <QuizAnswer answer={item} key={`${item.text} + ${idx}`} answerIdx={idx} isLastAttempt={isLastAttempt} />)}
            </ol>
        </article>
    )
}