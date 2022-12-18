export class FormManager {
    constructor() {
        this.ref = null;
        this.scheme = null;
        this.errors = {};
    }

    handleSubmit = (callback) => {
        return (evt) => {
            evt.preventDefault();
            const formData = new FormData(evt.target);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            callback(data);
        };
    };

    init(ref, scheme) {
        this.ref = ref;
        this.scheme = scheme;
        const fields = Object.keys(scheme);
        console.log(fields)
        console.log(ref)
        fields.forEach((key) => {
            return ref.querySelector(`input[name="${key}"]`)?.addEventListener('blur', this.validate(key));
        })
    }

    dispatch(target, data) {
        target.dispatchEvent(new CustomEvent('validate-controls', { bubbles: true, detail: data }));
    }

    validate = (key) => {
        return (evt) => {
            const value = evt.target.value;
            const res = this.scheme[key]
                .map((callback) => callback(value))
                .filter((item) => Object.values(item).length !== 0)
                .reduce((acc, curr) => {
                    const [key, value] = Object.entries(curr)[0];
                    acc[key] = value;
                    return acc;
                }, {});
                console.log(res)

            this.dispatch(evt.target, {
                [key]: {
                    value,
                    errors: res,
                    isToushed: true,
                    isValid: Object.values(res).length === 0,
                },
            });
        };
    }
}