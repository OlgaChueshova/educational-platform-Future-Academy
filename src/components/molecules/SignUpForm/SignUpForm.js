import { Component } from '../../../core';
import { Input } from '../../atoms';
import { Button } from '../../atoms';
import { NetList } from '../NetList';
import './signUp.scss';

export class SignUpForm extends Component {
    constructor() {
        super();
        this.fields = JSON.parse(this.getAttribute('fields'));
        this.networks = JSON.parse(this.getAttribute('networks'));
        this.state = {
            inputValue: '',
        }
    }

    static get observedAttributes() {
        return ['fields', 'name', 'label', 'title', 'networks'];
    }

    onClick(evt) {
        const target = evt.target.closest('.sign-up-forms__form');
        const targetCollection = document.querySelectorAll('.sign-up-forms__form');
        targetCollection.forEach((item) => {
            if (item.classList.contains('sign-up-forms__form-active')) {
                item.classList.remove('sign-up-forms__form-active')
            }
        })
        if (target) {
            evt.preventDefault();
            target.classList.add('sign-up-forms__form-active');
        }
        this.render();
    }

    componentDidMount() {
        const linkCollection = document.querySelectorAll('.sign-up-forms__form');
        linkCollection.forEach((item, index) => {
            if(index === 0) {
                item.classList.add('sign-up-forms__form-active')
            }
        })
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
    }

    render() {
     
        return `
        <div>
        <form name="${this.props.name}" class="sign-up-forms__form">
        <label for="${this.props.name}" class="sign-up-forms__form--label"><a>${this.props.title}</a></label>
            <div class="sign-up-forms__form--container">
                ${this.fields.map((item) => {
                    return `
                        <it-input
                            value='${this.state.inputValue}'
                            type='${item.type}'
                            placeholder='${item.text}'
                        >
                        </it-input>
                    `
                }).join(' ')}
                <p class="sign-up-networks__title">Зарегистрироваться с помощью соцсетей:</p>
                <it-net-list
                    class="sign-up-forms__form--networks sign-up-networks"
                    networks=${JSON.stringify(this.networks)}
                >
                </it-net-list>
                <it-button 
                    type="submit" 
                    class="sign-up-forms__form--button" 
                    content="${this.props.label}" 
                    eventType="">
                </it-button>
            </div>
        </form>
        </div>
        `
    }
}

customElements.define('sign-up-form', SignUpForm)