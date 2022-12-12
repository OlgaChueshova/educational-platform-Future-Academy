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
                            ? `<it-sub-list class="footer-contacts__sub-list" sublinks='${JSON.stringify(item)}'></it-sublist>` 
                            :   `
                                <li class="footer-section__list--item">
                                    ${item.logo 
                                    ? `<it-logo class="footer-contacts__logo" logo='${JSON.stringify(item.src1)}'></it-logo>`
                                    : `${item.component 
                                        ? `<it-route-link class="footer-section__list--link" link='${JSON.stringify(item)}'></it-route-link>`
                                        :  `${item.path 
                                            ? `<it-link class="footer-section__list--link" link='${JSON.stringify(item)}'></it-link>`
                                            : `<p class="footer-contacts__copyright">${item.title}</p>`}`
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