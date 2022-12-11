import { Component } from '../../../core';
import './card.scss';

export class Card extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('card'))
    }
    
    static get observedAttributes() {
        return ['card']
    }

    render() {
        return `
            <li>
                <a href="//" class="catalog-list__link">
                    <hgroup>
                        <h4 class="catalog-list__link--subtitle">${this.props.program}</h4>
                        <h3 class="catalog-list__link--title">"${this.props.courseName}"</h3>
                        <p class="catalog-list__link--description">
                            ${this.props.descriptions}
                        </p>
                        <span class="catalog-list__link--duration">
                            ${this.props.duration}
                        </span>
                    </hgroup>
                </a>
            </li> 
        `
    }
}

customElements.define('it-card', Card)