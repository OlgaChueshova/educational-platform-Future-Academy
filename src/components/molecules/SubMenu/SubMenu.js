import { Component } from '../../../core';
import { Link } from '../../atoms';
import './submenu.scss';

export class SubMenu extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('sublinks'));
        this.state = {
            isOpen: false
        }
        this.toggleSubMenu = this.toggleSubMenu.bind(this)
    }

    toggleSubMenu() {
        this.setState((state) => {
            return {
                ...state,
                isOpen: !this.state.isOpen,
            }
        })
    }

    componentDidMount() {
        window.addEventListener('toggle-SubMenu', this.toggleSubMenu);
    }

    static get obseredAttributes() {
        return ['sublinks']
    }

    componentWillUnMount() {
        window.removeEventListener('toggle-SubMenu', this.toggleSubMenu);
    }

    render() {
        return `
            <ul class="header__navigation--submenu ${this.state.isOpen ? "header__navigation--submenu-active" : ""}">
                ${this.props.map((item) => {
            return `
                        <li class="header__navigation--submenu-item">
                            <it-link link='${JSON.stringify(item)}'></it-link>
                        </li>
                    `
        }).join(' ')}
            </ul>
        `
    }
}

customElements.define('it-submenu', SubMenu)