import * as core from "../../../core";
import { Logo } from "../../atoms";
import { HeaderNavigation } from "../../molecules";
import './header.scss'

export class Header extends core.Component {
    constructor() {
        super();
        this.links = [
            {
                title: 'Все курсы',
                label: 'Hamburger',
                path: '/courses',
                icon: '../../../assets/images/icons/hamburger.svg',
                icon2: '../../../assets/images/icons/hmb-white.svg',
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
                icon2: '../../../assets/images/icons/location-white.svg',
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
                icon2: '../../../assets/images/icons/person-white.svg',
                path: '/signUp',
                component: 'sign-up-page'
            },
        ];
        this.logo = {
            src1: "../../../assets/images/logo/logo-dark.svg",
            src2: "../../../assets/images/logo/logo-white.svg",
        };
    }

    static get observedAttributes() {
        return ['is-dark']
    }

    componentDidMount() {
        console.log(this.props[is-dark])
        if (this.props[is-dark]) {
            this.links.map((item) => {
                console.log(item.icon)
                return item.icon = item.icon2;
            })
        }
    }

    render() {
        return `
        <header class="header header-wrapper">
            <it-logo logo='${this.props['is-dark']
                ? `${JSON.stringify(this.logo.src2)}`
                : `${JSON.stringify(this.logo.src1)}`}' 
                class="header__logo">
            </it-logo>
            <header-navigation 
                links='${JSON.stringify(this.links)}' 
                class="header__navigation">
            </header-navigation>
        </header>
        `
    }
}

customElements.define('it-header', Header)
