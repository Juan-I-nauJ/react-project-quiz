import { createContext, useReducer, useState } from "react";
import { quiz } from "./../assets/questions"

export const QuizContext = createContext({
    quizStatus: [],
    currentQuestion: 0,
    handleStartQuiz: () => { },
    handleAnswer: () => {}
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
        const quizQuestions = [...state.quiz]
        const currentQuestion = quizQuestions[action.payload.questionIdx]
        console.log(currentQuestion)
        currentQuestion.answers[action.payload.answerIdx].selected = true
        console.log(currentQuestion)
        return [...state.quiz, currentQuestion]
    }
    return state
}

export function QuizContextProvider({ children }) {
    const [quizStatus, quizStatusDispatch] = useReducer(quizReducer, { quiz: [] })
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const handleStartQuiz = () => {
        quizStatusDispatch({ type: 'START' })
    }
    const handleAnswer = (questionIdx, answerIdx) => {
        quizStatusDispatch({type: 'ANSWER', payload: {questionIdx, answerIdx}})
        setCurrentQuestion(old => old++)
    }
    const ctxValue = {
        quizStatus: quizStatus.quiz,
        currentQuestion,
        handleStartQuiz,
        handleAnswer
    }
    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}