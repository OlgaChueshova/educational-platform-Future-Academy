import { Component } from "../../../core";
import './logo.scss'

export class Logo extends Component {
    constructor() {
        super();

    }

    static get observedAttributes() {
        return ['logo'];
    }

    render() {
        return `
            <div>
                <img src="${this.props.logo}" alt="logo">
            </div>
        `
    }
}

customElements.define('it-logo', Logo)