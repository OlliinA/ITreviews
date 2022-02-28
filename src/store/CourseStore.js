import {makeAutoObservable} from "mobx";

export default class CourseStore {

    get reviews() {
        return this._reviews;
    }

    set reviews(value) {
        this._reviews = value;
    }

    constructor() {
        this._courses =[
            {id: 1, name: 'Разработка игр' },
            {id: 2, name: 'Разработка игр на Unity'},
        ]
        this._sections = [
            {id: 1, name: 'Разработка игр' }
        ]
        this._academics = [
            {id:1, name: 'Skillbox', link: 'skillbox.ru', deadline: '2 месяца', price: '50000$', color: "#4110FF"},
            {id:2, name: 'GeekBrains',link: 'gb.ru', deadline: '2 месяца', price: '50000$', color: "#B310FF"},
            {id:3, name: 'GeekBrains',link: 'gb.ru', deadline: '2 месяца', price: '50000$', color: "#B310FF"}
        ]

        this._reviews = [
            {id:1, name: 'Иван', comment: "Познакомитесь с синтаксисом Python, узнаете правила хорошего тона в программировании и научитесь писать лаконичный код, понятный вам и другим разработчикам.", ico: "../assets/Ivan.png", color: "#4110FF"},
        ]


        makeAutoObservable(this)
    }
    get sections() {
        return this._sections;
    }

    setSections(sections) {
        this._sections = sections;
    }


    setTypes(types) {
        this._types = types
    }
    setCourses(courses) {
        this._courses = courses
    }
    set academics(value) {
        this._academics = value;
    }

    get academics() {
        return this._academics;
    }

    get courses() {
        return this._courses
    }

    get types() {
        return this._types
    }


}