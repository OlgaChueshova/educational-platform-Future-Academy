import { Component } from "../../../core";
import { InputRadio } from "../InputRadio";
import './filter.scss';

export class Filter extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('fields'));
    }

    static get observedAttributes() {
        return ['fields']
    }

    render() {
        return `
            <aside class="studying-programs__site-bar">
                <fieldset class="studying-programs__site-bar--filter sort-form">
                    ${this.props.map((item) => {
                        return `
                            <input-radio 
                                field='${JSON.stringify(item)}' 
                                class="sort-form__item">
                            </input-radio>
                        `
                    }).join(' ')}
                </fieldset>
                <a href="//" class="studying-programs__site-bar--banner">
                    <img src="" alt="">
                </a>
            </aside>
        `

    }
}

customElements.define('it-filter', Filter)