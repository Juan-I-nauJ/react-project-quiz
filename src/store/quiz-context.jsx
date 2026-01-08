import { createContext, useReducer, useState } from "react";
import { quiz } from "./../assets/questions"

export const QuizContext = createContext({
    quizStatus: [],
    currentQuestionIdx: 0,
    currentAnswerIdx: null,
    lastQuiz: [],
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
        return { ...state, quiz: quizQuestions.slice(0, 10) }
    }
    if (action.type === 'ANSWER') {
        const quizQuestions = [...state.quiz]
        const currentQuestion = quizQuestions[action.payload.questionIdx]
        currentQuestion.answers[action.payload.answerIdx].selected = true
        return state
    }
    if (action.type === 'FINISH') {
        localStorage.setItem('last-quiz', JSON.stringify([...state.quiz]))
        return {...state, quiz: []}
    }
    return state
}

export function QuizContextProvider({ children }) {
    const [quizStatus, quizStatusDispatch] = useReducer(quizReducer, { quiz: [] })
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
    const [currentAnswerIdx, setCurrentAnswerIdx] = useState(null)
    const [lastQuiz, setLastQuiz] = useState([])
    const handleStartQuiz = () => {
        setCurrentQuestionIdx(0)
        quizStatusDispatch({ type: 'START' })
    }
    const handleSetCurrentAnswer = (idx) => {
        setCurrentAnswerIdx(idx)
    }
    const handleAnswer = (questionIdx, answerIdx) => {
        quizStatusDispatch({type: 'ANSWER', payload: {questionIdx, answerIdx}})
        setCurrentQuestionIdx(old => old+1)
        setCurrentAnswerIdx(null)
        if (currentQuestionIdx >= quizStatus.quiz.length-1) handleFinishQuiz()
    }
    const handleFinishQuiz = () => {
        setLastQuiz(() => [...quizStatus.quiz])
        quizStatusDispatch({type: 'FINISH'})
    }
    const ctxValue = {
        quizStatus: quizStatus.quiz,
        currentQuestionIdx,
        currentAnswerIdx,
        lastQuiz,
        handleStartQuiz,
        handleSetCurrentAnswer,
        handleAnswer
    }
    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}