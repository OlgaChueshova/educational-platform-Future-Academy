export const initialState = {
    signInFields: {
        title: 'Вход',
        label: 'sign-in-forms__form--label',
        formName: 'sign-in-forms__form',
        fields: {
            user: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'text',
                text: 'Введите ваше имя',
                controlName: 'user',
                className: 'sign-in-forms__form--name'
            },
            email: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'email',
                text: 'Введите ваш e-mail',
                controlName: 'email',
                className: 'sign-in-forms__form--email'
            },
            password: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'password',
                text: 'Введите пароль',
                controlName: 'password',
                className: 'sign-in-forms__form--password'
            }
        },
        networks:  [
            {
                label: 'vk',
                icon: '../../../assets/images/icons/networks/vk-gradient.svg',
            },
            {
                label: 'instagram',
                icon: '../../../assets/images/icons/networks/instagram-gradient.svg',
            },
            {
                label: 'fb',
                icon: '../../../assets/images/icons/networks/facebook-gradient.svg',
            },
            {
                label: 'youtube',
                icon: '../../../assets/images/icons/networks/youtube-gradient.svg',
            },
            {
                label: 'telegram',
                icon: '../../../assets/images/icons/networks/telegram-gradient.svg',
            },
        ],
        button: {
            type: 'submit',
            className: 'sign-up-forms__form--button', 
            content: 'Войти', 
            eventType: ''
        }
    },
    signUpFields: {
        title: 'Регистрация',
        label: 'sign-up-forms__form--label',
        formName: 'sign-up-forms__form',
        fields: {
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
        },
        networks:  [
            {
                label: 'vk',
                icon: '../../../assets/images/icons/networks/vk-gradient.svg',
            },
            {
                label: 'instagram',
                icon: '../../../assets/images/icons/networks/instagram-gradient.svg',
            },
            {
                label: 'fb',
                icon: '../../../assets/images/icons/networks/facebook-gradient.svg',
            },
            {
                label: 'youtube',
                icon: '../../../assets/images/icons/networks/youtube-gradient.svg',
            },
            {
                label: 'telegram',
                icon: '../../../assets/images/icons/networks/telegram-gradient.svg',
            },
        ],
        button: {
            type: 'submit',
            className: 'sign-up-forms__form--button', 
            content: 'Зарегистрироваться', 
            eventType: ''
        }
    }
}