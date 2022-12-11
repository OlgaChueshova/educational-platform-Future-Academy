import * as core from "../../../core";
import { Form } from "../../molecules";
import { Owl } from "../../molecules/Owl";
import { Catalog } from "../../molecules";
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
        ]
    }
    render() {
        return `
        <main>
        <section class="directions">
            <it-owl class="directions__image owl" 
                title="Кем вы хотите стать?" 
                text="Пора найти себя и выбрать подходящий курс:)" 
                lastword= "Удачи!">
            </it-owl>
        <it-catalog courses='${JSON.stringify(this.courses)}'></it-catalog>
        </section>

        <section class="video">
            <button type="button" class="video__btn"></button>
            <div class="video__background">
                <video src="./video/info-video.mp4" poster="./images/foto/info-video.jpg" class="video__clip"></video>
            </div>
            <img src="./images/icons/graphic-arts/video-triangle.svg" alt="triangle" class="video__triangle">
            <img src="./images/icons/graphic-arts/video-cross.svg" alt="cross" class="video__cross">
            <img src="./images/icons/graphic-arts/video-vector1.svg" alt="vector" class="video__vector--big">
            <img src="./images/icons/graphic-arts/video-vector2.svg" alt="vector" class="video__vector--little">
        </section>
        <section class="information">
            <h4 class="information__title">Актуальные знания от признанных экспертов рынка <br> для новичков и
                практикующих специалистов.</h4>
            <ul class="information__list">
                <li class="information__list--item">
                    <a href="//" class="information__list--link">
                        <svg width="188" height="105" xmlns="http://www.w3.org/2000/svg">
                            <text class="svg-course" x="0" y="80">600</text>
                        </svg>
                        <br>
                        Курсов</a>
                </li>
                <li class="information__list--item">
                    <a href="//" class="information__list--link">
                        <svg width="116" height="105" xmlns="http://www.w3.org/2000/svg">
                            <text class="svg-course" x="0" y="80">82</text>
                        </svg>
                        <br>
                        Ведущих<br>преподавателей</a>
                </li>
                <li class="information__list--item">
                    <a href="//" class="information__list--link">
                        <svg width="385" height="105" xmlns="http://www.w3.org/2000/svg">
                            <text class="svg-course" x="0" y="80">14 795</text>
                        </svg>
                        <br>
                        Выпускников</a>
                </li>
            </ul>
        </section>
        <section class="information-menu">
            <ul class="information-menu__list">
                <li class="information-menu__list--item information-menu__list--item-open-day">
                    <hgroup>
                        <h4><span>25</span><br>ноября</h4>
                        <div>
                            <h4>День открытых дверей</h4>
                            <p>Приглашаем всех желающих на бесплатную экскурсию<br>в мир востребованных профессий и
                                полезных навыков</p>
                        </div>
                        <a href="//" class="information-menu__list--link-btn">
                            <span>Записаться</span>
                            <img src="./images/icons/pointer-right.svg" alt="right">
                        </a>
                    </hgroup>
                </li>
                <li class="information-menu__list--item information-menu__list--item-programs">
                    <h4>Программы обучения</h4>
                    <p>В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить
                        практические знания, которые помогут получить работу мечты</p>
                    <a href="//" class="information-menu__list--link-btn">
                        <span>Подробнее</span>
                        <img src="./images/icons/pointer-right.svg" alt="right">
                    </a>
                </li>
                <li class="information-menu__list--item information-menu__list--item-news">
                    <a href="//" class="information-menu__list--link">
                        <h4>Новости академии</h4>
                    </a>
                </li>
                <li class="information-menu__list--item information-menu__list--item-IT-world">
                    <a href="//" class="information-menu__list--link">
                        <h4>Мир IT</h4>
                    </a>
                </li>
                <li class="information-menu__list--item information-menu__list--item-test">
                    <a href="//" class="information-menu__list--link">
                        <h4>Попробуй!</h4>
                        <p>Пройдите тест и узнайте свои способности в сфере информационных технологий</p>
                    </a>
                </li>
            </ul>
        </section>
        <section class="slider-reviews">
            <h3 class="slider-review__title">Отзывы наших студентов</h3>
            <div class="swiper swiper-reviews">
                <div class="swiper-wrapper swiper-reviews__wrapper">
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto1.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Velit, rem quos ipsum nostrum sequi nulla obcaecati a delectus cupiditate maxime est
                                deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis
                                molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat
                                praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto2.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit. Numquam sit nemo aperiam dolore dicta corrupti, harum sequi. Labore doloremque
                                cumque nulla suscipit cupiditate.
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto3.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Velit, rem quos ipsum nostrum sequi nulla obcaecati a delectus cupiditate maxime est
                                deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis
                                molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat
                                praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto4.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Repellendus labore alias fuga autem deleniti beatae dolore. Laborum eaque odio
                                illum rem veritatis ullam ipsum ipsa. Ducimus quam totam enim natus.
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto5.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Velit, rem quos ipsum nostrum sequi nulla obcaecati a delectus cupiditate maxime est
                                deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis
                                molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat
                                praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto6.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Assumenda perspiciatis deleniti repudiandae eaque nemo, ratione incidunt iusto
                                sint sit inventore minima soluta nostrum, atque aspernatur.
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto4.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Velit, rem quos ipsum nostrum sequi nulla obcaecati a delectus cupiditate maxime est
                                deleniti quis doloremque culpa, consequuntur dolorum quisquam itaque quaerat reiciendis
                                molestiae laborum placeat ratione. Necessitatibus nostrum sint rem debitis, repellat
                                praesentium assumenda eligendi. Exercitationem rerum ipsum consequuntur quos officia?
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto3.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Quasi at veritatis saepe aliquam inventore quod deleniti harum earum nam ea?
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-reviews__slide">
                        <div class="swiper-reviews__slide-wrapper">
                            <div class="swiper-review__slide--personal-data">
                                <img src="./images/swiper/foto5.svg" alt="foto">
                                <p><span>Имя Фамилия</span><br>
                                    Студент курса WEB-<br>разработчик</p>
                            </div>
                            <p class="swiper-review__slide--text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Voluptatibus voluptas maxime, explicabo perspiciatis eaque molestias corporis ipsa
                                ad distinctio eum itaque illo. Earum quod modi, reprehenderit sunt veniam ipsum alias
                                impedit, nisi minus fugiat dolorem nam excepturi voluptatibus assumenda error
                                repudiandae. Quibusdam suscipit distinctio eius sit voluptatum ullam temporibus.
                                Repellat?
                            </p>
                            <div class="swiper-reviews__slide--like">
                                <img src="./images/swiper/Star 1.svg" alt="star">
                                <span>4,87/5</span>
                            </div>
                        </div>
                    </div>
                    ...
                </div>
                <div class="swiper-scrollbar swiper-reviews__scrollbar"></div>
            </div>
        </section>
        <section class="advantage">
            <h4 class='advantage__title'>Добро пожаловать в Академию будущего ХОД</h4>
            <ul class='advantage__list'>
                <li class="advantage__list--item">
                    <img src="./images/icons/server.svg" alt="just some image" class="advantage__list--item-img"><br>
                    <a href="//" class="advantage__list--link">Передовой подход<br>к образовательному<br>процессу</a>
                </li>
                <li class="advantage__list--item">
                    <img src="./images/icons/book.svg" alt="book" class="advantage__list--item-img"><br>
                    <a href="//" class="advantage__list--link">Непрерывное<br>усовершенствование<br>и пополнение базы
                        курсов</a>
                </li>
                <li class="advantage__list--item">
                    <img src="./images/icons/teacher.svg" alt="teacher" class="advantage__list--item-img"><br>
                    <a href="//" class="advantage__list--link">Только практикующие<br>преподаватели</a>
                </li>
                <li class="advantage__list--item">
                    <img src="./images/icons/boy.svg" alt="teacher" class="advantage__list--item-img"><br>
                    <a href="//" class="advantage__list--link">Сопровождение на всех<br>этапах. От начала обучения<br>до
                        трудоустройства</a>
                </li>
            </ul>
        </section>
        <section class="form">
            <it-owl class='form__image' 
                title='Помочь с выбором?' 
                text='Оставьте заявку и наши специалисты свяжутся с вами,
                ответят на все вопросы и подберут подходящий вариант обучения.'>
            </it-owl>
            <it-form></it-form>
        </section>
        <svg width="385" height="105" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="LG1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#F7941D" />
                <stop offset="100%" stop-color="#27AAE1" />
            </linearGradient>
        </svg>
        <svg width="385" height="105" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="LG2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#F7941D" />
                <stop offset="100%" stop-color="#27AAE1" />
            </linearGradient>
        </svg>
    </main>
                `
    }
}

customElements.define('home-page', HomePage)