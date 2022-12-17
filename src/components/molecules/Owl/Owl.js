import { Component } from "../../../core";
import './owl.scss'

export class Owl extends Component {

    static get observedAttributes() {
        return ['title', 'text', 'lastword']
    }

    render() {
        const { title, text, lastword } = this.props;
        return `
            <div>
                <img src="../../../assets/images/owl/owl.svg" alt="owl">
                <div>
                    <p>${title ? title : ''}</p><br>
                    <p>${text}</p><br>
                    ${lastword ? `<p>${lastword}</p><br>` : ''}
                </div>
            </div>
        `
    }

}

customElements.define('it-owl', Owl)