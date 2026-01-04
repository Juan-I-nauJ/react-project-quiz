import MainHeader from "./components/MainHeader/MainHeader"
import QuizLanding from "./components/QuizLanding/QuizLanding"
import QuizComponent from "./components/QuizComponent/QuizComponent"
import { useContext } from "react"
import { QuizContextProvider, QuizContext } from "./store/quiz-context"
function App() {
    const { quizStatus } = useContext(QuizContext)
    const quizLength = quizStatus.length
    return (
        <QuizContextProvider>
            <MainHeader />
            <main>
                {quizLength ? <QuizComponent quiz={quizStatus} /> : <QuizLanding />}
            </main>
        </QuizContextProvider>
    )
}

export default App;
