export default function QuizAnswer({answer}) {
    return <li className="answer">
        <button>{answer.text}</button>
    </li>
}
