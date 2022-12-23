import * as core from "../../../core";
import { Form } from "../../molecules";
import { Video } from "../../atoms";
import { InfoList } from "../../molecules";
import { Slider } from "../../molecules/Slider/Slider";
import { SliderGallery } from "../../molecules/SliderGallary/SliderGallery";
import { Owl } from "../../molecules";
import { SliderTeachers } from "../../molecules/SliderTeachers";
import { dataBase } from "../../../services/Database";
import './coursesDetail.scss';

export class CoursesDetailPage extends core.Component {
    constructor() {
        super();
        this.state = {
            isDark: false,
            isLoading: false,
            course: null
        }
        this.fields = [
            {
                type: 'text',
                text: 'Ваше имя',
                clasname: 'form__blank--name',
            },
            {
                type: 'tel',
                text: 'Ваш телефон',
                clasname: 'form__blank--tel',
            },
            {
                type: 'email',
                text: 'Ваш e-mail',
                clasname: 'form__blank--email',
            },
        ];
        this.info = {
            title: "Школа шахмат",
            description: "Шахматы - это отличная идея для времяпрепровождения с родителями, детьми и друзьями. Игра дает полезные в жизни навыки: учит побеждать и проигрыать, развивает творческие способности, вырабатывает стрессоустойчивость, терпение, помогает сосредоточиться, а также помогает осознать последствия своих действий.",
            items: [
                {
                    icon: "../../../assets/images/icons/chess/chess.svg",
                    label: "chess",
                    text: "Интересные уроки по шахматам",
                },
                {
                    icon: "../../../assets/images/icons/chess/family.svg",
                    label: "family",
                    text: "Курсы для взрослых и детей",
                },
                {
                    icon: "../../../assets/images/icons/chess/online-learning.svg",
                    label: "teacher",
                    text: "Обучение онлайн",
                },
                {
                    icon: "../../../assets/images/icons/chess/stars.svg",
                    label: "stars",
                    text: "Профессиональное обучение"
                },
                {
                    icon: "../../../assets/images/icons/chess/chess-competition.svg",
                    label: "chess",
                    text: "Шахматные турниры"
                },
                {
                    icon: "../../../assets/images/icons/chess/counter.svg",
                    label: "counter",
                    text: "Участие в международных конкурсах"
                }
            ]
        };
        this.fotos = [
            {
                foto: "../../../assets/images/foto/foto-gallery-2.jpg",
                label: "foto"
            },
            {
                foto: "../../../assets/images/foto/foto-gallery-4.jpg",
                label: "foto"
            },
            {
                foto: "../../../assets/images/foto/event1.jpg",
                label: "foto"
            },
            {
                foto: "../../../assets/images/foto/event2.jpg",
                label: "foto"
            },
            {
                foto: "../../../assets/images/foto/event3.jpg",
                label: "foto"
            }
        ];
        this.teachers = [
            {
                foto: "../../../assets/images/slider-teachers/teacher4.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                text: "Выпускник Гарвардского университета"
            },
            {
                foto: "../../../assets/images/slider-teachers/teacher3.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                text: "Выпускник Гарвардского университета"
            },
            {
                foto: "../../../assets/images/slider-teachers/teacher2.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                text: "Выпускник Гарвардского университета"
            },
            {
                foto: "../../../assets/images/slider-teachers/teacher1.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                text: "Выпускник Гарвардского университета"
            },
        ];
        this.images = {
            title: [
                {
                    className: 'header-bottom-chess__img--cross',
                    label: 'cross',
                    path: '../../../assets/images/icons/graphic-arts/triangle.svg'
                },
                {
                    className: 'header-bottom-chess__img--triangle',
                    label: 'triangle',
                    path: '../../../assets/images/icons/graphic-arts/triangle.svg'
                },
                {
                    className: 'header-bottom-chess__img--circle',
                    label: 'circle',
                    path: '../../../assets/images/icons/graphic-arts/circle.svg'
                },
                {
                    className: 'header-bottom-chess__img--knight',
                    label: 'knight',
                    path: '../../../assets/images/icons/chess/knight.svg'
                },
                {
                    className: 'header-bottom-chess__img--line1',
                    label: 'line',
                    path: '../../../assets/images/icons/graphic-arts/Vector 1.svg'
                },
                {
                    className: 'header-bottom-chess__img--line2',
                    label: 'line',
                    path: '../../../assets/images/icons/graphic-arts/Vector 1.svg'
                },
                {
                    className: 'header-bottom-chess__img--line3',
                    label: 'line',
                    path: '../../../assets/images/icons/graphic-arts/Vector 4.svg'
                },
                {
                    className: 'header-bottom-chess__img--line4',
                    label: 'line',
                    path: '../../../assets/images/icons/graphic-arts/Vector-5.svg'
                }
            ],
            courseProgramm: [
                {
                    className: 'course-program__art-castle',
                    label: 'castle',
                    path: '../../../assets/images/icons/chess/castle.svg'
                },
                {
                    className: 'course-program__art-bishop',
                    label: 'bishop',
                    path: '../../../assets/images/icons/chess/bishop.svg'
                },
                {
                    className: 'course-program__art-king',
                    label: 'king',
                    path: '../../../assets/images/icons/chess/king.svg'
                },
                {
                    className: 'course-program__art-knight',
                    label: 'knight',
                    path: '../../../assets/images/icons/chess/knight.svg'
                }
            ],
            teachers: [
                {
                    className: 'teachers__circle.svg',
                    label: 'circle',
                    path: '../../../assets/images/icons/graphic-arts/triangle.svg'
                },
                {
                    className: 'teachers__triangle',
                    label: 'triangle',
                    path: '../../../assets/images/icons/graphic-arts/triangle.svg'
                },
                {
                    className: 'teachers__cross',
                    label: 'cross',
                    path: '../../../assets/images/icons/graphic-arts/cross.svg'
                },
                {
                    className: 'teachers__line1',
                    label: 'line',
                    path: '../../../assets/images/icons/graphic-arts/Vector 1.svg'
                },
                {
                    className: 'teachers__line2',
                    label: 'line',
                    path: '../../../assets/images/icons/graphic-arts/video-vector2.svg'
                }
            ],
        };
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !this.state.isLoading,
            }
        })
    }

    static get observedAttributes() {
        return ['id']
    }

    getCourse() {
        this.toggleIsLoading();
        dataBase
          .getDocument("courses", this.props.id)
          .then((data) => {
            this.setState((state) => {
              return {
                ...state,
                course: data,
              };
            });
          })
          .finally(() => {
            this.toggleIsLoading();
          });
      }
    
      componentDidMount() {
        this.getCourse();
      }

    render() {
        
        return `
        <it-header is-dark='${JSON.stringify(this.state.isDark)}'></it-header>

    <main class="course-detail">
        <div class="header-bottom-chess">
            <div class="header-bottom-chess__title">
                <hgroup class="header-bottom-chess__title--group">
                    <h1 class="header-bottom-chess__title--first">Шахматная школа</h1>
                    <h3 class="header-bottom-chess__title--second">Развитие мышления и логики</h4>
                </hgroup>
                <div class="header-bottom-chess__wrapper">
                    <ul class="header-bottom-chess__list">
                        <li class="header-bottom-chess__list--item">Срок обучения:<br>5 лет</li>
                        <li class="header-bottom-chess__list--item">Режим занятий:<br>2 раза в недедю по 2 академических
                            часа</li>
                        <li class="header-bottom-chess__list--item">от 4 350 &#8381 в месяц</li>
                    </ul>
                </div>
                <p class="header-bottom-chess__bonus">1 занятие бесплатное</p>
                <p class="header-bottom-chess__recommendation">Прежде, чем начать обучение, советуем записаться на
                    пробное занятие</p>
                <a href="//" class="header-bottom-chess__button">Записаться на пробное занятие</a>
            </div>
            ${this.images.title.map(({label, path, className}) => {
                return `
                <img class="${className}" src="${path}" alt="${label}">
                `
            }).join(' ')}
        </div>
        <section class="information advantage">
            <info-list 
                title='${this.info.title}'
                description='${this.info.description}' 
                items='${JSON.stringify(this.info.items)}'>
            </info-list>
        </section>
        <section>
            <video-section
                path="../../../assets/video/info-video.mp4"
                poster="../../../assets/images/foto/chess-foto.jpg"
                classname="video__clip"
                iscontrols="true">
            </video-section>
        </section>   
        <section class="registration">
            <div class="registration__content">
                <p class="registration__content--text">Шахматы могут помочь вам планировать наперед, не торопиться с
                    решениями и взвешивать плюсы и минусы.</p>
                <p class="registration__content--text">Шахматами можно наслаждаться в любом возрасте &mdash; тренировка
                    мозга может укреплять ваше здоровье.</p>
            </div>
            <a href="//" class="registration__button">Записаться на курс</a>
        </section>
        <section class="gallery">
            <slider-gallery 
                fotos='${JSON.stringify(this.fotos)}'
                title='Фото наших учеников'
                description='Обеспечиваем индивидуальный подход к учащимся. В основе процесса обучения &mdash; тесное и открытое взаимодействие педагога и ученика.'
            >
            </slider-gallery>
        </section>        
        <section class="course-program">
            <h3 class="course-program__title">Содержание курса</h3>
            <p class="course-program__text">Программа включает в себя изучение истории возникновения игры в шахматы,
                современные тенденции игры в онлайн-шахматы, знакомство со знаменитыми шахматистами прошлого и
                настоящего. Дети знакомятся с фигурами и правилами игры, узнают основные понятия, отрабатывая все в
                игровой практике. Дебют, мителльшпиль, эндшпиль, стратегия и тактика игры, особенности позиции &mdash;
                все это включено в первый год обучения, а пятилетний курс предполагает обучение ребенка до уровня КМС.
            </p>
            <div class="course-program__flex-container">
                <div class="course-program__flex-container--wrapper">
                    <ul class="course-program__list">
                        <li class="course-program__list--item">Срок обучения:<br>5 лет</li>
                        <li class="course-program__list--item">Режим занятий:<br>2 раза в недедю по 2 академических
                            часа</li>
                        <li class="course-program__list--item">от 4 350 &#8381 в месяц</li>
                    </ul><br>
                    <a href="//" class="course-program__button">Записаться на курс</a>
                </div>
                <it-owl 
                    class="course-program__owl" 
                    text="1 занятие бесплатное"
                    class-name="course-program__owl--text">
                </it-owl>
            </div>
            ${this.images.courseProgramm.map(({label, path, className}) => {
                return `
                <img class="${className}" src="${path}" alt="${label}">
                `
            }).join(' ')}
        </section>

        <section  class="teachers">
            <slider-teachers teachers='${JSON.stringify(this.teachers)}'></slider-teachers>
            ${this.images.teachers.map(({label, path, className}) => {
                return `
                <img class="${className}" src="${path}" alt="${label}">
                `
            }).join(' ')}
        </section>
        <section class="form">
            <it-owl class='form__image' 
                title='Помочь с выбором?' 
                text='Оставьте заявку и наши специалисты свяжутся с вами,
                ответят на все вопросы и подберут подходящий вариант обучения.'>
            </it-owl>
            <it-form
            class="form__blank"
                fields='${JSON.stringify(this.fields)}'>
            </it-form>
        </section>
    </main>
                `
    }
}

customElements.define('course-page', CoursesDetailPage)