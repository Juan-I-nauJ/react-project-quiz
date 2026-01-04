import { useContext } from "react";
import { QuizContext } from "../../store/quiz-context";

export default function QuizLanding() {
    const { handleStartQuiz } = useContext(QuizContext)
    return (
        <div id="last-try">
            <h2>This is quiz landing</h2>
            <p>
                <button onClick={handleStartQuiz}>Start!</button>
            </p>
            <div>
                <p>Your last attempt was:</p>
                <ul>
                    <li>Example</li>
                </ul>
            </div>
        </div>

    )
}