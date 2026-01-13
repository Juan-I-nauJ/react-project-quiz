import { createContext, useReducer, useState } from "react";
import { quiz } from "./../assets/questions"

export const QuizContext = createContext({
    quizStatus: [],
    currentQuestionIdx: 0,
    currentAnswerIdx: null,
    lastQuiz: [],
    handleStartQuiz: () => { },
    handleAnswer: () => { },
    handleFinishQuiz: () => { },
    handleRecoverQuiz: () => { }
})

const quizReducer = (state, action) => {
    if (action.type === 'START') {
        localStorage.removeItem('last-quiz')
        let quizQuestions = [...quiz]
        for (let i = quizQuestions.length - 1; i > 0; i--) {
            const shuffledValue = Math.floor(Math.random() * (i + 1));
            [quizQuestions[i], quizQuestions[shuffledValue]] = [quizQuestions[shuffledValue], quizQuestions[i]]
        }
        const chosenQuestions = quizQuestions.slice(0, 10)
        const chosenQuestionsAnswers = chosenQuestions.flatMap(item => item.answers)
        chosenQuestionsAnswers.forEach(item => {
            if (item.selected) delete item.selected
        })
        return { ...state, quiz: chosenQuestions }
    }
    if (action.type === 'ANSWER') {
        const quizQuestions = [...state.quiz]
        const currentQuestion = quizQuestions[action.payload.questionIdx]
        currentQuestion.answers[action.payload.answerIdx].selected = true
        return {...state, quiz: quizQuestions}
    }
    if (action.type === 'SKIP') {
        return {...state}
    }
    if (action.type === 'FINISH') {
        localStorage.setItem('last-quiz', JSON.stringify([...state.quiz]))
        return { ...state, quiz: [] }
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
        if (answerIdx || answerIdx === 0) {
        quizStatusDispatch({ type: 'ANSWER', payload: { questionIdx, answerIdx } })
        } else {
            quizStatusDispatch({type: 'SKIP'})
        }
        setCurrentAnswerIdx(null)
        setCurrentQuestionIdx(old => old + 1)
        if (currentQuestionIdx >= quizStatus.quiz.length - 1) handleFinishQuiz()
    }
    const handleFinishQuiz = () => {
        setLastQuiz(() => [...quizStatus.quiz])
        setCurrentAnswerIdx(null)
        setCurrentQuestionIdx(0)
        quizStatusDispatch({ type: 'FINISH' })
    }
    const handleRecoverQuiz = () => {
        let storedQuiz = []
        if (localStorage.getItem('last-quiz')) {
        storedQuiz = JSON.parse(localStorage.getItem('last-quiz'))
        }
        if (storedQuiz.length > 0) setLastQuiz([...storedQuiz])
    }
    const ctxValue = {
        quizStatus: quizStatus.quiz,
        currentQuestionIdx,
        currentAnswerIdx,
        lastQuiz,
        handleStartQuiz,
        handleSetCurrentAnswer,
        handleAnswer,
        handleRecoverQuiz
    }
    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}