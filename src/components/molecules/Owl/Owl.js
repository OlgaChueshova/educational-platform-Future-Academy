import { Component } from "../../../core";
import './owl.scss'

export class Owl extends Component {

    render() {
        return `
            <div>
                <img src="../../../assets/images/owl/owl.svg" alt="owl" class="form__image--img">
                <div class="form__image--text">
                    <p>Помочь с выбором?</p>
                    <p>Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий
                        вариант обучения.</p>
                </div>
            </div>
        `
    }

}

customElements.define('it-owl', Owl)