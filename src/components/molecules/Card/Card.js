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
        const { title, subtitle, description, durationGroup } = this.props;
        return `
            <li>
                <it-route-link href="//" class="catalog-list__link">
                    <hgroup>
                        <h4 class="catalog-list__link--subtitle">${subtitle}}</h4>
                        <h3 class="catalog-list__link--title">"${title}"</h3>
                        <p class="catalog-list__link--description">
                            ${description}
                        </p>
                        <span class="catalog-list__link--duration">
                            ${durationGroup}<span>мес.</span>
                        </span>
                    </hgroup>
                </it-route-link>
            </li> 
        `
    }
}

customElements.define('it-card', Card)