import * as core from "../../../core";
import { SignUpForm } from "../../molecules/SignUpForm/SignUpForm";
import './signUp.scss'

export class SignUpPage extends core.Component {
    constructor() {
        super();
        this.signInFields = [
            {
                type: 'text',
                text: 'Введите ваше имя',
            },
            {
                type: 'email',
                text: 'Введите ваш e-mail',
            },
            {
                type: 'tel',
                text: 'Введите пароль',
            },
        ];
        this.signUpFields = [
            {
                type: 'text',
                text: 'Введите ваше имя',
            },
            {
                type: 'email',
                text: 'Введите ваш e-mail',
            },
            {
                type: 'tel',
                text: 'Введите пароль',
            },
            {
                type: 'tel',
                text: 'Повторите пароль',
            },
        ];
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
        this.state = {
            isDark: true,
            inputValue: '',
        }
    }
    render() {
        return `
                <it-header 
                    class="header-dark" 
                    is-dark='${JSON.stringify(this.state.isDark)}'>
                </it-header>

                <main class="sign-up-main">
                <div class="sign-up__image owl">
                    <it-owl
                        title=""
                        text="Войдите в систему или зарегистрируйтесь, <br> если у вас еще нет аккаунта.">
                    </it-owl>
                </div>
                
                <fieldset class="sign-up-forms">
                    <sign-up-form 
                        fields='${JSON.stringify(this.signInFields)}'
                        class="sign-up-forms__form"
                        name="sign-in"
                        title="Вход"
                        label="Войти"
                        networks='${JSON.stringify(this.networks)}'
                    >
                    </sign-up-form>
                    <sign-up-form 
                        fields='${JSON.stringify(this.signUpFields)}'
                        class="sign-up-forms__form"
                        name="sign-up"
                        title="Регистрация"
                        label="Зарегистрироваться"
                        networks='${JSON.stringify(this.networks)}'
                    >
                    </sign-up-form>
                </fieldset>
            </main>
                `
    }
}

customElements.define('sign-up-page', SignUpPage)