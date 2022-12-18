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
        const controlClassName = JSON.parse(this.props['is-valid']) ? 'is-valid' : 'is-invalid';
        const isAddClassName = JSON.parse(this.props['is-touched']) ? controlClassName : '';
        return `
            <div>
                <input  
                    name="${this.props['control-name']}" 
                    type="${this.props.type}"
                    placeholder="${this.props.placeholder}"  
                    value='${this.props.value}'
                    class='form-control ${isAddClassName} ${this.props['class-name'] ?? ''}'
                />
                <div class="invalid-feedback">${this.props['error-message'] ?? ''}</div>
            </div>
        `
    }
}

customElements.define('sign-up-input', signUpInput)