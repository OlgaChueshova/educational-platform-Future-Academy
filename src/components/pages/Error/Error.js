import * as core from "../../../core";

export class ErrorPage extends core.Component {
    render() {
        return `
                    <h1>Not found</h1>
                `
    }
}

customElements.define('error-page', ErrorPage)