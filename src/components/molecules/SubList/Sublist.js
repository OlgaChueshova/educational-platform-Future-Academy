import { Component } from '../../../core/index.js';
import { Link } from '../../atoms/index.js';
import { List } from '../List/List.js';
import { NetList } from '../NetList/NetList.js';
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
            <ul>
                ${this.props.map((item) => {
                    return `
                        ${Array.isArray(item) 
                            ? `<it-net-list class="footer-contacts__sub-list--item footer-networks" networks='${JSON.stringify(item)}'></it-net-list>` 
                            :  `
                                <li class="footer-contacts__sub-list--item">
                                    ${item.component
                                        ? `<it-route-link class="footer-contacts__sub-list--link" link='${JSON.stringify(item)}'></it-route-link>`
                                        : `${item.path 
                                            ? `<it-link class="footer-contacts__sub-list--link" link='${JSON.stringify(item)}'></it-link>`
                                            : `<p class="footer-contacts__copyright">${item.title}</p>`}`}                                     
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