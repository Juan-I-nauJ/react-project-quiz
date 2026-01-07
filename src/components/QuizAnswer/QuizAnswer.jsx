import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function QuizAnswer({answer, answerIdx}) {
    const {handleAnswer} = useContext(QuizContext)
    return <li className="answer">
        <button onClick={() => handleAnswer(0, answerIdx)}>{answer.text}</button>
    </li>
}
