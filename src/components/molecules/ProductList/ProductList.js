import { Component } from "../../../core";
import { Card } from "../Card";
import './productList.scss'

export class ProductList extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('data'))
    }
    
    static get observedAttributes() {
        return ['data']
    }

    render() {
        return `
        <ul class="studying-programs__layout--list catalog-list">
            ${this.props.map((item) => {
                return `
                    <it-card 
                        card='${JSON.stringify(item)}' 
                        class="catalog-list__item">
                    </it-card>
                `
            }).join(' ')}
        </ul>
        `
    }
}

customElements.define('products-list', ProductList)