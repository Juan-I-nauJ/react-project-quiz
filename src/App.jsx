import MainHeader from "./components/MainHeader/MainHeader"
import QuizControl from "./components/QuizControl/QuizControl";
import { QuizContextProvider} from "./store/quiz-context"
function App() {

    return (
        <QuizContextProvider>
            <MainHeader />
            <QuizControl />
        </QuizContextProvider>
    )
}

export default App;
