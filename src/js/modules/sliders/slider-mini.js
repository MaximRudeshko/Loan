import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoPlay) {
        super(container, next, prev, activeClass, animate, autoPlay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animated) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }
        
        if (this.animated) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        if(this.container.classList.contains('feed__slider')){
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[0];
                    this.container.insertBefore(active, this.slides[i]);
                    this.decorizeSlides();
                    break;
                }
            }
        }else{
            if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
                this.container.appendChild(this.slides[0]); // Slide
                this.container.appendChild(this.slides[1]); // Btn
                this.container.appendChild(this.slides[2]); // Btn
                this.decorizeSlides();
            } else if (this.slides[1].tagName == "BUTTON"){
                this.container.appendChild(this.slides[0]); // Slide
                this.container.appendChild(this.slides[1]); // Btn
                this.decorizeSlides();
            } else {
                this.container.appendChild(this.slides[0]);
                this.decorizeSlides();
            }
        }
    }

    prevSlide(){
        for (let i = this.slides.length - 1; i > 0; i--) {
            if (this.slides[i].tagName !== "BUTTON") {
                let active = this.slides[i];
                this.container.insertBefore(active, this.slides[0]);
                this.decorizeSlides();
                break;
            }
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());
        this.prev.addEventListener('click', () => this.prevSlide());
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();

        if (this.autoPlay) {
            setInterval(() => this.nextSlide(), 5000);
        }
    }
}