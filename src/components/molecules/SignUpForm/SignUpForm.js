import * as core from '../../../core';
import { FormManager } from '../../../core/FormManager/FormManager';
import { signUpInput } from '../../atoms';
import { Button } from '../../atoms';
import { NetList } from '../NetList';
import { Validator } from '../../../core/FormManager/Validator';
import './signUp.scss';
import { authService } from '../../../services/Auth';

export class SignUpForm extends core.Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('field'));
        this.state = {
            isLoading: false
        }
        this.form = new FormManager();
    }

    static get observedAttributes() {
        return ['field'];
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        })
    }

    registerUser = (data) => {
        console.log(data)
        this.toggleIsLoading();
        authService.signUp(data.email, data.password)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error.message
                    }
                })
            })
            .finally(() => {
                this.toggleIsLoading()
            })
    }

    validateForm = (evt) => {
        if (evt.target.closest('sign-up-input')) {
            this.form.init(evt.target.closest('.sign-up'), {
                user: [
                    Validator.required("Поле не должно быть пустым")
                ],
                email: [
                    Validator.email("Некорректный email"),
                    Validator.required("Поле не должно быть пустым")
                ],
                password: [
                    Validator.required("Поле не должно быть пустым")
                ],
                password2: [
                    Validator.required("Поле не должно быть пустым")
                ]
            })
        }
    }

    componentDidMount() {
        this.addEventListener('click', this.validateForm);
        this.addEventListener('submit', this.form.handleSubmit(this.registerUser))
    }

    render() {
        const { title, fields, formName, networks, button } = this.props;
        return `
            <div>
                <form name="${formName}" class="${formName}"  class="sign-up-forms">
                    <label for="${formName}" class="sign-up-forms__form--label"><a>${title}</a></label>
                    <fieldset class="sign-up-forms__form--container">
                        ${Object.keys(fields).map((key) => {
            return `
                                <sign-up-input
                                    value='${fields[key].value}'
                                    type='${fields[key].type}'
                                    placeholder='${fields[key].text}'
                                    control-name='${fields[key].controlName}'
                                    class-name='${fields[key].className}'
                                    is-valid='${JSON.stringify(fields[key].isValid)}'
                                    is-touched='${JSON.stringify(fields[key].isTouched)}'
                                    error-message='${JSON.stringify(fields[key].errors?.message)}'
                                >
                                </sign-up-input>
                            `
        }).join(' ')}
                        <p class="sign-up-networks__title">${button.content} с помощью соцсетей:</p>
                        <it-net-list
                            class="sign-up-forms__form--networks sign-up-networks"
                            networks=${JSON.stringify(networks)}
                        >
                        </it-net-list>
                        <button
                            class="${button.className}"
                            type="${button.type}"
                            eventType="${button.eventType}"
                            content="${button.content}"
                        >${button.content}
                        </button>
                    </fieldset>
                </form>
            </div>
          `
    }
}

customElements.define('sign-up-form', SignUpForm)

