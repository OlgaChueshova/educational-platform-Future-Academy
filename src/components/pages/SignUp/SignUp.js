import * as core from "../../../core";
import { SignInForm } from "../../molecules/SignInForm";
import { SignUpForm } from "../../molecules";
import { Preloader } from "../../atoms";
import './signUp.scss'

export class SignUpPage extends core.Component {
    constructor() {
        super();
        this.state = {
            isDark: true
        }
    }

    onClick = (evt) => {
        const target = evt.target.closest('.forms__form');
        const targetCollection = document.querySelectorAll('.forms__form');
        if (target) {
            targetCollection.forEach((item) => {
                if (item.classList.contains('form-active')) {
                    item.classList.remove('form-active')
                };
            });
            target.classList.add('form-active');
        };
    }

    componentDidMount() {
        const linkCollection = document.querySelectorAll('.forms__form');
        linkCollection.forEach((item, index) => {
            if (index === 0) {
                item.classList.add('form-active')
            };
        });
        this.addEventListener('click', this.onClick);
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
                            text="Войдите в систему или зарегистрируйтесь,<br>если у вас еще нет аккаунта.">
                        </it-owl>
                    </div>
                    
                    <div class="sign-up-forms">   
                        <ul>
                            <li>
                                <sign-in-form class="forms__form"></sign-in-form>                             
                            </li>
                            <li>
                                <sign-up-form class="forms__form"></sign-up-form>
                            </li>
                        </ul>   
                    </div>
                </main>
                `
    }

}

customElements.define('sign-up-page', SignUpPage)