import { Component } from "../../../core";
import './header.scss'
import { Logo } from "../../atoms";
import { Navigation } from "../../molecules/Navigation/Navigation";

export class Header extends Component {
    constructor() {
        super();
        this.links = [
            {
                label: 'Все курсы',
                href: '//',
                icon: '../../../assets/images/icons/hamburger.svg',
            },
            {
                label: 'Мероприятия',
                href: '//'
            },
            {
                label: 'База знаний',
                href: '//'
            },
            {
                label: 'Карьера',
                href: '//'
            },
            {
                label: 'Нижний Новгород',
                href: '',
                icon: '../../../assets/images/icons/location.svg',
                sublinks: [
                    {
                        label: 'Москва',
                        href: ''
                    },
                    {
                        label: 'Новосибирск',
                        href: ''
                    },
                    {
                        label: 'Санкт-Петербург',
                        href: ''
                    },
                    {
                        label: 'Астрахань',
                        href: ''
                    },
                    {
                        label: 'Азов',
                        href: ''
                    },
                    {
                        label: 'Калуга',
                        href: ''
                    },
                    {
                        label: 'Ростов-на-Дону',
                        href: ''
                    },
                    {
                        label: 'Тобольск',
                        href: ''
                    },
                    {
                        label: 'Архангельск',
                        href: ''
                    },
                    {
                        label: 'Петропаловск',
                        href: ''
                    },
                ],
            },
            {
                label: '8 800 950-33-98',
                href: 'tel:88009503398'
            },
            {
                label: 'Войти',
                icon: '../../../assets/images/icons/person.svg',
                href: '//',
                icon: '../../../assets/images/icons/person.svg',
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
            <it-logo logo='${JSON.stringify(this.logo)}'></it-logo>
            <it-navigation links='${JSON.stringify(this.links)}' class="header__navigation"></it-navigation>
        </header>
        `
    }
}

customElements.define('it-header', Header)
