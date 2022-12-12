import { Component } from '../../../core';
import './inputForm.scss';

export class InputForm extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('field'));
        this.value = ""
    }

    static get observedAttributes() {
        return ['field']
    }

    render() {
        const { label, clasname, content, items } = this.props;
        return `
            <form name="${this.props.label}">
                <label for="${this.props.label}">${content}</label><br>
                    ${items.map((item) => {
                        return `
                            <it-input 
                                class="sort-form__item--input"
                                clasname="input" 
                                value="${item}" 
                                type="radio">
                            </it-input>
                        `
                    }).join(' ')} 
            </form>
        `
    }
}

customElements.define('input-form', InputForm)

