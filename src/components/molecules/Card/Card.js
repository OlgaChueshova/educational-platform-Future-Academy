import { appCourses } from '../../../constants/appCourses';
import { appRoutes } from '../../../constants/appRoutes';
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

    
    onClick = (evt) => {
        evt.preventDefault();
        this.dispatch('change-route', { target: `${appRoutes.courses}/:${this.props.id}` })
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
    }

    render() {
        const { title, subtitle, description, durationGroup, id } = this.props;
        return `
                <a href="${appRoutes.courses}/:${id}" class="catalog-list__link">
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
                </a>
        `
    }
}

customElements.define('it-card', Card)