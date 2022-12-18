import { Component } from '../../../core';
import './button.scss'

export class Button extends Component {

playVideo = (evt) => {
    const target = evt.target.closest('.video__btn');
    const video = document.querySelector('.video__clip');
    if(target) {
        evt.preventDefault();
        target.classList.add('video__btn--notactive');
        this.dispatch('play-video');
    }
    this.render();
}

    componentDidMount() {
        this.addEventListener("click", (evt) => {
            evt.preventDefault();
            this.dispatch(this.props.eventType);
        })
        this.addEventListener('click', this.playVideo);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.playVideo);
    }

    static get observedAttributes() {
        return ['type', 'content', 'eventType', 'clasname', 'img']
    }

    componentDidMount() {
        
    }

    render() {
        return `
            <button type="${this.props.type}" class="${this.props.clasname}">
                ${this.props.img
                ? `<img src="${this.props.img}">`
                : `${this.props.content}`
            }
            </button>
        `
    }
}

customElements.define('it-button', Button)