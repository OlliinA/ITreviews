import React, {createContext}  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStr from "./store/UserStr";
import CourseStore from "./store/CourseStore";
import AcademicsStore from "./store/AcademicsStore";

export const Context = createContext(null)

console.log()

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStr(),
        section: new CourseStore(),
        academic: new AcademicsStore(),
        review: new AcademicsStore()

    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
