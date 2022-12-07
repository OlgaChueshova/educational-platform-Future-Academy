import { Component } from './core';
import './components/organizms/Header'

export class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() { 
       
    }

    componentWillUnMount() { }

    render() {
        return `
            <it-header></it-header>
        `
     }
}

customElements.define('it-app', App)