import { Component } from '../../../core';
import { Link } from '../../atoms';
import { Logo } from '../../atoms';
import './footerNavigation.scss';
import { List } from '../List';

export class FooterNavigation extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('links'))
    }

    static get observedAttributes() {
        return ['links']
    }

    render() {
        return `
        <nav class="footer-navigation">
            <ul class="footer-navigation__list">
                ${this.props.map((item) => {
                        return `
                            <li class="footer-navigation__list--item">
                                ${Array.isArray(item) 
                                    ? `<it-list class="footer-contacts__list" sublinks='${JSON.stringify(item)}'></it-list>`
                                    : `<it-link class="footer-for-children__link" link='${JSON.stringify(item)}'></it-link>
                                        ${item.sublinks 
                                            ? `<it-list class="footer-for-children__sub-list" sublinks='${JSON.stringify(item.sublinks)}'></it-list>` 
                                            : ''}`
                                }
                            </li>
                        `  
                }).join(' ')}  
            </ul>
        </nav>
        `
    }
}

customElements.define('footer-nav', FooterNavigation)

{/* <li class="footer-navigation__list--item footer-contacts">
                <a href="#" class="footer-contacts__link">
                    <img src="../../../assets/images/logo/logo-white.svg" alt="logo" class="footer-contacts__link--logo">
                </a>
                <ul class="footer-contacts__list">
                    <li class="footer-contacts__list--item">
                        <a href="tel:88009503398">8 800 950-33-98</a>
                    </li>
                    <li class="footer-contacts__list--item">г.Москва, ул.Ленина, 50</li>
                    <li class="footer-contacts__list--item">
                        <a href="Mailto:info@futureacademy.ru">info@futureacademy.ru</a>
                    </li>
                    <li class="footer-contacts__list--item">
                        <ul class="footer-contacts__sub-list">
                            <li class="footer-contacts__sub-list--item">
                                <a href="//" class="footer-contacts__sub-list--link">
                                    <img src="../../../assets/images/icons/networks/vk-white.svg" alt="vk">
                                    <img src="../../../assets/images/icons/networks/vk-gradient.svg" alt="vk">
                                </a>
                            </li>
                            <li class="footer-contacts__sub-list--item">
                                <a href="//" class="footer-contacts__sub-list--link">
                                    <img src="../../../assets/images/icons/networks/instagram-white.svg" alt="instagram">
                                    <img src="../../../assets/images/icons/networks/instagram-gradient.svg" alt="instagram">
                                </a>
                            </li>
                            <li class="footer-contacts__sub-list--item">
                                <a href="//" class="footer-contacts__sub-list--link">
                                    <img src="../../../assets/images/icons/networks/fb-white.svg" alt="facebook">
                                    <img src="../../../assets/images/icons/networks/facebook-gradient.svg" alt="facebook">
                                </a>
                            </li>
                            <li class="footer-contacts__sub-list--item">
                                <a href="//" class="footer-contacts__sub-list--link">
                                    <img src="../../../assets/images/icons/networks/youtube-white.svg" alt="youtube">
                                    <img src="../../../assets/images/icons/networks/youtube-gradient.svg" alt="youtube">
                                </a>
                            </li>
                            <li class="footer-contacts__sub-list--item">
                                <a href="//" class="footer-contacts__sub-list--link">
                                    <img src="../../../assets/images/icons/networks/telegram-wh.svg" alt="telegram">
                                    <img src="../../../assets/images/icons/networks/telegram-gradient.svg" alt="telegram">
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p class="footer-navigation__contacts--copyright">&#169 ХОД, Future Academy</p>
            </li>
            <li class="footer-navigation__list--item footer-for-children">
                <a href="//" class="footer-for-children__link">Детям</a>
                <ul class="footer-for-children__sub-list">
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Робототехника</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Создание игр</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Программирование</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Мультимедиа</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Soft skills</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Шахматы</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Блогинг</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Программирование</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Создание игр</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Мультимедиа</a>
                    </li>
                    <li class="footer-for-children__sub-list--item">
                        <a href="//" class="footer-for-children__sub-list--link">Soft skills</a>
                    </li>
                </ul>
            </li>
            <li class="footer-navigation__list--item footer-for-teenagers">
                <a href="//" class="footer-for-teenagers__link">Подросткам</a>
                <ul class="footer-for-teenagers__sub-list">
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">WEB-разработка</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Прикладное программирование</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Графическое моделирование</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Game Development</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Soft skills</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Разработчик мобильных
                            приложений</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Блогинг</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Программирование</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Создание игр</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Мультимедиа</a>
                    </li>
                    <li class="footer-for-teenagers__sub-list--item">
                        <a href="//" class="footer-for-teenagers__sub-list--link">Soft skills</a>
                    </li>
                </ul>
            </li>
            <li class="footer-navigation__list--item footer-for-adults">
                <a href="//" class="footer-for-adults__link">Взрослым</a>
                <ul class="footer-for-adults__sub-list">
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">Разработчик игр на Unity</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">Разработка ПО</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">Графическй дизайн</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">Тестировщик ПО</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">Интернет маркетинг</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">JAVA-разработчик</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">Phyton-разработчик</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">Программирование</a>
                    </li>
                    <li class="footer-for-adults__sub-list--item">
                        <a href="//" class="footer-for-adults__sub-list--link">IOS-разработчик</a>
                    </li>
                </ul>
            </li>
            <li class="footer-navigation__list--item footer-other-information">
                <a href="//" class="footer-other-information__link">Информация</a>
                <ul class="footer-other-information__sub-list">
                    <li class="footer-other-information__sub-list--item">
                        <a href="//" class="footer-other-information__sub-list--link">Об академии</a>
                    </li>
                    <li class="footer-other-information__sub-list--item">
                        <a href="//" class="footer-other-information__sub-list--link">Мероприятия</a>
                    </li>
                    <li class="footer-other-information__sub-list--item">
                        <a href="//" class="footer-other-information__sub-list--link">Новости</a>
                    </li>
                    <li class="footer-other-information__sub-list--item">
                        <a href="//" class="footer-other-information__sub-list--link">База знаний</a>
                    </li>
                    <li class="footer-other-information__sub-list--item">
                        <a href="//" class="footer-other-information__sub-list--link">Карьера</a>
                    </li>
                    <li class="footer-other-information__sub-list--item">
                        <a href="//" class="footer-other-information__sub-list--link">Контакты</a>
                    </li>
                </ul>
            </li> */}