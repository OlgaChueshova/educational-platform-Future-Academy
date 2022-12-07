import { Component } from '../../../core';
import './submenu.scss';

export class SubMenu extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('sublinks'));
        this.state = {
            isOpen: false
        }
    }

    toggleSubMenu(evt) {
        this.setState((state) => {
            return {
                ...state,
                isOpen: !isOpen,
            }
        })
    }

    componentDidMount() {
        window.addEventListener('toggle-SubMenu', toggleSubMenu);
    }

    static get obseredAttributes() {
        return ['sublinks']
    }

    componentWillUnMount() {
        window.removeEventListener('toggle-SubMenu', toggleSubMenu);
    }

    render() {
        return `
            <ul class="header__navigation--submenu ${this.state.isOpen ? "header__navigation--submenu-active" : ""}">
                ${this.props.map((item) => {
                    return `
                        <li class="header__navigation--submenu-item">
                            <a href="${item.href}" class="header__navigation--submenu-link">${item.label}</a>
                        </li>
                    `
                }).join(' ')}
            </ul>
        `
    }
}

customElements.define('it-submenu', SubMenu)