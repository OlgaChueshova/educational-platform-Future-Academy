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
            <form name="${this.props.label}" class="${this.props.clasname}">
                <label for="${this.props.label}" class="sort-form__difficulty-level">${content}</label><br>
                    ${items.map((item) => {
                        return `
                            <it-input 
                                value="${this.value}" 
                                type="radio">
                                ${item}
                            </it-input>
                        `
                    }).join(' ')} 
            </form>
        `
    }
}

customElements.define('input-form', InputForm)

