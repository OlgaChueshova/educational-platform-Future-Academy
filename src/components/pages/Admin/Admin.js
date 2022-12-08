import * as core from '../../../core';

export class AdminPage extends core.Component {
    render() {
        return `
                    <h1>Admin</h1>
                `
    }
}

customElements.define('admin-page', AdminPage)