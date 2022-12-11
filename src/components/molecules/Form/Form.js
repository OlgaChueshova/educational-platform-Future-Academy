import { Component } from '../../../core';
import { Button } from '../../atoms';
import { Input } from '../../atoms';
import './form.scss';

export class Form extends Component {
    constructor() {
        super();
        this.fields = [
            {
                type: 'text',
                text: 'Ваше имя',
                classname: 'form__blank--name',
            },
            {
                type: 'tel',
                text: 'Ваш телефон',
                classname: 'form__blank--tel',
            },
            {
                type: 'email',
                text: 'Ваш e-mail',
                classname: 'form__blank--email',
            },
        ];
        this.state = {
            inputValue: '',
        }
    }

    render() {
        return `
            <form action="//" method="post" class="form__blank">
                <div class="form__blank--container">
                    ${this.fields.map((item) => {
                        return `<it-input 
                                        value='${this.state.inputValue}' 
                                        props='${JSON.stringify(item)}' 
                                        class='${item.classname}'>
                                </it-input>`
                    }).join(' ')}
                    <p class="form__blank--text">Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с
                        правилами пользования Платформой
                    </p>
                    <it-button 
                        type="submit" 
                        class="form__blank--button" 
                        content="Отправить" 
                        eventType="">
                    </it-button>
                </div>
            </form> 
        `
    }
}

customElements.define('it-form', Form)