import { Component } from "../core";
import { AuthService } from "../services/Auth";
import { appRoutes } from "../constants/appRoutes";

export class PrivateRoute extends Component {
    constructor() {
        this.isShadow = true;
    }

    static get observedAttributes() {
        return ['path']
    }

    componentDidMount() {
        if (!authService.user) {
            window.dispatch('change-route', { target: appRoutes[this.props.path ?? 'signUp'] });
        }
    }

    render() {
        return `
            <slot></slot>
        `
    }
}

customElements.define('private-route', PrivateRoute)