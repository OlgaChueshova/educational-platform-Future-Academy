import { Component } from '../../../core';
import './navigation.scss';
import '../../../components';
import { RouteLink } from '../../../core';

export class Navigation extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('links'));
        this.toggleSubMenu = this.toggleSubMenu.bind(this);
        this.removeSubMenu = this.removeSubMenu.bind(this);
    }

    toggleSubMenu(evt) {
        const target = evt.target.closest('.header__navigation--dropdown');
        if (target && !target.classList.contains('header__navigation--dropdown-active')) {
            evt.preventDefault();
            this.dispatch('toggle-subMenu');
            target.classList.toggle('header__navigation--dropdown-active');
        }
    }

    removeSubMenu(evt) {
        const target = evt.target.closest('.header__navigation--dropdown');
        if (!target) {
            this.dispatch('remove-subMenu');
            const targetActive = document.querySelector('.header__navigation--dropdown');
            if(targetActive.classList.contains('header__navigation--dropdown-active')) {
                targetActive.classList.remove('header__navigation--dropdown-active');
            }
        }
    }

    componentDidMount() {
        this.addEventListener('click', this.toggleSubMenu);
        window.addEventListener('click', this.removeSubMenu);
    }

    static get observedAttributes() {
        return ['links']
    }

    render() {
        return `
        <nav>
            <ul class="header__navigation--list">
                ${this.props.map((item) => {
                     return `
                        <li class="header__navigation--list-item ${item.sublinks ? "header__navigation--dropdown" : ''}">
                            ${item.component 
                            ? `<it-route-link link='${JSON.stringify(item)}'></it-route-link>`
                            : `<it-link link='${JSON.stringify(item)}'></it-link>` 
                            }
                            ${item.sublinks 
                            ? `<it-submenu sublinks='${JSON.stringify(item.sublinks)}'></it-submenu>`
                            : ''}
                        </li>
                    `
                }).join(' ')}
            </ul>
        </nav>
        `
    }
}

customElements.define('it-navigation', Navigation)