import * as core from "../../../core";
import { Form } from "../../molecules";
import { Owl } from "../../molecules/Owl";
import './home.scss'

export class HomePage extends core.Component {
    render() {
        return `
        <main>
        <section class="directions">
            <div class="directions__image owl">
                <img src="../../../assets/images/owl/owl.svg" alt="owl" class="owl__img">
                <div class="owl__text">
                    <p>Кем вы хотите стать?</p><br>
                    <p>Пора найти себя и выбрать подходящий курс:)</p><br>
                    <p>Удачи!</p>
                </div>
            </div>
            <nav class="directions__navigation course-catalog">
                <ul class="course-catalog__list">
                    <li
                        class="course-catalog__list--item course-catalog__list--item-active course-catalog__list--children">
                        <a class="course-catalog__list--link">
                            Дети<br>
                            <span>8 &mdash; 14 лет</span>
                        </a>
                        <ul class="course-catalog__subMenu course-catalog__subMenu--children">
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Робототехника</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Создание игр</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">WEB-разработка</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Мультимедиа</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Шахматы</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">3D-моделирование и дизайн</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Английский язык</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Блогинг</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Soft skills</a>
                            </li>
                        </ul>
                    </li>
                    <li class="course-catalog__list--item course-catalog__list--children1">
                        <a class="course-catalog__list--link">
                            Дети<br>
                            <span>14 &mdash; 18 лет</span>
                        </a>
                        <ul class="course-catalog__subMenu course-catalog__subMenu--children1">
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Робототехника</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Дизайн</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">3D-моделирование</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Техномейкерство</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Программирование и Game Dev</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">WEB-технологии</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Computer science</a>
                            </li>
                        </ul>
                    </li>
                    <li class="course-catalog__list--item course-catalog__list--family">
                        <a class="course-catalog__list--link">
                            Взрослые<br>
                            <span>18 &mdash;75 лет</span>
                        </a>
                        <ul class="course-catalog__subMenu course-catalog__subMenu--family">
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Тестирование ПО</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Разработка на Node.js</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Разработка WEB-приложений на
                                    Python</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Разработка WEB-приложений на PHP</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Курсы создания сайтов и Front-End
                                    разработки</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Разработка игр на Unity</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Английский язык для IT</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">Бизнес-анализ</a>
                            </li>
                            <li class="course-catalog__subMenu--item">
                                <a href="//" class="course-catalog__subMenu--link">WEB-дизайн и компьютерная графика</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
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
            <it-owl class='form__image'></it-owl>
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