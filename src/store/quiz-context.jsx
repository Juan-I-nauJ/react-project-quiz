import { createContext, useReducer } from "react";
import { quiz } from "./../assets/questions"

export const QuizContext = createContext({
    quizStatus: [],
    handleStartQuiz: () => { }
})

const quizReducer = (state, action) => {
    if (action.type === 'START') {
        let quizQuestions = [...quiz]
        for (let i = quizQuestions.length - 1; i > 0; i--) {
            const shuffledValue = Math.floor(Math.random() * (i + 1));
            [quizQuestions[i], quizQuestions[shuffledValue]] = [quizQuestions[shuffledValue], quizQuestions[i]]
        }
        return { ...state ,quiz: quizQuestions.slice(0, 10) }
    }
    if (action.type === 'ANSWER') {
        const quizQuestions = [...state]
        const currentQuestion = quizQuestions[action.payload.questionIdx]
        currentQuestion.answers[answerIdx].selected = true
        return [...state, currentQuestion]
    }
    return state
}

export function QuizContextProvider({ children }) {
    const [quizStatus, quizStatusDispatch] = useReducer(quizReducer, { quiz: [] })
    const handleStartQuiz = () => {
        quizStatusDispatch({ type: 'START' })
    }
    const handleAnswer = (questionIdx, answerIdx) => {
        quizStatusDispatch({type: 'ANSWER', payload: {questionIdx, answerIdx}})
    }
    const ctxValue = {
        quizStatus: quizStatus.quiz,
        handleStartQuiz,
        handleAnswer
    }
    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}