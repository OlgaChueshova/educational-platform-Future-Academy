import { Component } from "../../../core";
import { dataBase } from "../../../services/Database";
import { Card } from "../Card";
import './productList.scss'

export class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            toggleIsLoading: false,
            courses: []
        }
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !this.state.isLoading,
            }
        })
    }

    getCourses = () => {
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
        this.getCourses();
    }

    render() {
        return `
        <div class="studying-programs__layout--list catalog-list">
            ${this.state.courses.map((key) => {
                return `
                    <it-card 
                        card='${JSON.stringify(key)}' 
                        class="catalog-list__item">
                    </it-card>
                `
        }).join(' ')}
        </div>
        `
    }
}

customElements.define('products-list', ProductList)