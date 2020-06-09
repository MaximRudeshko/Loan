
export default class Slider {
    constructor({container = null,
        btns = null,
        next = null, 
        prev = null,
        activeClass = '',
        animated,
        autoPlay } = {}){
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animated = animated;
        this.autoPlay = autoPlay;
        this.currentSlideIndex = 1;
    }
}