import { Component } from '../../../core';
import { Link } from '../../atoms';
import './gridMenu.scss';

export class GridMenu extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('windows'))
    }

    static get observedAttributes() {
        return ['windows'];
    }

    render() {
        return `
            <ul class="information-menu__list">
                ${this.props.map((item) => {
                    return `
                        <li class="information-menu__list--item ${item.clasname ? `${item.clasname}` : ''}">
                            ${item.data 
                                ? `
                                    <hgroup>
                                        <h4><span>${item.data}</span><br>${item.month}</h4>
                                        <div>
                                            <h4>${item.title}</h4>
                                            <p>${item.description}</p>
                                        </div>
                                        <it-link 
                                            link='${JSON.stringify(item.link)}' 
                                            class="information-menu__list--link-btn"
                                        >
                                        </it-link>
                                    </hgroup>
                                `
                                : `
                                    ${item.description && item.link
                                    ? `
                                        <div>
                                            <h4>${item.title}</h4>
                                            <p>${item.description}</p>
                                            <it-link 
                                                    link='${JSON.stringify(item.link)}' 
                                                    class="information-menu__list--link-btn"
                                            >
                                            </it-link>
                                        </div>
                                    `
                                    : `
                                        <it-link 
                                            link='${JSON.stringify(item)}' 
                                            class="information-menu__list--link"
                                        >
                                        </it-link>
                                    `
                                    }
                                `
                            }
                            
                        </li>
                    `
                }).join(' ')}
            </ul>
        `
    }
}

customElements.define('grid-menu', GridMenu)