export default function QuizLanding({onStartQuiz}) {
    return (
        <div id="last-try">
            <h2>This is quiz landing</h2>
            <p>
                <button onClick={onStartQuiz}>Start!</button>
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