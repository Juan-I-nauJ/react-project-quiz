import QuizAnswer from "../QuizAnswer/QuizAnswer";

export default function QuizQuestion({ question }) {
    return (
        <article id="question">
            <div>
                <h2>
                    {question.title}
                </h2>
                <progress value="2" max="3" />
            </div>
            <ol id="answers">
                {question.answers.map((item, idx) => <QuizAnswer answer={item} key={item.text} answerIdx={idx}/>)}
            </ol>
        </article>
    )
}