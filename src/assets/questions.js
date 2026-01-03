export const quiz = [
        {
            title: "Which company originally developed React?",
            answers: [
                { text: "Google", isTrue: false },
                { text: "Facebook", isTrue: true },
                { text: "Microsoft", isTrue: false },
                { text: "Netflix", isTrue: false }
            ]
        },
        {
            title: "What is the virtual DOM in React?",
            answers: [
                { text: "A copy of the real DOM that React uses to improve performance", isTrue: true },
                { text: "A special type of browser DOM", isTrue: false },
                { text: "A React component", isTrue: false },
                { text: "A JavaScript library", isTrue: false }
            ]
        },
        {
            title: "Which method is used to update the state in a React class component?",
            answers: [
                { text: "this.updateState()", isTrue: false },
                { text: "this.setState()", isTrue: true },
                { text: "this.changeState()", isTrue: false },
                { text: "this.state = newState", isTrue: false }
            ]
        },
        {
            title: "What is the correct way to create a React component?",
            answers: [
                { text: "function MyComponent() { return <div>Hello</div>; }", isTrue: true },
                { text: "class MyComponent { render() { return <div>Hello</div>; } }", isTrue: false },
                { text: "const MyComponent = () => { <div>Hello</div>; }", isTrue: false },
                { text: "component MyComponent = () => <div>Hello</div>", isTrue: false }
            ]
        },
        {
            title: "Which hook is used to perform side effects in a React function component?",
            answers: [
                { text: "useState", isTrue: false },
                { text: "useEffect", isTrue: true },
                { text: "useContext", isTrue: false },
                { text: "useReducer", isTrue: false }
            ]
        },
        {
            title: "What does JSX stand for?",
            answers: [
                { text: "JavaScript XML", isTrue: true },
                { text: "JavaScript XHR", isTrue: false },
                { text: "JavaScript Extension", isTrue: false },
                { text: "JavaScript X", isTrue: false }
            ]
        },
        {
            title: "Which command is used to create a new React app using Create React App?",
            answers: [
                { text: "npm create-react-app my-app", isTrue: false },
                { text: "npx create-react-app my-app", isTrue: true },
                { text: "create-react-app my-app", isTrue: false },
                { text: "npm install create-react-app my-app", isTrue: false }
            ]
        },
        {
            title: "What is the purpose of keys in React lists?",
            answers: [
                { text: "To uniquely identify elements for efficient updates", isTrue: true },
                { text: "To style list items", isTrue: false },
                { text: "To sort list items", isTrue: false },
                { text: "To create animations", isTrue: false }
            ]
        },
        {
            title: "Which lifecycle method is called after a component is rendered for the first time?",
            answers: [
                { text: "componentDidMount", isTrue: true },
                { text: "componentWillMount", isTrue: false },
                { text: "componentDidUpdate", isTrue: false },
                { text: "componentWillUpdate", isTrue: false }
            ]
        },
        {
            title: "What is the correct way to pass props to a component?",
            answers: [
                { text: "<MyComponent propName='value' />", isTrue: true },
                { text: "<MyComponent>propName='value'</MyComponent>", isTrue: false },
                { text: "<MyComponent propName={value} />", isTrue: true },
                { text: "<MyComponent propName=value />", isTrue: false }
            ]
        },
        {
            title: "Which hook is used to manage state in a React function component?",
            answers: [
                { text: "useState", isTrue: true },
                { text: "useEffect", isTrue: false },
                { text: "useContext", isTrue: false },
                { text: "useReducer", isTrue: false }
            ]
        },
        {
            title: "What is the purpose of React Router?",
            answers: [
                { text: "To handle navigation between different components", isTrue: true },
                { text: "To manage global state", isTrue: false },
                { text: "To style components", isTrue: false },
                { text: "To create animations", isTrue: false }
            ]
        },
        {
            title: "Which method is used to prevent the default behavior of an event in React?",
            answers: [
                { text: "event.preventDefault()", isTrue: true },
                { text: "event.stopPropagation()", isTrue: false },
                { text: "event.cancel()", isTrue: false },
                { text: "event.prevent()", isTrue: false }
            ]
        },
        {
            title: "What is the correct way to import a component in React?",
            answers: [
                { text: "import MyComponent from './MyComponent';", isTrue: true },
                { text: "require('./MyComponent');", isTrue: false },
                { text: "include './MyComponent';", isTrue: false },
                { text: "import './MyComponent';", isTrue: false }
            ]
        },
        {
            title: "Which hook is used to access the context in a React function component?",
            answers: [
                { text: "useState", isTrue: false },
                { text: "useEffect", isTrue: false },
                { text: "useContext", isTrue: true },
                { text: "useReducer", isTrue: false }
            ]
        },
        {
            title: "What is the purpose of the useReducer hook?",
            answers: [
                { text: "To manage complex state logic", isTrue: true },
                { text: "To perform side effects", isTrue: false },
                { text: "To access context", isTrue: false },
                { text: "To create refs", isTrue: false }
            ]
        },
        {
            title: "Which method is used to create a ref in a React function component?",
            answers: [
                { text: "useRef", isTrue: true },
                { text: "createRef", isTrue: false },
                { text: "useState", isTrue: false },
                { text: "useEffect", isTrue: false }
            ]
        },
        {
            title: "What is the correct way to conditionally render a component in React?",
            answers: [
                { text: "{isTrue && <MyComponent />}", isTrue: true },
                { text: "{if (isTrue) { <MyComponent /> }}", isTrue: false },
                { text: "{isTrue ? <MyComponent /> : null}", isTrue: true },
                { text: "{isTrue then <MyComponent />}", isTrue: false }
            ]
        },
        {
            title: "Which hook is used to memoize expensive calculations in React?",
            answers: [
                { text: "useMemo", isTrue: true },
                { text: "useEffect", isTrue: false },
                { text: "useState", isTrue: false },
                { text: "useCallback", isTrue: false }
            ]
        },
        {
            title: "What is the purpose of the useCallback hook?",
            answers: [
                { text: "To memoize functions", isTrue: true },
                { text: "To memoize values", isTrue: false },
                { text: "To perform side effects", isTrue: false },
                { text: "To manage state", isTrue: false }
            ]
        },
        {
            title: "Which method is used to handle errors in React class components?",
            answers: [
                { text: "componentDidCatch", isTrue: true },
                { text: "componentDidError", isTrue: false },
                { text: "componentCatchError", isTrue: false },
                { text: "componentError", isTrue: false }
            ]
        },
        {
            title: "What is the correct way to write an inline style in React?",
            answers: [
                { text: "style={{ color: 'red' }}", isTrue: true },
                { text: "style={ color: 'red' }", isTrue: false },
                { text: "style='color: red'", isTrue: false },
                { text: "style='{ color: red }'", isTrue: false }
            ]
        },
        {
            title: "Which hook is used to perform cleanup in a React function component?",
            answers: [
                { text: "useEffect", isTrue: true },
                { text: "useState", isTrue: false },
                { text: "useContext", isTrue: false },
                { text: "useReducer", isTrue: false }
            ]
        },
        {
            title: "What is the purpose of PropTypes in React?",
            answers: [
                { text: "To type-check props", isTrue: true },
                { text: "To define default props", isTrue: false },
                { text: "To create new props", isTrue: false },
                { text: "To style components", isTrue: false }
            ]
        },
        {
            title: "Which method is used to force a component to re-render in React?",
            answers: [
                { text: "this.forceUpdate()", isTrue: true },
                { text: "this.reRender()", isTrue: false },
                { text: "this.update()", isTrue: false },
                { text: "this.render()", isTrue: false }
            ]
        },
        {
            title: "What is the correct way to import React in a modern React component?",
            answers: [
                { text: "import React from 'react';", isTrue: false },
                { text: "import React, { useState } from 'react';", isTrue: false },
                { text: "No import is needed for React 17+ with the new JSX transform", isTrue: true },
                { text: "import 'react';", isTrue: false }
            ]
        },
        {
            title: "Which hook is used to access the previous props or state in a React function component?",
            answers: [
                { text: "usePrevious", isTrue: false },
                { text: "useRef", isTrue: true },
                { text: "useState", isTrue: false },
                { text: "useEffect", isTrue: false }
            ]
        },
        {
            title: "What is the purpose of the React.StrictMode component?",
            answers: [
                { text: "To highlight potential problems in an application", isTrue: true },
                { text: "To enforce strict typing", isTrue: false },
                { text: "To improve performance", isTrue: false },
                { text: "To enable animations", isTrue: false }
            ]
        },
        {
            title: "Which method is used to create a portal in React?",
            answers: [
                { text: "ReactDOM.createPortal()", isTrue: true },
                { text: "React.createPortal()", isTrue: false },
                { text: "ReactDOM.renderPortal()", isTrue: false },
                { text: "React.portal()", isTrue: false }
            ]
        },
        {
            title: "What is the correct way to use a fragment in React?",
            answers: [
                { text: "<>...</>", isTrue: true },
                { text: "<Fragment>...</Fragment>", isTrue: true },
                { text: "<React.Fragment>...</React.Fragment>", isTrue: true },
                { text: "<div>...</div>", isTrue: false }
            ]
        },
        {
            title: "Which hook is used to synchronize a component with an external store?",
            answers: [
                { text: "useSyncExternalStore", isTrue: true },
                { text: "useExternalStore", isTrue: false },
                { text: "useStore", isTrue: false },
                { text: "useEffect", isTrue: false }
            ]
        }
    ]
