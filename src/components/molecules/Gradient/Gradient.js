import { Component } from "../../../core";

export class Gradient extends Component {

    render() {
        return `
            <svg width="385" height="105" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="LG1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#F7941D" />
                    <stop offset="100%" stop-color="#27AAE1" />
                </linearGradient>
            </svg>
        `
    }
}

customElements.define('it-gradient', Gradient)