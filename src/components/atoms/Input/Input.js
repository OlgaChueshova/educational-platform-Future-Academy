import { Component } from '../../../core';
import './input.scss';

export class Input extends Component {
    constructor() {
        super();
    } 

    static get observedAttributes() {
        return ['value', 'type', 'placeholder']
    }

    render() {
        return `
            <input 
                type="${this.props.type}"
                ${this.props.placeholder ? `placeholder="${this.props.placeholder}"` : ''}  
                value='${this.props.value}'
            >
            <span>${this.props.value}</span>
        `
    }
}

customElements.define('it-input', Input)