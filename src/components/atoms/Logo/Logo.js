import { Component } from "../../../core";
import './logo.scss'

export class Logo extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('logo'));
    }

    static get observedAttributes() {
        return ['logo'];
    }

    render() {
        return `
            <div>
                <img src="${this.props.src1}" alt="logo">
            </div>
        `
    }
}

customElements.define('it-logo', Logo)