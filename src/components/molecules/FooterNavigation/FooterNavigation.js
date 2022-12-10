import { Component } from '../../../core';
import { Link } from '../../atoms';
import { List } from '../List';
import './footerNavigation.scss';

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
                                <li class="footer-navigation__list--item footer-section">
                                    ${Array.isArray(item) 
                                        ? `<it-list class="footer-section__list footer-contacts" sublinks='${JSON.stringify(item)}'></it-list>`
                                        : `<it-link class="footer-section__link" link='${JSON.stringify(item)}'></it-link>
                                            ${item.sublinks 
                                                ? `<it-list class="footer-section__list" sublinks='${JSON.stringify(item.sublinks)}'></it-list>` 
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