import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";
import LastAttempt from "../LastAttempt/LastAttempt";

export default function QuizLanding() {
    const { handleStartQuiz } = useContext(QuizContext)
    return (
        <div id="last-try">
            <h2>Start your quiz attempt</h2>
            <p>
                <button onClick={handleStartQuiz}>Start!</button>
            </p>
            <LastAttempt />
        </div>

    )
}