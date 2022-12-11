import { Component } from '../../../core';
import './input.scss';

export class Input extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('props'));
    } 

    static get observedAttributes() {
        return ['props', 'value']
    }

    render() {
        return `
            <input 
                type="${this.props.type}" 
                placeholder="${this.props.text}" 
                value='${this.props.value}'
                >
        `
    }
}

customElements.define('it-input', Input)