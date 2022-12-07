import { Component } from '../../../core';
import { Link } from '../../atoms';
import { SubMenu } from '../Submenu';
import './navigation.scss'

export class Navigation extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('links'));
    }

    componentDidMount() {
        this.addEventListener('click', (evt) => {
            if (evt.target.closest('.header__navigation--dropdown')) {
                this.dispatch('toggle-SubMenu');
            }
        })
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
                        <li class="header__navigation--list-item ${item.sublinks ? "header__navigation--dropdown" : ''} header__catalog">
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