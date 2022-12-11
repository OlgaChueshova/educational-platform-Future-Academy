import { Component } from '../../../core';
import './slider.scss';

export class Slider extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('reviews'))
    }

    static get observedAttributes() {
        return ['reviews']
    }

    componentDidMount() {
        const swiper = new Swiper('.swiper-reviews', {
            direction: 'horizontal',
            watchSlidesProgress: true,
            slidesPerView: 6,
            spaceBetween: 20,
            loop: true,
          
            scrollbar: {
              el: '.swiper-scrollbar',
              draggable: true,
            },
          });
    }

    render() {
        return `
            <div>
                <h3 class="slider-review__title">Отзывы наших студентов</h3>
                <div class="swiper swiper-reviews">
                    <div class="swiper-wrapper swiper-reviews__wrapper">
                        ${this.props.map((item) => {
                            return `
                                <div class="swiper-slide swiper-reviews__slide">
                                    <div class="swiper-reviews__slide-wrapper">
                                        <div class="swiper-review__slide--personal-data">
                                            <img src="${item.foto}" alt="${item.label}">
                                            <p><span>${item.personalName}</span><br>${item.courseName}</p>
                                        </div>
                                        <p class="swiper-review__slide--text">${item.text}</p>
                                        <div class="swiper-reviews__slide--like">
                                            <img src="../../../assets/images/swiper/Star 1.svg" alt="star">
                                            <span>${item.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            `
                        })}
                        ...
                    </div>
                    <div class="swiper-scrollbar swiper-reviews__scrollbar"></div>
                </div>
            </div>
        `
    }
}

customElements.define('it-slider', Slider)