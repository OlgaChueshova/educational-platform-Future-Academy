import { Component } from '../../../core';
import './link.scss';

export class Link extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('link'));
        this.state = {
            isActive: false
        }
        this.onMousemove = this.onMousemove.bind(this);
        this.onMouseout = this.onMouseout.bind(this);
    }

    onMousemove(evt) {
        if (evt.target.closest('.footer-networks__link')) {
            this.setState((state) => {
                return {
                    ...state,
                    isActive: true,
                }
            });
        }
        this.render();
    }

    onMouseout(evt) {
        if (evt.target.closest('.footer-networks__link')) {
            this.setState((state) => {
                return {
                    ...state,
                    isActive: false,
                }
            });
        }
        this.render();
    }

    componentDidMount() {
        this.addEventListener('mousemove', this.onMousemove);
        this.addEventListener('mouseout', this.onMouseout);
    }

    componentWillUnmount() {
        this.removeEventListener('mousemove', this.onMousemove);
        this.removeEventListener('mouseout', this.onMouseout);
    }

    static get observedAttributes() {
        return ['link', 'clasname']
    }

    render() {
        return `
            <a href='${this.props.path}' ${this.props.clasname ? `${this.props.clasname}` : ''}>
                ${this.props.icon
                ? `<img src="${this.state.isActive
                    ? `${this.props.icon2}`
                    : `${this.props.icon}`}" 
                    alt="${this.props.label}">`
                : ''}
                <span>${this.props.title ? `${this.props.title}` : ''}</span>
                ${this.props.description
                ? `<p>${this.props.description}</p>`
                : ''
            }
            </a>
            `
    }
}

customElements.define('it-link', Link)