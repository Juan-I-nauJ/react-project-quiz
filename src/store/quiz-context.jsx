import { createContext, useReducer } from "react";
import { quiz } from "./../assets/questions"

export const QuizContext = createContext({
    quizStatus: [],
    handleStartQuiz: () => { }
})

const quizReducer = (state, action) => {
    console.log('reducer')
    if (action.type === 'START') {
        let quizQuestions = [...quiz]
        for (let i = quizQuestions.length - 1; i > 0; i--) {
            const shuffledValue = Math.floor(Math.random() * (i + 1));
            [quizQuestions[i], quizQuestions[shuffledValue]] = [quizQuestions[shuffledValue], quizQuestions[i]]
        }
        return { quizStatus: quizQuestions.slice(0, 10) }
    }
    return state
}

export function QuizContextProvider({ children }) {
    const [quizStatus, quizStatusDispatch] = useReducer(quizReducer, { quizStatus: [] })
    const handleStartQuiz = () => {
        quizStatusDispatch({ type: 'START' })
    }
    const ctxValue = {
        quizStatus,
        handleStartQuiz
    }
    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}