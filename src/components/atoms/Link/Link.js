import { Component } from '../../../core';
import './link.scss';

export class Link extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('link'));
        this.state = {
            isActive: false,
            isLogged: false,
        }
        this.onMousemove = this.onMousemove.bind(this);
        this.onMouseout = this.onMouseout.bind(this);
    }

    isLogged = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                isLogged: evt.detail,
            }
        })   
    }
    
    onSignOut = (evt) => {
        const target = evt.target.closest('.sign-out-link');
        if(target) {
            evt.preventDefault();
            this.dispatch('sign-out');
        }
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
    }

    componentDidMount() { 
        window.addEventListener('is-logged', this.isLogged);
        this.addEventListener('click', this.onSignOut);
        this.addEventListener('mousemove', this.onMousemove);
        this.addEventListener('mouseout', this.onMouseout);
    }

    componentWillUnmount() {
        window.removeEventListener('is-logged', this.isLogged);
        this.removeEventListener('click', this.onsignOut);
        this.removeEventListener('mousemove', this.onMousemove);
        this.removeEventListener('mouseout', this.onMouseout);
    }

    static get observedAttributes() {
        return ['link']
    }

    render() {
        return `
            <a href='${this.props.path}' class='${this.props.clasname ?? ''}'>
                ${this.props.icon
                ? `<img src="${this.state.isActive
                    ? `${this.props.icon2 ?? this.props.icon}`
                    : `${this.props.icon}`}" 
                    alt="${this.props.label}">`
                : ''}
                <span>${this.props.title ?? ''}</span>
                ${this.props.description
                ? `<p>${this.props.description}</p>`
                : ''
            }
            </a>
            `
    }
}

customElements.define('it-link', Link)