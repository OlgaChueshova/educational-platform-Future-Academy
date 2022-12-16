import { Component } from '../../../core';
import { Link } from '../../atoms';
import { CatalogList } from './CatalogList';
import './CatalogList'
import './catalog.scss'

export class Catalog extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('courses'));
        this.onClick = this.onClick.bind(this);
    }

    static get observedAttributes() {
        return ['courses', 'clasname', 'title']
    }

    onClick(evt) {
        const target = evt.target.closest('.course-catalog__list--item');
        const targetCollection = document.querySelectorAll('.course-catalog__list--item');
        targetCollection.forEach((item) => {
            if (item.classList.contains('course-catalog__list--item-active')) {
                item.classList.remove('course-catalog__list--item-active')
            }
        })
        if (target) {
            evt.preventDefault();
            target.classList.add('course-catalog__list--item-active');
        }
        this.render();
    }

    componentDidMount() {
        const linkCollection = document.querySelectorAll('.course-catalog__list--item');
        linkCollection.forEach((item, index) => {
            if(index === 0) {
                item.classList.add('course-catalog__list--item-active')
            }
        })
        const links = document.querySelector('.course-catalog__list');
        links.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
    }

    render() {
        return `
            <nav class="${this.props.clasname} course-catalog">
                <ul class="course-catalog__list">
                    ${this.props.map((item) => {
                        return `
                            <li class="course-catalog__list--item">
                                <it-link link='${JSON.stringify(item)}' 
                                    class="course-catalog__list--link">
                                </it-link>
                                <it-catalog-list 
                                    courseslist='${JSON.stringify(item.coursesList)}' 
                                    class="course-catalog__subMenu"
                                    title='${this.props.title ? this.props.title : ''}'>
                                </it-catalog-list>
                            </li>
                        `
                    }).join(' ')}
                </ul>
            </nav> 
        `
    }
}

customElements.define('it-catalog', Catalog)