import { Component } from '../../../core';
import './link.scss';

export class Link extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('link'))
    }

    static get observedAttributes() {
        return ['link']
    }

    render() {
        return `
            <a href="${this.props.href}" class="header__navigation--link">
                ${this.props.icon 
                    ? `<img src="${this.props.icon}" alt="hamburger" class="header__navigation--icon">`
                    : ''}
                <span>${this.props.label}</span>
            </a>
        `
    }
}

customElements.define('it-link', Link)