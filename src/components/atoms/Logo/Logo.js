import { Component } from "../../../core";
import './logo.scss'

export class Logo extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('logo'));
        console.log(this.props)
    }

    static get observedAttributes() {
        return ['logo'];
    }

    render() {
        return `
            <div>
                <img src="${this.props}" alt="logo">
            </div>
        `
    }
}

customElements.define('it-logo', Logo)