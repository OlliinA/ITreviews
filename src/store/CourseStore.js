import {makeAutoObservable} from "mobx";

export default class CourseStore {

    constructor() {
        this._courses =[
            {id: 1, name: 'Разработка игр' },
            {id: 2, name: 'Разработка игр на Unity'},
        ]
        this._types = [
            {id: 1, name: 'Игры', color: "#3B1966", ico:"../assets/game.png"},
            {id: 2, name: 'Языки', color: "#747FE5"},
        ]
        this._academics = [
            {id:1, name: 'Skillbox', link: 'skillbox.ru', deadline: '2 месяца', price: '50000$', color: "#4110FF"},
            {id:2, name: 'GeekBrains',link: 'gb.ru', deadline: '2 месяца', price: '50000$', color: "#B310FF"},
            {id:3, name: 'GeekBrains',link: 'gb.ru', deadline: '2 месяца', price: '50000$', color: "#B310FF"}
        ]

        makeAutoObservable(this)
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