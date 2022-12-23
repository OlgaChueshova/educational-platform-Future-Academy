export const initialState = {
    user: {
        value: '',
        errors: {},
        isTouched: false,
        isValid: false,
        type: 'text',
        text: 'Введите ваше имя',
        controlName: 'user',
        className: 'sign-up-forms__form--name'
    },
    email: {
        value: '',
        errors: {},
        isTouched: false,
        isValid: false,
        type: 'email',
        text: 'Введите ваш e-mail',
        controlName: 'email',
        className: 'sign-up-forms__form--email'
    },
    password: {
        value: '',
        errors: {},
        isTouched: false,
        isValid: false,
        type: 'password',
        text: 'Введите пароль',
        controlName: 'password',
        className: 'sign-up-forms__form--password'
    }
}
