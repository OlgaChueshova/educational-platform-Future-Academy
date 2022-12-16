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
        this.whiteLinks = [
            {
                title: 'Все курсы',
                label: 'Hamburger',
                path: '/courses',
                icon: '../../../assets/images/icons/hmb-white.svg',
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
                icon: '../../../assets/images/icons/location-white.svg',
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
                icon: '../../../assets/images/icons/person-white.svg',
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
        return ['is-dark'];
    }

    render() {
     
        return `
        <header class="header header-wrapper">
            <it-logo 
                class="header__logo" 
                logo="${JSON.parse(this.getAttribute('is-dark'))
                ? `${this.logo.src2}`
                : `${this.logo.src1}`
            }"
                >
            </it-logo>
            <header-navigation 
                links='${JSON.parse(this.getAttribute('is-dark'))
                    ? `${JSON.stringify(this.whiteLinks)}`
                    : `${JSON.stringify(this.links)}`
                }' 
                class="header__navigation"
                >
            </header-navigation>
        </header>
        `
    }
}

customElements.define('it-header', Header)


// componentDidMount() {
//     console.log(this.props)
//     if (JSON.parse(this.getAttribute('is-dark'))) {
//         this.links = this.links.map((item) => {
//             if(item.icon2 && item.icon) {
//                 return  {
//                     ...item,
//                     icon: item.icon2,
//                 }
//             }
//             return item;
//         })
//         this.render()
//     }
// }