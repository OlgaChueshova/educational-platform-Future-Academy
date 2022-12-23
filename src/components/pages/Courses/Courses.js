import { Component } from "../../../core";
import { Header } from "../../organizms";
import { Catalog } from "../../molecules";
import { Form } from "../../molecules";
import { Owl } from "../../molecules";
import { ProductList } from "../../molecules";
import './courses.scss'

export class CoursesPage extends Component {
    constructor() {
        super();
        this.courses = [
            {
                title: "Дети",
                label: "Children",
                description: '8 &mdash; 14 лет',
                path: '//',
                icon: '../../../assets/images/icons/children.svg',
                coursesList: [
                    {
                        title: "Робототехника",
                        path: "*"
                    },
                    {
                        title: "Создание игр",
                        path: "*"
                    },
                    {
                        title: "WEB-разработка",
                        path: "*"
                    },
                    {
                        title: "Мультимедиа",
                        path: "*"
                    },
                    {
                        title: "Шахматы",
                        path: "*"
                    },
                    {
                        title: "3D-моделирование и дизайн",
                        path: "*"
                    },
                    {
                        title: "Английский язык",
                        path: "*"
                    },
                    {
                        title: "Блогинг",
                        path: "*"
                    },
                    {
                        title: "Soft skills",
                        path: "*"
                    },
                ]
            },
            {
                title: "Подростки",
                label: "Children",
                path: '//',
                description: '14 &mdash; 18 лет',
                icon: '../../../assets/images/icons/children1.svg',
                coursesList: [
                    {
                        title: "Робототехника",
                        path: "*"
                    },
                    {
                        title: "Дизайн",
                        path: "*"
                    },
                    {
                        title: "3D-моделирование",
                        path: "*"
                    },
                    {
                        title: "Техномейкерство",
                        path: "*"
                    },
                    {
                        title: "Программирование и Game Dev",
                        path: "*"
                    },
                    {
                        title: "WEB-технологии",
                        path: "*"
                    },
                    {
                        title: "Computer science",
                        path: "*"
                    },
                    {
                        title: "Блогинг",
                        path: "*"
                    },
                    {
                        title: "Soft skills",
                        path: "*"
                    },
                ]
            },
            {
                title: "Взрослые",
                label: 'peaple',
                path: '//',
                description: '18 &mdash;75 лет',
                icon: '../../../assets/images/icons/family.svg',
                coursesList: [
                    {
                        title: "Тестирование ПО",
                        path: "*"
                    },
                    {
                        title: "Разработка на Node.js",
                        path: "*"
                    },
                    {
                        title: "Разработка WEB-приложений на Python",
                        path: "*"
                    },
                    {
                        title: "Разработка WEB-приложений на PHP",
                        path: "*"
                    },
                    {
                        title: "Курсы создания сайтов<br>и Front-End разработки",
                        path: "*"
                    },
                    {
                        title: "Разработка игр на Unity",
                        path: "*"
                    },
                    {
                        title: "Английский язык для IT",
                        path: "*"
                    },
                    {
                        title: "Бизнес-анализ",
                        path: "*"
                    },
                    {
                        title: "WEB-дизайн и компьютерная графика",
                        path: "*"
                    },
                ]
            },
        ];
        this.fields = [
            {
                type: 'text',
                text: 'Ваше имя',
                clasname: 'form__blank--name',
            },
            {
                type: 'tel',
                text: 'Ваш телефон',
                clasname: 'form__blank--tel',
            },
            {
                type: 'email',
                text: 'Ваш e-mail',
                clasname: 'form__blank--email',
            },
        ];
        this.state = {
            isDark: true,
        }
    }

    render() {
        return `
        <it-header class="header-dark header-catalog" is-dark='${JSON.stringify(this.state.isDark)}'></it-header>
        
        <main class="all-courses">
            <h3 class="all-courses__title">Все программы обучения</h3>
            <section class="studying-programs">
                <it-catalog 
                    courses='${JSON.stringify(this.courses)}' 
                    clasname="studying-programs__navigation"
                    title="Направление">
                </it-catalog>
                <div>
                    <products-list></products-list>
                </div>
            </section>
        </main>
                `
    }
}

customElements.define('courses-page', CoursesPage)