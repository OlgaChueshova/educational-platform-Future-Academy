import { Component } from '../../../core';
import { Link } from '../../atoms';
import { SubMenu } from '../Submenu';
import './navigation.scss'

export class Navigation extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('links'));
        this.openSubMenu = this.openSubMenu.bind(this)
    }

    openSubMenu(evt) {
        const target = evt.target.closest('.header__navigation--dropdown');
        if (target) {
            evt.preventDefault();
            this.dispatch('toggle-SubMenu');
            target.classList.toggle('header__navigation--dropdown-active')
        }
    }

    componentDidMount() {
        this.addEventListener('click', this.openSubMenu);
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
                            <it-link link='${JSON.stringify(item)}'></it-link>
                            ${item.sublinks ? `<it-submenu sublinks='${JSON.stringify(item.sublinks)}'><it-submenu>` : ''}
                        </li>
                    `
                }).join(' ')}
            </ul>
        </nav>
        `
    }
}

customElements.define('it-navigation', Navigation)