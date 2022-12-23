import { Component } from "../../../core";

export class TextArea extends Component {

static get observedAttributes() {
    return [
        'validate-attr',
        'attributes'
    ]
}

render() {
    const { isValid, isTouched, errors, value } = JSON.parse(this.getAttribute('validate-attr'));
    const {type, controlName, label, classNameGroup } = JSON.parse(this.getAttribute('attributes'));
    const controlClassName = isValid ? 'is-valid' : 'is-invalid';
    const isAddClassName = isTouched ? controlClassName : '';
    console.log(isTouched)
    return `
        <div class="${classNameGroup}">
            <label class="form-label">${label}</label>
            <textarea  
                name="${controlName}" 
                type="${type}"  
                value='${value}'
                class="form-control ${isAddClassName}" 
                rows="5"
            >
            </textarea>
            <div class="invalid-feedback">${errors.message ?? ''}</div>
        </div>
    `
}
}

customElements.define('it-textarea', TextArea)