import * as core from '../../../core';
import { FormManager } from '../../../core';
import { Validator } from '../../../core';
import { signUpInput } from '../../atoms';
import { Button } from '../../atoms';
import { NetList } from '../NetList';
import { Preloader } from '../../atoms';
import { initialState } from './initialState';
import { authService } from '../../../services/Auth';
import { appRoutes } from '../../../constants/appRoutes';
import './signUp.scss';

export class SignUpForm extends core.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            fields: {
                ...initialState,
            },
            error: "",
        };
        this.networks = [
            {
                label: 'vk',
                icon: '../../../assets/images/icons/networks/vk-gradient.svg',
            },
            {
                label: 'instagram',
                icon: '../../../assets/images/icons/networks/instagram-gradient.svg',
            },
            {
                label: 'fb',
                icon: '../../../assets/images/icons/networks/facebook-gradient.svg',
            },
            {
                label: 'youtube',
                icon: '../../../assets/images/icons/networks/youtube-gradient.svg',
            },
            {
                label: 'telegram',
                icon: '../../../assets/images/icons/networks/telegram-gradient.svg',
            },
        ];
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
        this.toggleIsLoading();
        authService.signUp(data.email, data.password)
            .then((user) => {
                authService.user = user;
                this.dispatch('change-route', { target: appRoutes.home })
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

    validate = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...evt.detail,
                }
            }
        });
    }

    validateForm = (evt) => {
        if (evt.target.closest('sign-up-input')) {
            this.form.init(evt.target.closest('.sign-up-forms__form'), {
                user: [
                    Validator.required("???????? ???? ???????????? ???????? ????????????")
                ],
                email: [
                    Validator.email("???????????????????????? email"),
                    Validator.required("???????? ???? ???????????? ???????? ????????????")
                ],
                password: [
                    Validator.required("???????? ???? ???????????? ???????? ????????????")
                ]
            })
        }
    }

    componentDidMount() {
        this.addEventListener('click', this.validateForm);
        this.addEventListener('validate-controlls', this.validate);
        this.addEventListener('submit', this.form.handleSubmit(this.registerUser)); 
    }

    componentWillUnmount() {
        this.removeEventListener('validate-controlls', this.validate);
    }

    render() {
        const { fields: { user, email, password } } = this.state;
        return `
            ${this.state.isLoading 
                ? `<it-preloader is-loading="${this.state.isLoading}" class="preloader"></it-preloader>` 
                : `
                    <form class="sign-up-forms__form">
                        <label for="sign-up" class="sign-up-forms__form--label">??????????????????????</label>
                        <div class="invalid-feedback">${this.state.error}</div>
                        <div class="sign-up-forms__form--container">
                            <sign-up-input
                                value='${user.value}'
                                type='text'
                                placeholder='?????????????? ???????? ??????'
                                control-name='user'
                                class-name='sign-up-forms__form--name'
                                is-valid='${user.isValid}'
                                is-touched='${user.isTouched}'
                                error-message='${user.errors?.message}'
                            ></sign-up-input>
                            <sign-up-input
                                value='${email.value}'
                                type='email'
                                placeholder='?????????????? ?????? e-mail'
                                control-name='email'
                                class-name='sign-up-forms__form--email'
                                is-valid='${email.isValid}'
                                is-touched='${email.isTouched}'
                                error-message='${email.errors?.message}'
                            ></sign-up-input>
                            <sign-up-input
                                value='${password.value}'
                                type='password'
                                placeholder='?????????????? ????????????'
                                control-name='password'
                                class-name='sign-up-forms__form--password'
                                is-valid='${password.isValid}'
                                is-touched='${password.isTouched}'
                                error-message='${password.errors?.message}'
                            ></sign-up-input>
                            <p class="sign-up-networks__title">???????????????????????????????????? ?? ?????????????? ????????????????:</p>
                            <it-net-list
                                class="sign-up-forms__form--networks sign-up-networks"
                                networks='${JSON.stringify(this.networks)}'
                            ></it-net-list>
                            <button
                                class="sign-up-forms__form--button"
                                type="submit" 
                            >????????????????????????????????????</button>
                        </div>
                    </form>
                `}
           `
    }
}

customElements.define('sign-up-form', SignUpForm)

