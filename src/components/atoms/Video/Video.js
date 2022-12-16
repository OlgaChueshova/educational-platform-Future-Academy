import { Component } from '../../../core';
import './video.scss';

export class Video extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('props'));
    }

    playVideo = (evt) => {
        videoClip.play();
    }

    componentDidMount() {
        const video = document.querySelector('.video__clip');
        const videoClip = new Video(video);
     
        window.addEventListener("play-video", this.playVideo);
    }

    componentWillUnmount() {
        window.removeEventListener("play-video", this.playVideo);
    }

    static get observedAttributes() {
        return ['props']
    }

    render() {
        return `
            <div class="video__background">
                <video 
                    src="${this.props.path}" 
                    poster="${this.props.poster}" 
                    class="${this.props.classname}"
                    ${this.props.iscontrols ? "controls" : ''}
                >
                </video>
            </div>
        `
    }
}

customElements.define('it-video', Video)