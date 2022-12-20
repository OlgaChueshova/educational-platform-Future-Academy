import { appRoutes } from '../../../constants/appRoutes';
import * as core from '../../../core';
import { FormManager } from '../../../core';
import { authService } from '../../../services/Auth';
import { Preloader } from '../../atoms';
import { storageService } from '../../../services/Storage';
import './admin.scss'
import { dataBase } from '../../../services/Database';

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
                        dataBase
                            .create('course', {
                                ...data,
                                video: url,
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    });
            })
            .finally(() => {
                this.toggleIsLoading();
            })

    }

    componentDidMount() {
        this.form.init(this.querySelector('.admin-form'), {});
        this.addEventListener('submit', this.form.handleSubmit(this.createCourse))
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
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Название курса</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Подзаголовок</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">Стоимость</span>
                            <input type="text" class="form-control">
                            <span class="input-group-text">руб.</span>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">Срок обучения</span>
                            <input type="text" class="form-control">
                            <span class="input-group-text">мес.</span>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Краткое описание курса</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Содержание курса</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="formFile" class="form-label">Видео</label>
                            <input class="form-control" type="file" id="formFile" name="video">
                        </div>

                      
                        
                        <button type="submit" class="btn btn-primary admin-form__groop--button">Добавить курс</button>
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
                            <label for="formFile" class="form-label">Фото</label>
                            <input class="form-control" type="file" id="formFile">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">ФИО</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>

                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Курс</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Отзыв</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary admin-form__groop--button">Добавить отзыв</button>
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