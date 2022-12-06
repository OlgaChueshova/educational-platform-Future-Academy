import { Component } from "../../../core";

export class Header extends Component {
    constructor() {
        super();
        this.links = [
            {
                label: 'Все курсы',
                href: '//',
                icon: './images/hamburger.svg',
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
                icon: './images/location.svg',
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
                ],
            },
            {
                label: '8 800 950-33-98',
                href: 'tel:88009503398'
            },
            {
                label: 'Войти',
                icon: './images/person.svg',
                href: '//',
                icon: './images/person.svg',
            },
        ];
        this.logo = "../../../images/logo/logo-dark.svg";

    }

    componentDidMount() {
     }

    componentWillUnMount() { }

    render() {
        return `
        <header class="header header-wrapper">
            <it-logo src='${JSON.stringify(this.logo)}'></it-logo>
            <nav class="header__navigation">
                <ul class="header__navigation--list">
                    <li class="header__navigation--list-item header__navigation--dropdown header__catalog">
                        <a href="" class="header__navigation--link">
                            <img src="./images/icons/hamburger.svg" alt="hamburger" class="header__navigation--icon">
                            Все курсы
                        </a>
                    </li>
                    <li class="header__navigation--list-item">
                        <a href="//" class="header__navigation--link">Мероприятия</a>
                    </li>
                    <li class="header__navigation--list-item">
                        <a href="//" class="header__navigation--link">Базы знаний</a>
                    </li>
                    <li class="header__navigation--list-item">
                        <a href="//" class="header__navigation--link">Карьера</a>
                    </li>
                    <li class="header__navigation--list-item header__navigation--dropdown header__location">
                        <img src="./images/icons/location.svg" alt="location" class="header__navigation--icon">
                        <a href="" class="header__navigation--link header__location--link"
                            style="text-decoration: underline; padding-right: 18px;">Нижний Новгород</a>
                        <div class="header__navigation--submenu">
                            <p>Выберите свой город</p>
                            <ul class="header__location--subMenu">
                                <li class="header__navigation--submenu-item">
                                    <a href="" class="header__navigation--submenu-link">Нижний Новгород</a>
                                </li>
                                <li class="header__navigation--submenu-item">
                                    <a href="" class="header__navigation--submenu-link">Москва</a>
                                </li>
                                <li class="header__navigation--submenu-item">
                                    <a href="" class="header__navigation--submenu-link">Новосибирск</a>
                                </li>
                                <li class="header__navigation--submenu-item">
                                    <a href="" class="header__navigation--submenu-link">Ростов-на-Дону</a>
                                </li>
                                <li class="header__navigation--submenu-item">
                                    <a href="" class="header__navigation--submenu-link">Алметьевск</a>
                                </li>
                                <li class="header__navigation--submenu-item">
                                    <a href="" class="header__navigation--submenu-link">Азов</a>
                                </li>
                                <li class="header__navigation--submenu-item">
                                    <a href="" class="header__navigation--submenu-link">Астрахань</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="header__navigation--list-item">
                        <a href="tel:+88009503398" class="header__navigation--link">8 800 950-33-98</a>
                    </li>
                    <li class="header__navigation--list-item">
                        <img src="./images/icons/person.svg" alt="person" class="header__navigation--icon">
                        <a href="./signUp.html" class="header__navigation--link">Войти</a>
                    </li>
                </ul>
            </nav>
        </header>
        `
    }
}

customElements.define('it-header', Header)
