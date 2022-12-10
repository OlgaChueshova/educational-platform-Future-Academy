import * as core from '../../../core';
import { FooterNavigation } from '../../molecules';
import './footer.scss';

export class Footer extends core.Component {
    constructor() {
        super();
        this.links = [
            [
                {
                    logo: 'logo',
                    path: '#',
                    src1: '../../../assets/images/logo/logo-white.svg'
                },
                [
                    {
                        title: '8 800 950-33-98',
                        path: 'tel:88009503398'
                    },
                    {
                        title: 'г.Москва, ул.Ленина, 50',
                        path: '*',
                        component: '/location'
                    },
                    {
                        title: 'info@futureacademy.ru',
                        path: 'Mailto:info@futureacademy.ru'
                    },
                    [
                        {
                            label: 'vk',
                            path: 'https://vk.com/',
                            icon: '../../../assets/images/icons/networks/vk-white.svg',
                            icon2: '../../../assets/images/icons/networks/vk-gradient.svg',
                        },
                        {
                            label: 'instagram',
                            path: 'https://instagram.com/',
                            icon: '../../../assets/images/icons/networks/instagram-white.svg',
                            icon2: '../../../assets/images/icons/networks/instagram-gradient.svg',
                        },
                        {
                            label: 'fb',
                            path: 'https://www.facebook.com/',
                            icon: '../../../assets/images/icons/networks/fb-white.svg',
                            icon2: '../../../assets/images/icons/networks/facebook-gradient.svg',
                        },
                        {
                            label: 'youtube',
                            path: 'https://youtube.com/',
                            icon: '../../../assets/images/icons/networks/youtube-white.svg',
                            icon2: '../../../assets/images/icons/networks/youtube-gradient.svg',
                        },
                        {
                            label: 'telegram',
                            path: 'https://telegram.com/',
                            icon: '../../../assets/images/icons/networks/telegram-wh.svg',
                            icon2: '../../../assets/images/icons/networks/telegram-gradient.svg',
                        },
                    ],
                    {
                        title: '&#169 ХОД, Future Academy',
                    },
                ],
            ],
            {
                title: 'Детям',
                path: '#',
                sublinks: [
                    {
                        title: 'Робототехника',
                        path: '//'
                    },
                    {
                        title: 'Создание игр',
                        path: '//'
                    },
                    {
                        title: 'Программирование',
                        path: '//'
                    },
                    {
                        title: 'Мультимедиа',
                        path: '//'
                    },
                    {
                        title: 'Soft skills',
                        path: '//'
                    },
                    {
                        title: 'Шахматы',
                        path: '//'
                    },
                    {
                        title: 'Блогинг',
                        path: '//'
                    },
                    {
                        title: 'Программирование',
                        path: '//'
                    },
                    {
                        title: 'Мультимедиа',
                        path: '//'
                    },
                    {
                        title: 'Soft skills',
                        path: '//'
                    },
                ]
            },
            {
                title: 'Подросткам',
                path: '#',
                sublinks: [
                    {
                        title: 'Прикладное программирование',
                        path: '//'
                    },
                    {
                        title: 'WEB-разработка',
                        path: '//'
                    },
                    {
                        title: 'Графическое моделирование',
                        path: '//'
                    },
                    {
                        title: 'Game Development',
                        path: '//'
                    },
                    {
                        title: 'Soft skills',
                        path: '//'
                    },
                    {
                        title: 'Разработчик мобильных приложений',
                        path: '//'
                    },
                    {
                        title: 'Блогинг',
                        path: '//'
                    },
                    {
                        title: 'Программирование',
                        path: '//'
                    },
                    {
                        title: 'Мультимедиа',
                        path: '//'
                    },
                    {
                        title: 'Soft skills',
                        path: '//'
                    },
                ]
            },
            {
                title: 'Взрослым',
                path: '#',
                sublinks: [
                    {
                        title: 'Разработка игр на Unity',
                        path: '//'
                    },
                    {
                        title: 'Разработка ПО',
                        path: '//'
                    },
                    {
                        title: 'Графический дизайн',
                        path: '//'
                    },
                    {
                        title: 'Тестирование ПО',
                        path: '//'
                    },
                    {
                        title: 'Интернет Маркетинг',
                        path: '//'
                    },
                    {
                        title: 'JAVA-разработчик',
                        path: '//'
                    },
                    {
                        title: 'Phyton-разработчик',
                        path: '//'
                    },
                    {
                        title: 'IOS-разработчик',
                        path: '//'
                    },
                    {
                        title: 'Мультимедиа',
                        path: '//'
                    },
                ]
            },
            {
                title: 'Информация',
                sublinks: [
                    {
                        title: 'Home Page',
                        path: '/',
                        component: 'home-page'
                    },
                    {
                        title: 'Мероприятия',
                        path: '*',
                        component: 'it-events'
                    },
                    {
                        title: 'Новости',
                        path: '*',
                        component: 'it-news'
                    },
                    {
                        title: 'База знаний',
                        path: '*',
                        component: 'it-library'
                    },
                    {
                        title: 'Карьера',
                        path: '*',
                        component: 'career',
                    },
                    {
                        title: 'Контакты',
                        path: '*',
                        component: 'it-contacts'
                    }
                ]
            }
        ]
    }

    render() {
        return `
            <footer class="footer">
                <footer-nav links='${JSON.stringify(this.links)}'></footer-nav>
            </footer>
        `
    }
}

customElements.define('it-footer', Footer)