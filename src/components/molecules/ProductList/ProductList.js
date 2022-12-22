import { Component } from "../../../core";
import { dataBase } from "../../../services/Database";
import { Card } from "../Card";
import './productList.scss'

export class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            toggleIsLoading: false,
            courses: {
                ageGroup: {
                    'Всем': [],
                    'Детям': [],
                    'Подросткам': [],
                    'Взрослым': [],
                },
                durationGroup: {
                    'Все': [],
                    3: [],
                    6: [],
                    12: [],
                },
            }
        }
        this.props = JSON.parse(this.getAttribute('data'))
    }

    static get observedAttributes() {
        return ['data']
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !this.state.isLoading,
            }
        })
    }

    getMovies = () => {
        this.toggleIsLoading();
        dataBase.read('courses').then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    courses: data
                }
            })
        })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        console.log(this.state.courses)
        return `
        <ul class="studying-programs__layout--list catalog-list">
            ${Object.keys(this.state.courses).map((key) => {
            return `
                    <li>
                        <ul>
                            ${Object.keys(this.state.courses[key]).map((subkey) => {
                                return `
                                    <li>
                                        <ul>
                                            ${subkey.map((item) => {
                                                return `
                                                    <it-card 
                                                        card='${JSON.stringify(item)}' 
                                                        class="catalog-list__item">
                                                    </it-card>
                                                `
                                                }).join(' ')
                                            }
                                        </ul>
                                    </li>
                               `
                            }).join(' ')}
                        </ul>
                    </li>
                `
        }).join(' ')}
        </ul>
        `
    }
}

customElements.define('products-list', ProductList)