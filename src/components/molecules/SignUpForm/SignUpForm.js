import * as core from '../../../core';
import { signUpInput } from '../../atoms';
import { Button } from '../../atoms';
import { NetList } from '../NetList';
import './signUp.scss';

export class SignUpForm extends core.Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('fields'));
        const { title, fields, formName, networks, button } = this.props;
    }

    static get observedAttributes() {
        return ['fields'];
    }

    render() {
        return `
        <div>
            <form name="${formName}" class="sign-up-forms__form">
            <label for="${formName}" class="sign-up-forms__form--label"><a>${title}</a></label>
                <div class="sign-up-forms__form--container">
                    ${fields.map((item) => {
            return `
                            <sign-up-input
                                type='${item.type}'
                                placeholder='${item.text}'
                            >
                            </sign-up-input>
                        `
        }).join(' ')}
                    <p class="sign-up-networks__title">Зарегистрироваться с помощью соцсетей:</p>
                    <it-net-list
                        class="sign-up-forms__form--networks sign-up-networks"
                        networks=${JSON.stringify(networks)}
                    >
                    </it-net-list>
                    <it-button>
                    </it-button>
                </div>
            </form>
        </div>
        `
    }

}

customElements.define('sign-up-form', SignUpForm)



    // onClick(evt) {
    //     const target = evt.target.closest('.sign-up-forms__form');
    //     const targetCollection = document.querySelectorAll('.sign-up-forms__form');
    //     targetCollection.forEach((item) => {
    //         if (item.classList.contains('sign-up-forms__form-active')) {
    //             item.classList.remove('sign-up-forms__form-active')
    //         }
    //     })
    //     if (target) {
    //         evt.preventDefault();
    //         target.classList.add('sign-up-forms__form-active');
    //     }
    //     this.render();
    // }

    // componentDidMount() {
    //     const linkCollection = document.querySelectorAll('.sign-up-forms__form');
    //     linkCollection.forEach((item, index) => {
    //         if(index === 0) {
    //             item.classList.add('sign-up-forms__form-active')
    //         }
    //     })
    //     this.addEventListener('click', this.onClick);
    // }

    // componentWillUnmount() {
    //     this.removeEventListener('click', this.onClick);
    // }
