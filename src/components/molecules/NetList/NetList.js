import { Component } from '../../../core';
import { Link } from '../../atoms';
import './netlist.scss';

export class NetList extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('networks'));
    }

    static get observedAttributes() {
        return ['networks']
    }

    render() {
        return `
            <ul>
                ${this.props.map((item) => {
            return `
                        <li class="footer-networks__item">
                            <it-link 
                                link='${JSON.stringify(item)}' 
                                class="footer-networks__link">
                            </it-link>                                   
                        </li>
                    `
        }).join(' ')}
            </ul>
        `
    }
}

customElements.define('it-net-list', NetList)