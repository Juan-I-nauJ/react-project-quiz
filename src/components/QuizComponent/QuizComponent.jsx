import QuizQuestion from "../QuizQuestion/QuizQuestion";

export default function QuizComponent({quiz}) {
    return (
        <ul id="quiz">
            {quiz.map(item => <QuizQuestion question={item} key={item.title}/>)}
        </ul>
    )
}