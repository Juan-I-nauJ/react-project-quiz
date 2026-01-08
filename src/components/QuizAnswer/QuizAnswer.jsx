import { useContext, useState } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function QuizAnswer({answer, answerIdx, ...props}) {
    const [answerClass, setAnswerClass] = useState('')
    const {handleAnswer, currentQuestionIdx, handleSetCurrentAnswer, currentAnswerIdx} = useContext(QuizContext)
    const onAnswer = () => {
        setAnswerClass(answer.isTrue ? 'correct' : 'wrong')
        handleSetCurrentAnswer(answerIdx)
        setTimeout(() => handleAnswer(currentQuestionIdx, answerIdx), 600)
    }
    return <li className="answer">
        <button onClick={onAnswer} className={answerClass} {...props} disabled={currentAnswerIdx !== null}>{answer.text}</button>
    </li>
}
