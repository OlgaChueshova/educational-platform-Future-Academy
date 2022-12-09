import { Component } from '../../../core/index.js';
import { Link } from '../../atoms/index.js';
import { List } from '../List/List.js';
import './sublist.scss'

export class SubList extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('sublinks'))
    }

    static get observedAttributes() {
        return ['sublinks']
    }

    render() {
        return `
            <ul class="footer-contacts__list">
                ${this.props.map((item) => {
                    return `
                        ${Array.isArray(item) 
                            ? `<it-list class="footer-contacts__sub-list" sublinks='${JSON.stringify(item)}'></it-list>` 
                            :   `
                                <li class="footer-for-children__sub-list--item">
                                    ${item.logo ? `<it-logo logo='${JSON.stringify(item)}'></it-logo>`
                                    : `<it-link class="footer-for-children__sub-list--link" link='${JSON.stringify(item)}'></it-link>`
                                    } 
                                </li>
                                `
                        }
                        
                    `
                }).join(' ')}
                
            </ul>
        `
    }
}

customElements.define('it-sub-list', SubList)