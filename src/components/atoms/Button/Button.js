import { Component } from '../../../core';
import './button.scss'

export class Button extends Component {
  
    componentDidMount() {
        this.addEventListener("click", (evt) => {
            evt.preventDefault();
            this.dispatch(this.props.eventType);
        })
    }

    static get observedAttributes() {
        return ['type', 'content', 'eventType', 'className']
    }

    render() {
        console.log(this.props)
        return `
            <button type="${this.props.type}">${this.props.content}</button>
        `
    }
}

customElements.define('it-button', Button)