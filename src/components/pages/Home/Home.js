import * as core from "../../../core";
import { Form } from "../../molecules";
import { Owl } from "../../molecules/Owl";
import { Catalog } from "../../molecules";
import { VideoSection } from "../../molecules";
import { InfoList } from "../../molecules";
import { GridMenu } from "../../molecules";
import { Gradient } from "../../molecules";
import { Header } from "../../organizms";
import { Slider } from "../../molecules/Slider/Slider";
import './home.scss'

export class HomePage extends core.Component {
    constructor() {
        super();
        this.courses = [
            {
                title: "Дети",
                label: "Children",
                description: '8 &mdash; 14 лет',
                path: '//',
                icon: '../../../assets/images/icons/children.svg',
                coursesList: [
                    {
                        title: "Робототехника",
                        path: "*"
                    },
                    {
                        title: "Создание игр",
                        path: "*"
                    },
                    {
                        title: "3D-моделирование",
                        path: "*"
                    },
                    {
                        title: "Техномейкерство",
                        path: "*"
                    },
                    {
                        title: "WEB-разработка",
                        path: "*"
                    },
                    {
                        title: "Мультимедиа",
                        path: "*"
                    },
                    {
                        title: "Шахматы",
                        path: "*"
                    },
                    {
                        title: "3D-моделирование и дизайн",
                        path: "*"
                    },
                    {
                        title: "Английский язык",
                        path: "*"
                    },
                    {
                        title: "Блогинг",
                        path: "*"
                    },
                    {
                        title: "Soft skills",
                        path: "*"
                    },
                ]
            },
            {
                title: "Подростки",
                label: "Children",
                path: '//',
                description: '14 &mdash; 18 лет',
                icon: '../../../assets/images/icons/children1.svg',
                coursesList: [
                    {
                        title: "Робототехника",
                        path: "*"
                    },
                    {
                        title: "Дизайн",
                        path: "*"
                    },
                    {
                        title: "3D-моделирование",
                        path: "*"
                    },
                    {
                        title: "Техномейкерство",
                        path: "*"
                    },
                    {
                        title: "Программирование и Game Dev",
                        path: "*"
                    },
                    {
                        title: "WEB-технологии",
                        path: "*"
                    },
                    {
                        title: "Computer science",
                        path: "*"
                    },
                    {
                        title: "Блогинг",
                        path: "*"
                    },
                    {
                        title: "Soft skills",
                        path: "*"
                    },
                ]
            },
            {
                title: "Взрослые",
                label: 'peaple',
                path: '//',
                description: '18 &mdash;75 лет',
                icon: '../../../assets/images/icons/family.svg',
                coursesList: [
                    {
                        title: "Тестирование ПО",
                        path: "*"
                    },
                    {
                        title: "Разработка на Node.js",
                        path: "*"
                    },
                    {
                        title: "Разработка WEB-приложений на Python",
                        path: "*"
                    },
                    {
                        title: "Разработка WEB-приложений на PHP",
                        path: "*"
                    },
                    {
                        title: "Курсы создания сайтов и Front-End разработки",
                        path: "*"
                    },
                    {
                        title: "Разработка игр на Unity",
                        path: "*"
                    },
                    {
                        title: "Английский язык для IT",
                        path: "*"
                    },
                    {
                        title: "Бизнес-анализ",
                        path: "*"
                    },
                    {
                        title: "WEB-дизайн и компьютерная графика",
                        path: "*"
                    },
                ]
            },
        ];
        this.numbers = {
            title: "Актуальные знания от признанных экспертов рынка<br>для новичков и практикующих специалистов.",
            items: [
                {
                    image: 600,
                    text: "Курсов"
                },
                {
                    image: 82,
                    text: "Ведущих<br>преподавателей"
                },
                {
                    image: 14795,
                    text: "Выпускников"
                }
            ]
        };
        this.positiveSign = {
            title: "Добро пожаловать в Академию будущего ХОД",
            items: [
                {
                    icon: "../../../assets/images/icons/server.svg",
                    label: "just some image",
                    text: "Передовой подход к образовательному<br>процессу",
                },
                {
                    icon: "../../../assets/images/icons/book.svg",
                    label: "book",
                    text: "Непрерывное усовершенствование и пополнение базы курсов",
                },
                {
                    icon: "../../../assets/images/icons/teacher.svg",
                    label: "teacher",
                    text: "Только практикующие преподаватели",
                },
                {
                    icon: "../../../assets/images/icons/boy.svg",
                    label: "boy",
                    text: "Сопровождение на всех этапах. От начала обучения до трудоустройства"
                }
            ]
        };
        this.windows = [
            {
                title: "День открытых дверей",
                clasname: "information-menu__list--item-open-day",
                data: "24",
                month: "ноября",
                description: "Приглашаем всех желающих на бесплатную экскурсию<br>в мир востребованных профессий и полезных навыков",
                link: {
                    title: "Записаться",
                    clasname: "information-menu__list--link-btn",
                    icon: "../../../assets/images/icons/pointer-right.svg",
                    label: "right",
                    path: "*"
                }

            },
            {
                title: "Программы обучения",
                description: "В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты",
                icon: "../../../assets/images/icons/monitor.svg",
                label: "monitor",
                link: {
                    title: "Подробнее",
                    clasname: "information-menu__list--link-btn",
                    icon: "../../../assets/images/icons/pointer-right.svg",
                    label: "right",
                    path: "*"
                }
            },
            {
                title: "Новости академии",
                icon: "../../../assets/images/icons/newspaper.svg",
                label: "newspaper",
                path: "*"
            },
            {
                title: "Мир IT",
                icon: "../../../assets/images/icons/diagram.svg",
                label: "diagram",
                path: "*"
            },
            {
                title: "Попробуй!",
                description: "Пройдите тест и узнайте свои способности в сфере информационных технологий",
                icon: "../../../assets/images/icons/choice.svg",
                label: "choice",
                path: "*"
            }
        ];
        this.reviews = [
            {
                foto: "../../../assets/images/swiper/foto1.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                courseName: "Студент курса WEB-<br>разработчик",
                text: "Lorem ipsum , rem quos ipsum nostrum sequi nulla obcaecati est deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?",
                rating: "4,87/5"
            },
            {
                foto: "../../../assets/images/swiper/foto2.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                courseName: "Студент курса WEB-<br>разработчик",
                text: "Lorem ipsum dolor sit amet consectetur, consequuntur dolorum quisquam itaque quaerat reiciendis molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?",
                rating: "4,87/5"
            },
            {
                foto: "../../../assets/images/swiper/foto3.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                courseName: "Студент курса WEB-<br>разработчик",
                text: "Lorem ipsum dolor sit obcaecati a delectus cupiditate maxime est deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?",
                rating: "4,87/5"
            },
            {
                foto: "../../../assets/images/swiper/foto4.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                courseName: "Студент курса WEB-<br>разработчик",
                text: "Lorem ipsum dolor sit amet consectetur delectus cupiditate maxime est deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?",
                rating: "4,87/5"
            },
            {
                foto: "../../../assets/images/swiper/foto5.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                courseName: "Студент курса WEB-<br>разработчик",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem quos ipsum nostrum sequi nulla obcaecati a delectus cupiditate maxime est deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?",
                rating: "4,87/5"
            },
            {
                foto: "../../../assets/images/swiper/foto6.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                courseName: "Студент курса WEB-<br>разработчик",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem quos ipsum nostrum sequi nulla obcaecati a delectus cupiditate maxime est deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?",
                rating: "4,87/5"
            },
            {
                foto: "../../../assets/images/swiper/foto4.svg",
                label: "foto",
                personalName: "Имя Фамилия",
                courseName: "Студент курса WEB-<br>разработчик",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem quos ipsum nostrum sequi nulla obcaecati a delectus cupiditate maxime est deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?",
                rating: "4,87/5"
            },
        ]
    }

    render() {
        return `
        <it-header></it-header>
        <main>
            <section class="header-bottom">
                <div class="header-bottom__title">
                    <hgroup class="header-bottom__title--group">
                        <h1 class="header-bottom__title--first">Образовательная платформа<br><span>ХОД Future Academy</span>
                        </h1>
                        <h4 class="header-bottom__title--second">Актуальные знания для новичков и профессионалов</h4>
                    </hgroup>
                </div>
                <img class="header-bottom__img--cross" src="../../../assets/images/icons/graphic-arts/cross.svg" alt="cross">
                <img class="header-bottom__img--cross--little" src="../../../assets/images/icons/graphic-arts/cross.svg" alt="cross">
                <img class="header-bottom__img--circle" src="../../../assets/images/icons/graphic-arts/circle.svg" alt="circle">
                <img class="header-bottom__img--triangle" src="../../../assets/images/icons/graphic-arts/triangle.svg" alt="triangle">
                <img class="header-bottom__img--line1" src="../../../assets/images/icons/graphic-arts/Vector 1.svg" alt="line">
                <img class="header-bottom__img--line2" src="../../../assets/images/icons/graphic-arts/Vector-5.svg" alt="line">
                <img class="header-bottom__img--line4" src="../../../assets/images/icons/graphic-arts/Vector 4.svg" alt="line">
            </section>

            <section class="directions">
                <it-owl class="directions__image owl" 
                    title="Кем вы хотите стать?" 
                    text="Пора найти себя и выбрать подходящий курс:)" 
                    lastword= "Удачи!">
                </it-owl>
                <it-catalog 
                    courses='${JSON.stringify(this.courses)}' 
                    clasname="directions__navigation">
                </it-catalog>
            </section>

            <section>
                <video-section
                    path="../../../assets/video/info-video.mp4"
                    poster="../../../assets/images/foto/info-video.jpg"
                    classname="video__clip"
                    iscontrols="true"
                >
                </video-section>
            </section>

            <section class="information">
                <info-list title='${this.numbers.title}' items='${JSON.stringify(this.numbers.items)}'></info-list>
            </section>

            <section class="information-menu">
                <grid-menu windows='${JSON.stringify(this.windows)}'></grid-menu>
            </section>

            <section>
                <it-slider reviews='${JSON.stringify(this.reviews)}'></it-slider>
            </section>

            <section class="information advantage">
                <info-list 
                    title='${this.positiveSign.title}' 
                    items='${JSON.stringify(this.positiveSign.items)}'
                >
                </info-list>
            </section>

            <section class="form">
                <it-owl class='form__image' 
                    title='Помочь с выбором?' 
                    text='Оставьте заявку и наши специалисты свяжутся с вами,
                    ответят на все вопросы и подберут подходящий вариант обучения.'>
                </it-owl>
                <it-form></it-form>
            </section>
            <it-gradient></it-gradient>
        </main>
                `
    }
}

customElements.define('home-page', HomePage)