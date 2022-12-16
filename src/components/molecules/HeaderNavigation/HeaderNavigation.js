import { Component } from '../../../core';
import { SubMenu } from '../SubMenu/SubMenu';
import { RouteLink } from '../../../core';
import './headerNavigation.scss';

export class HeaderNavigation extends Component {
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

    componentWillUnmount() {
        this.removeEventListener('click', this.toggleSubMenu);
        window.removeEventListener('click', this.removeSubMenu);
    }

    static get observedAttributes() {
        return ['links'];
    }

    render() {
        console.log(this.props)
        return `
        <nav>
            <ul class="header__navigation--list">
                ${this.props.map((item) => {
                     return `
                        <li class="header__navigation--list-item ${item.sublinks ? "header__navigation--dropdown" : ''}">
                            ${item.component 
                            ? `<it-route-link
                                    class="header__navigation--link" 
                                    link='${JSON.stringify(item)}'
                                >
                                </it-route-link>`
                            : `<it-link 
                                    link='${JSON.stringify(item)}' 
                                    class="header__navigation--link"
                                    >
                                </it-link>` 
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

customElements.define('header-navigation', HeaderNavigation)