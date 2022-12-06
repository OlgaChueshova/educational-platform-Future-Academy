import { Component } from "../../../core";

export class Logo extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('src'))
    }

    static get observedAttributes() {
        return ['src'];
    }

    render() {
        return `
        <div class="header__logo">
            <img src="${this.props.src}" alt="logo">
        </div>
        `
    }
}

customElements.define('it-logo', Logo)