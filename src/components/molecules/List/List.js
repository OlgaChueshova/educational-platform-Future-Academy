import { Component } from '../../../core/index';
import { Link } from '../../atoms/index';
import { Logo } from '../../atoms/index';
import { Router } from '../../../core/index';
import { RouteLink } from '../../../core/index';
import './list.scss'

export class List extends Component {
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
                            ? `<it-sub-list class="footer-contacts__list" sublinks='${JSON.stringify(item)}'></it-sublist>` 
                            :   `
                                <li class="footer-for-children__sub-list">
                                    ${item.logo 
                                    ? `<it-logo class="footer-contacts" logo='${JSON.stringify(item)}'></it-logo>`
                                    : `${item.component 
                                        ? `<it-route-link class="footer-for-children__sub-list--link" link='${JSON.stringify(item)}'></it-route-link>`
                                        :  `<it-link class="footer-for-children__sub-list--link" link='${JSON.stringify(item)}'></it-link>`
                                        }`
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

customElements.define('it-list', List)