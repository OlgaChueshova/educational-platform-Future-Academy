import { Component } from '../../../core';
import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './sliderTeachers.scss';

export class SliderTeachers extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('teachers'))
    }

    static get observedAttributes() {
        return ['teachers']
    }

    componentDidMount() {
        const swiperTeachers = new Swiper('.swiper-teachers', {
            direction: 'horizontal',
            watchSlidesProgress: true,
            slidesPerView: 6,
            spaceBetween: 20,
            loop: false,

            modules: [Scrollbar],
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
    }

    render() {
        return `
            <div>
                <h3 class="slider-teachers__title">Наши преподаватели</h3>
                <div class="swiper swiper-teachers">
                    <div class="swiper-wrapper swiper-teachers__wrapper">
                        ${this.props.map((item) => {
                            return `
                                <div class="swiper-slide swiper-teachers__slide">
                                    <div class="swiper-teachers__slide-wrapper">
                                        <div class="swiper-teachers__slide--foto-bg">
                                            <img src="${item.foto}" alt="${item.label}"
                                                class="swiper-teachers__slide--foto">
                                        </div>
                                        <p class="swiper-teachers__slide--personal-name">${item.personalName}</p>
                                        <p class="swiper-teachers__slide--text">${item.text}</p>
                                    </div>
                                </div>
                            `
                            }).join(' ')}
                        ...
                    </div>
                    <div class="swiper-scrollbar swiper-teachers__scrollbar"></div>
                </div>
            </div>
        `
    }
}

customElements.define('slider-teachers', SliderTeachers)