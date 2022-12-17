import { Component } from '../../../core';
import './signUpInput.scss';

export class signUpInput extends Component {
    constructor() {
        super();
    } 

    static get observedAttributes() {
        return [
            'value',
            'type',
            'placeholder',
            'control-name',
            'class-name',
            'is-valid',
            'is-touched',
            'error-message'
        ]
    }

    render() {
        const controllClassName = JSON.parse(this.props['is-valid' ? 'is-valid' : 'is-invalid']);
        const isAddClassName = JSON.parse(this.props['is-touched'] ? controllClassName : '');
        return `
            <input 
                type="${this.props.type}"
                placeholder="${this.props.placeholder}"  
                value='${this.props.value}'
                class='${isAddClassName} ${this.props['class-name'] ?? ''}'
            />
        `
    }
}

customElements.define('sign-up-input', signUpInput)