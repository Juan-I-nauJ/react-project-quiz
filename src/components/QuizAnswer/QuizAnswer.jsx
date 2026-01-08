import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function QuizAnswer({answer, answerIdx, isLastAttempt, ...props}) {
    const [answerClass, setAnswerClass] = useState('')
    const {handleAnswer, currentQuestionIdx, handleSetCurrentAnswer, currentAnswerIdx} = useContext(QuizContext)
    useEffect(() => {
        if (isLastAttempt) {
            if (answer.isTrue && answer.selected) {
                setAnswerClass('correct')
            }
            if (answer.selected && !answer.isTrue) {
                setAnswerClass('wrong')
            }
        }
    }, [answerClass])
    const onAnswer = () => {
        setAnswerClass(answer.isTrue ? 'correct' : 'wrong')
        handleSetCurrentAnswer(answerIdx)
        setTimeout(() => handleAnswer(currentQuestionIdx, answerIdx), 300)
    }
    return <li className="answer">
        <button onClick={onAnswer} className={answerClass} {...props} disabled={isLastAttempt || currentAnswerIdx !== null}>{answer.text}</button>
    </li>
}
