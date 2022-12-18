import * as core from "../../../core";
import { initialState } from "./initialState";
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
        }
    }

    validate = (evt) => {
        // console.log(evt.detail)
        // this.setState((state) => {
        //     return {
        //         ...state,
        //         fields: {
        //             ...fields,
        //             signInFields: {
        //                 ...signInFields,
        //                 fields: {
        //                     ...fields,
        //                     ...evt.detail,
        //                 }
        //             }
        //         },
        //     };
        // });
    }

    onClick = (evt) => {
        const target = evt.target.closest('.sign-up-forms__form');
        const targetCollection = document.querySelectorAll('.sign-up-forms__form');
        if (target) {
            evt.preventDefault();
            targetCollection.forEach((item) => {
                if (item.classList.contains('sign-up-forms__form-active')) {
                    item.classList.remove('sign-up-forms__form-active')
                };
            });
            target.classList.add('sign-up-forms__form-active');
        };
    }

    isActiveForm = () => {
        const linkCollection = document.querySelectorAll('.sign-up-forms__form');
        linkCollection.forEach((item, index) => {
            if (index === 0) {
                item.classList.add('sign-up-forms__form-active')
            };
        });
        this.addEventListener('click', this.onClick);
    }

    componentDidMount() {
        this.isActiveForm();
        this.addEventListener('validate-controls', this.validate);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
        this.removeEventListener('validate-controls', this.validate);
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
                    
                    <div>   
                        ${Object.keys(this.state.fields)
                            .map((key) => {
                                return ` 
                                    <sign-up-form
                                        field='${JSON.stringify(this.state.fields[key])}'
                                        class="sign-up-forms__form"
                                    >
                                    </sign-up-form>   
                                ` 
                        }).join(' ')}  
                    </div>
                </main>
                `
    }

}

customElements.define('sign-up-page', SignUpPage)