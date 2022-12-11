import { Component } from '../../../core';
import { Link } from '../../atoms';
import { RouteLink } from '../../../core';
import './catalog.scss'

export class CatalogList extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('courseslist'));
        this.state = {
            isActive: false,
        }
    }

    static get observedAttributes() {
        return ['courseslist']
    }

    render() {
        console.log(this.props)
        return `
            <ul class="course-catalog__subMenu">
                ${this.props.map((item) => {
                    return `
                        <li class='course-catalog__subMenu--item'>
                            <it-route-link 
                                class="course-catalog__subMenu--link" 
                                link='${JSON.stringify(item)}'>
                            </it-route-link>
                        </li>
                    `
                }).join(' ')}
            </ul>
        `
    }
}

customElements.define('it-catalog-list', CatalogList)