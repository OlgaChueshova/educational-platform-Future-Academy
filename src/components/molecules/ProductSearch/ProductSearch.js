import { Component } from "../../../core";
import { Filter } from "../Filter";
import './productSearch.scss'
;
export class ProductSearch extends Component {
    constructor() {
        super();
        this.fieldset = [
            {
                label: "difficulty-level",
                clasname: "sort-form__difficulty-level",
                content: "Уровень сложности",
                items: ['новичок', 'пользователь', 'профессионал', 'читер']
            },
            {
                label: "difficulty-level",
                clasname: "sort-form__difficulty-level",
                content: "Тип обучения",
                items: ['курс', 'профессионал']
            },
            {
                label: "duration",
                clasname: "sort-form__duration",
                content: "Длительность",
                items: ['1 - 6', '6 - 12', '19 - 24']
            },
        ];
        this.data = [
            {
                id: 0,
                difficultyLevel: 'новичок',
                type: 'курс',
                program: 'программа1',
                courseName: 'Java Script',
                duration: '24',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
            {
                id: 1,
                difficultyLevel: 'пользователь',
                type: 'профессионал',
                program: 'программа2',
                courseName: 'PHP',
                duration: '24',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
            {
                id: 2,
                difficultyLevel: 'профессионал',
                type: 'курс',
                program: 'программа3',
                courseName: 'Разработка мобильных приложений',
                duration: '3',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
            {
                id: 3,
                difficultyLevel: 'читер',
                type: 'профессионал',
                program: 'программа4',
                courseName: 'Шахматы',
                duration: '5',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
            {
                id: 4,
                difficultyLevel: 'новичок',
                type: 'курс',
                program: 'программа5',
                courseName: 'Дизайн',
                duration: '6',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
            {
                id: 5,
                difficultyLevel: 'новичок',
                type: 'профессионал',
                program: 'программа6',
                courseName: 'Phyton',
                duration: '12',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
            {
                id: 6,
                difficultyLevel: 'пользователь',
                type: 'курс',
                program: 'программа7',
                courseName: 'Java',
                duration: '12',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
            {
                id: 6,
                difficultyLevel: 'пользователь',
                type: 'курс',
                program: 'программа7',
                courseName: 'Java',
                duration: '12',
                descriptions: 'Разработчик мобильных приложений создает приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
            },
        ];
    }

    render() {
        return `
            <div class="studying-programs__layout">
                <it-filter fields='${JSON.stringify(this.fieldset)}'></it-filter>
                <products-list 
                    data='${JSON.stringify(this.data)}' 
                    class="studying-programs__layout--wrapper">
                </products-list>
            </div>
        `
    }
}

customElements.define('product-search', ProductSearch)