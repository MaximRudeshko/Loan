export default class Slider{
    constructor({container = null, btns = null, next = null, prev = null, activeClass = '', animated, autoPlay} = {}){
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.btns = document.querySelectorAll(btns);
        this.currentSlideIndex = 1;
        this.animated = animated;
        this.activeClass = activeClass;
        this.autoPlay = autoPlay;
    };
}