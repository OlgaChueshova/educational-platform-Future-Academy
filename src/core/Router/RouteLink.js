import * as core from "../Component";

export class RouteLink extends core.Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('link'));
        this.isShadow = true;
    }

    static get observedAttributes() {
        return ['link']
    }
s
    onClick = (evt) => {
        evt.preventDefault();
        this.dispatch('change-route', { target: this.props.path })
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
        return `
            <a href="${this.props.path}" class="header__navigation--link">
                ${this.props.icon 
                    ? `<img src="${this.props.icon}" 
                        alt="hamburger" 
                        class="header__navigation--icon"
                        >`
                    : ''}
                <span>${this.props.title}</span>
                <slot></slot>
            </a>
        `
    }
}

customElements.define('it-route-link', RouteLink)
