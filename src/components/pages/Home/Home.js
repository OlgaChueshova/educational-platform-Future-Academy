import * as core from "../../../core";

export class HomePage extends core.Component {
    render() {
        return `
                    <h1>Home</h1>
                `
    }
}

customElements.define('home-page', HomePage)