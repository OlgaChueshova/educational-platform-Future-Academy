import { Component } from '../../../core';
import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './sliderGallery.scss';

export class SliderGallery extends Component {
    constructor() {
        super();
        this.fotos = JSON.parse(this.getAttribute('fotos'));
    }

    static get observedAttributes() {
        return ['fotos', 'title', 'description']
    }

    componentDidMount() {
        const swiperGallery = new Swiper('.swiper-gallery', {
            direction: 'horizontal',
            watchSlidesProgress: true,
            slidesPerView: 6,
            spaceBetween: 20,
            loop: true,

            modules: [Scrollbar],
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
    }

    render() {
        return `
            <div class="slider-gallery">
                <h3 class="gallery__title">${this.props.title}</h3>
                <p class="gallery__text">${this.props.description}</p>
                <div class="swiper swiper-gallery">
                    <div class="swiper-wrapper swiper-gallery__wrapper">
                        ${this.fotos.map((item) => {
                            return `
                                <div class="swiper-slide swiper-gallery__slide"> 
                                    <img src="${item.foto}" alt="${item.label}" class="swiper-gallery__slide--foto">
                                </div>
                            `
                            }).join(' ')}
                        ...
                    </div>
                    <div class="swiper-scrollbar swiper-gallery__scrollbar"></div>s
                </div>
            </div>
        `
    }
}

customElements.define('slider-gallery', SliderGallery)