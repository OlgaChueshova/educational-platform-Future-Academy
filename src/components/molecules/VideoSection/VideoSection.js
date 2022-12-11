import { Component } from '../../../core';
import { Video } from '../../atoms';
import { Button } from '../../atoms';
import './videoSection.scss';

export class VideoSection extends Component {

    static get observedAttributes() {
        return ['path', 'poster', 'classname', 'iscontrols']
    }

    render() {
        return `
            <div  class="video">
                <it-button 
                    type="button" 
                    clasname="video__btn" 
                    img="../../../assets/images/buttons/round-button.svg"
                    eventType="">
                </it-button>
                <it-video props='${JSON.stringify(this.props)}'></it-video>
                <img src="../../../assets/images/icons/graphic-arts/video-triangle.svg" alt="triangle" class="video__triangle">
                <img src="../../../assets/images/icons/graphic-arts/video-cross.svg" alt="cross" class="video__cross">
                <img src="../../../assets/images/icons/graphic-arts/video-vector1.svg" alt="vector" class="video__vector--big">
                <img src="../../../assets/images/icons/graphic-arts/video-vector2.svg" alt="vector" class="video__vector--little">
            </div>
        `
    }
}

customElements.define('video-section', VideoSection)