import * as core from "../../../core";
import { initialState } from "../../atoms/SignUpInput/initialState";
import { SignUpForm } from "../../molecules";
import { Preloader } from "../../atoms";
import './signUp.scss'

export class SignUpPage extends core.Component {
    constructor() {
        super();
        this.state = {
            isDark: true,
            fields: {
                ...initialState,
            },
            isLoading: false
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
                            text="Войдите в систему или зарегистрируйтесь,<br>если у вас еще нет аккаунта.">
                        </it-owl>
                    </div>
                    
                    <fieldset class="sign-up-forms">   
                        ${Object.keys(this.state.fields)
                            .map((key) => {
                                return ` 
                                    <it-preloader is-loading='${this.state.isLoading}' class='preloader'>
                                        <sign-up-form
                                            fields='${JSON.stringify(this.state.fields[key])}'
                                            class="sign-up-forms__form"
                                            >
                                        </sign-up-form>
                                    </it-preloader>
                           ` 
                        }).join(' ')}  
                    </fieldset>
                </main>
                `
    }
}

customElements.define('sign-up-page', SignUpPage)