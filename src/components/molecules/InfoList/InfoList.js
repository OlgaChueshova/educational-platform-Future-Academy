import { Component } from '../../../core';
import './infolist.scss';

export class InfoList extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('items'))
    }

    static get observedAttributes() {
        return ['items', 'title']
    }

    render() {
        const {items, title} = this.props;
        return `
        <div>
            <h4 class="information__title">${title}</h4>
            <ul class="information__list">
                ${JSON.parse(items).map((item) => {
                    return `
                        <li class="information__list--item">
                            ${item.href 
                                ? `
                                    <a href="${item.path}" class="information__list--link">
                                        ${item.icon
                                            ? `
                                                <img src="${item.icon}" alt="${item.label}">
                                            `
                                            : `
                                                <svg width="250" height="105" xmlns="http://www.w3.org/2000/svg">
                                                    <text class="svg-course" x="0" y="80">${+item.image}</text>
                                                </svg>
                                            `
                                        }
                                        <br>
                                        <p>${item.text}</p>
                                    </a>
                                `
                                : `
                                    <div class="information__list--link">
                                        ${item.icon
                                            ? `
                                                <img src="${item.icon}" alt="${item.label}">
                                            `
                                            : `
                                                <svg width="250" height="105" xmlns="http://www.w3.org/2000/svg">
                                                    <text class="svg-course" x="0" y="80">${+item.image}</text>
                                                </svg>
                                            `
                                        }
                                        <br>
                                        <p>${item.text}</p>
                                    </div>
                                `
                            }  
                        </li>
                            `
                }).join(' ')}
            </ul>
        </div>
        `
    }
}

customElements.define('info-list', InfoList)