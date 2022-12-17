export const initialState = {
    signInFields: {
        title: 'Вход',
        formName: 'sign-in',
        fields: {
            user: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'text',
                text: 'Введите ваше имя',
            },
            email: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'email',
                text: 'Введите ваш e-mail',
            },
            password: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'text',
                text: 'Введите пароль',
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
            classname: 'sign-up-forms__form--button', 
            content: 'Войти', 
            eventType: ''
        }
    },
    signUpFields: {
        title: 'Регистрация',
        formName: 'sign-up',
        fields: {
            user: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'text',
                text: 'Введите ваше имя',
            },
            email: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'email',
                text: 'Введите ваш e-mail',
            },
            password: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'text',
                text: 'Введите пароль',
            },
            password: {
                value: '',
                errors: {},
                isTouched: false,
                isValid: false,
                type: 'text',
                text: 'Повторите пароль',
            },
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
            classname: 'sign-up-forms__form--button', 
            content: 'Зарегистрироваться', 
            eventType: ''
        }
    }
}