import { Component } from '../../../core';
import { Button } from '../../atoms';
import { Input } from '../../atoms';
import './form.scss';

export class Form extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('fields'));
        this.state = {
            inputValue: '',
        }
    }

    static get observedAttributes() {
        return ['fields']
    }

    render() {
        return `
            <form>
                <div>
                    ${this.props.map((item) => {
                        return `
                            <it-input 
                                value='${this.state.inputValue}'
                                type='${item.type}'
                                placeholder='${item.text}' 
                                class='${item.clasname}'>
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