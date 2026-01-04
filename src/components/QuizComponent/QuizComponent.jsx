export default function QuizComponent({quiz}) {
    return (
        <ul>
            {quiz.map(item => <li>{item.title}</li>)}
        </ul>
    )
}