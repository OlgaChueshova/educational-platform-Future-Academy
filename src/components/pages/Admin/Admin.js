import { appRoutes } from '../../../constants/appRoutes';
import * as core from '../../../core';
import { FormManager } from '../../../core';
import { authService } from '../../../services/Auth';
import { Preloader } from '../../atoms';
import { storageService } from '../../../services/Storage';
import { dataBase } from '../../../services/Database';
import { appCourses } from '../../../constants/appCourses';
import { Validator } from '../../../core';
import './admin.scss'

export class AdminPage extends core.Component {
    constructor() {
        super();
        this.state = {
            isDark: true,
            isloading: false
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
                        console.log(url)
                        storageService.uploadFoto(data.fotos)
                            .then((snapshots) => {
                                storageService.getDownloadURL(snapshots.ref)
                                    .then((urls) => {
                                        console.log(urls)
                                        dataBase
                                            .create('courses', {
                                                ...data,
                                                video: url,
                                                fotos: [...urls]
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

    componentDidMount() {
        this.addEventListener('click', (evt) => {
            const formCourse = evt.target.closest('.send-course');
            if (formCourse) {
                this.form.init(formCourse, {
                    title: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                    subtitle: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                    price: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                    duration: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                    ageGroup: [
                        Validator.required("Выберите один из вариантов")
                    ],
                    durationGroup: [
                        Validator.required("Выберите один из вариантов")
                    ],
                    description: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                    content: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                    video: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                    fotos: [
                        Validator.required("Поле не должно быть пустым")
                    ],
                });
                formCourse.addEventListener('validate-controlls', )
                this.form.handleSubmit(this.createCourse);
            }
        });
        if (!authService.user) {
            this.dispatch('change-route', { target: appRoutes[this.props.path ?? 'signUp'] });
        }
    }

    render() {
        return `
            <it-header 
                class="header-dark" 
                is-dark='${JSON.stringify(this.state.isDark)}'>
            </it-header>

            <main class="admin">
                <div>
                    ${this.state.isLoading
                ? `<it-preloader is-loading="${this.state.isLoading}" class="preloader"></it-preloader>`
                : `
                    <form class='admin-form send-course'>
                    <fieldset class="admin-form__groop">
                        <legend class="admin-form__groop--title">Содержание страницы курса</legend>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Название курса</span>
                            <input name="title" type="text" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Подзаголовок</span>
                            <input name="subtitle" type="text" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Стоимость</span>
                            <input name="price" type="text" class="form-control">
                            <span class="input-group-text">руб.</span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Срок обучения</span>
                            <input name="duration" type="text" class="form-control">
                            <span class="input-group-text">мес.</span>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">Возрастная категория</span>
                            <select class="form-select" name="ageGroup">
                                <option selected></option>
                                ${appCourses.ageGroup.map((item) => {
                                    return `<option value="${item.value}">${item.label}</option>`
                                    }).join(' ')}
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Продолжительность курса</span>
                            <select class="form-select" name="durationGroup">
                                <option selected></option>
                                ${appCourses.duration.map((item) => {
                                    return `<option value="${item.value}">${item.label}</option>`
                                    }).join(' ')}
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Краткое описание курса</label>
                            <textarea name="description" class="form-control" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Содержание курса</label>
                            <textarea name="content" class="form-control" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="videoFile" class="form-label">Видео</label>
                            <input name="video" class="form-control" type="file" id="videoFile">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Фото для слайдера</label>
                            <input name="fotos" class="form-control" type="file" multiple>
                        </div>
                        <button type="submit" class="btn admin-form__groop--button send-course-btn">Добавить курс</button>
                    </fieldset>
                </form>       

                        `
            }

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
                </div>
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