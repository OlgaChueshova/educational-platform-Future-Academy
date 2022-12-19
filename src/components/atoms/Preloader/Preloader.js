import { Component } from "../../../core";
import './preloader.scss';

export class Preloader extends Component {
    constructor() {
        super();
        this.isShadow = true;
    }

    static get observedAttributes() {
        return ['is-loading'];
    }

    render() {
        return `
            <div>
                ${JSON.parse(this.props['is-loading'])
                ? `
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    `
                : ''
            }
            <slot></slot>   
            </div> 
        `
    }
}

customElements.define('it-preloader', Preloader)