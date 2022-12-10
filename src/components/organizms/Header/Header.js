import * as core from "../../../core";
import './header.scss'
import { Logo } from "../../atoms";
import { Navigation } from "../../molecules/Navigation/Navigation";

export class Header extends core.Component {
    constructor() {
        super();
        this.links = [
            {
                title: 'Все курсы',
                label: 'Hamburger',
                path: '/courses',
                icon: '../../../assets/images/icons/hamburger.svg',
                component: 'courses-page'
            },
            {
                title: 'Мероприятия',
                path: '*',
                component: 'error-page'
            },
            {
                title: 'База знаний',
                path: '*',
                component: 'error-page'
            },
            {
                title: 'Карьера',
                path: '*',
                component: 'error-page'
            },
            {
                title: 'Нижний Новгород',
                label: 'Location',
                path: '',
                icon: '../../../assets/images/icons/location.svg',
                sublinks: [
                    {
                        title: 'Москва',
                        path: ''
                    },
                    {
                        title: 'Новосибирск',
                        path: ''
                    },
                    {
                        title: 'Санкт-Петербург',
                        path: ''
                    },
                    {
                        title: 'Астрахань',
                        path: ''
                    },
                    {
                        title: 'Азов',
                        path: ''
                    },
                    {
                        title: 'Калуга',
                        path: ''
                    },
                    {
                        title: 'Ростов-на-Дону',
                        path: ''
                    },
                    {
                        title: 'Тобольск',
                        path: ''
                    },
                    {
                        title: 'Архангельск',
                        path: ''
                    },
                    {
                        title: 'Петропаловск',
                        path: ''
                    },
                ],
            },
            {
                title: '8 800 950-33-98',
                path: 'tel:88009503398'
            },
            {
                title: 'Войти',
                label: 'Person',
                icon: '../../../assets/images/icons/person.svg',
                path: '/signUp',
                component: 'sign-up-page'
            },
        ];
        this.logo = {
            src1: "../../../../assets/images/logo/logo-dark.svg",
            src2: "../../../../assets/images/logo/logo-dark.svg",
        };

    }

    render() {
        return `
        <header class="header header-wrapper">
            <it-logo logo='${JSON.stringify(this.logo)}' class="header__logo"></it-logo>
            <it-navigation links='${JSON.stringify(this.links)}' class="header__navigation"></it-navigation>
        </header>
        `
    }
}

customElements.define('it-header', Header)
