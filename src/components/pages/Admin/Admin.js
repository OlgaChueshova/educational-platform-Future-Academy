import { appRoutes } from '../../../constants/appRoutes';
import * as core from '../../../core';
import { FormManager } from '../../../core';
import { authService } from '../../../services/Auth';
import { Preloader } from '../../atoms';
import { storageService } from '../../../services/Storage';
import { dataBase } from '../../../services/Database';
import { appCourses } from '../../../constants/appCourses';
import { Validator } from '../../../core';
import { initialCoursesState } from './initialCoursesState';
import { signUpInput } from '../../atoms';
import { TextArea } from '../../atoms/Textarea/Textarea';
import './admin.scss'

export class AdminPage extends core.Component {
    constructor() {
        super();
        this.state = {
            isDark: true,
            isloading: false,
            error: '',
            courseFields: {
                ...initialCoursesState
            },
            reviewsFields: {},
            attributes: {
                title: {
                    type: 'text',
                    controlName: 'title',
                    classNameGroup: 'input-group mb-3',
                    spanGroup: 'Название курса'
                },
                subtitle: {
                    type: 'text',
                    controlName: 'subtitle',
                    classNameGroup: 'input-group mb-3',
                    spanGroup: 'Подзаголовок'
                },
                price: {
                    type: 'text',
                    controlName: 'price',
                    classNameGroup: 'input-group mb-3',
                    spanGroup: 'Стоимость',
                    spanGroup2: 'руб.',
                },
                ageGroup: {
                    type: 'text',
                    controlName: 'ageGroup',
                    classNameGroup: 'input-group mb-3',
                    label: 'Возрастная категория',
                    select: appCourses.ageGroup
                },
                durationGroup: {
                    type: 'text',
                    controlName: 'durationGroup',
                    classNameGroup: 'input-group mb-3',
                    label: 'Продолжительность курса',
                    select: appCourses.durationGroup
                },
                description: {
                    type: 'text',
                    controlName: 'description',
                    classNameGroup: 'mb-3',
                    label: 'Краткое описание курса',
                    textarea: 'textarea'
                },
                content: {
                    type: 'text',
                    controlName: 'content',
                    classNameGroup: 'mb-3',
                    label: 'Содержание курса',
                    textarea: 'textarea'
                },
                video: {
                    type: 'file',
                    controlName: 'video',
                    classNameGroup: 'mb-3',
                    label: 'Видео',
                },
                foto: {
                    type: 'file',
                    controlName: 'foto',
                    classNameGroup: 'mb-3',
                    label: 'Главное фото',
                }
            }
        }

        this.form = new FormManager();
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !this.state.isLoading,
            }
        })
    }

    createCourse = (data) => {
        this.toggleIsLoading();
        storageService.uploadVideo(data.video)
            .then((snapshot) => {
                storageService.getDownloadURL(snapshot.ref)
                    .then((url) => {
                        storageService.uploadFoto(data.foto)
                            .then((snapshot) => {
                                storageService.getDownloadURL(snapshot.ref)
                                    .then((url2) => {
                                        dataBase
                                            .create('courses', {
                                                ...data,
                                                video: url,
                                                foto: url2
                                            })
                                            .catch((error) => {
                                                console.log(error);
                                            });
                                    })
                            })
                    });
            })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    validate = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                courseFields: {
                    ...state.courseFields,
                    ...evt.detail,
                }
            }
        });
    }

    validateForm = (evt) => {
        if (evt.target.closest('.send-course')) {
            this.form.init(evt.target.closest('.send-course'), {
                title: [
                    Validator.required("Поле не должно быть пустым")
                ],
                subtitle: [
                    Validator.required("Поле не должно быть пустым")
                ],
                price: [
                    Validator.required("Поле не должно быть пустым")
                ],
            });
        }
    }

    componentDidMount() {
        if (!authService.user) {
            this.dispatch('change-route', { target: appRoutes[this.props.path ?? 'signUp'] });
        }
        this.addEventListener('click', this.validateForm);
        this.addEventListener('validate-controlls', this.validate);
        this.addEventListener('submit', this.form.handleSubmit(this.createCourse));
    }

    componentWillUnmount() {
        this.removeEventListener('validate-controlls', this.validate);
    }

    render() {
        return `
            <it-header 
                class="header-dark" 
                is-dark='${JSON.stringify(this.state.isDark)}'>
            </it-header>

            <main class="admin">
                <ul>
                <li>   
                ${this.state.isLoading
                ? `<it-preloader is-loading="${this.state.isLoading}" class="preloader"></it-preloader>`
                : `
                    <form class='admin-form send-course'>
                        <fieldset class="admin-form__groop mb-5">
                            <legend class="admin-form__groop--title mb-5">Содержание страницы курса</legend>
                            ${Object.keys(this.state.courseFields).map((key) => {
                    return `
                                    ${this.state.attributes[key].textarea
                            ? `
                                            <it-textarea
                                                validate-attr='${JSON.stringify(this.state.courseFields[key])}'
                                                attributes='${JSON.stringify(this.state.attributes[key])}'
                                            >
                                            </it-textarea>
                                        `
                            : `
                                            ${this.state.attributes[key].select
                                ? `
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text">${this.state.attributes[key].label}</span>
                                                    <select class="form-select" name="${this.state.attributes[key].controlName}">
                                                            ${this.state.attributes[key].select.map((item) => {
                                    return `<option value="${item.value}">${item.label}</option>`
                                }).join(' ')}
                                                    </select>
                                                </div>
                                                `
                                : `
                                                    <sign-up-input
                                                        value='${this.state.courseFields[key].value}'
                                                        type='${this.state.attributes[key].type}'
                                                        control-name='${this.state.attributes[key].controlName}'
                                                        is-valid='${this.state.courseFields[key].isValid}'
                                                        is-touched='${this.state.courseFields[key].isTouched}'
                                                        error-message='${this.state.courseFields[key].errors?.message}'
                                                        label='${this.state.attributes[key].label ?? ''}'
                                                        span-group='${this.state.attributes[key].spanGroup ?? ''}'
                                                        span-group-2='${this.state.attributes[key].spanGroup2 ?? ''}'
                                                        class-name-group='${this.state.attributes[key].classNameGroup}'
                                                        multiple='${this.state.attributes[key].multiple ?? ''}'
                                                    >
                                                    </sign-up-input>  
                                                `
                            }
                                        `
                        }`
                }).join(' ')}
                            <button type="submit" class="btn admin-form__groop--button">Добавить курс</button>
                        </fieldset>
                    </form>  
                `
            }
                </li>
                <li>
                ${this.state.isLoading
                ? `<it-preloader is-loading="${this.state.isLoading}" class="preloader"></it-preloader>`
                : `
                        <form class="admin-form send-review">
                        <fieldset class="admin-form__groop">
                            <legend class="admin-form__groop--title">Отзывы студентов</legend>
                            <div class="mb-3">
                                <label for="fotoFile" class="form-label">Фото</label>
                                <input name="foto" class="form-control" type="file" id="fotoFile">
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">ФИО</span>
                                <input name="name" type="text" class="form-control">
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Курс</span>
                                <input name="course-name" type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="textarea3" class="form-label">Отзыв</label>
                                <textarea name="review" class="form-control" id="textarea3" rows="3"></textarea>
                            </div>      
                            <button type="submit" class="btn admin-form__groop--button">Добавить отзыв</button>
                        </fieldset>
                    </form>       
                            `
            }
                </li>
                </ul>
                <img class="admin__img--cross" src="../../../assets/images/icons/graphic-arts/cross.svg" alt="cross">
                <img class="admin__img--cross--little" src="../../../assets/images/icons/graphic-arts/cross.svg" alt="cross">
                <img class="admin__img--circle" src="../../../assets/images/icons/graphic-arts/circle.svg" alt="circle">
                <img class="admin__img--triangle" src="../../../assets/images/icons/graphic-arts/triangle.svg" alt="triangle">
                <img class="admin__img--line1" src="../../../assets/images/icons/graphic-arts/Vector 1.svg" alt="line">
                <img class="admin__img--line2" src="../../../assets/images/icons/graphic-arts/Vector-5.svg" alt="line">
            </main>
            `
    }
}

customElements.define('admin-page', AdminPage)


// sliderFotos: {
//     type: 'file',
//     controlName: 'fotos',
//     classNameGroup: 'mb-3',
//     label: 'Фото для слайдера',
//     multiple: 'multiple'
// },
// ,
//     sliderFotos: {
//         value: '',
//         errors: {},
//         isTouched: false,
//         isValid: false,
//     },